<template>
  <article>
    <div class="chat">
      <div class="chat-main-img">
        <video ref="video" autoplay></video>
      </div>

      <div class="chat-container">
        <div class="chat-input">
          <button @click="startRecording" :class="{'disabled': !isRecording}">Начать запись</button>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import io from "socket.io-client";
import axios from 'axios';

export default {
  data() {
    return {
      defaultLink: 'http://localhost/video/silence5sec.mp4',
      isRecording: false,
      recognition: null,
      step: 1,
      ws: null,
    };
  },
  async mounted() {
    this.ws = new WebSocket("ws://localhost/api/v1/courses/1/steps/1/question/");

    this.ws.onopen = function(e) {
      console.log("[open] Соединение установлено");
    };

    const video = this.$refs.video;

    this.ws.onmessage = function(e) {
      const response = JSON.parse(e.data);
      video.src = response.link;
    }

    video.addEventListener('waiting', () => {
      console.log('waiting', this.defaultLink);
      // video.src = this.defaultLink;
    });

    video.addEventListener('ended', () => {
      console.log('ended 0', this.defaultLink);
      this.isRecording = true;
      video.src = this.defaultLink;
      // video.play();
    });
  },
  methods: {
    async startRecording() {
      const video = this.$refs.video;
      this.recognition = new webkitSpeechRecognition() || new SpeechRecognition();
      this.recognition.continuous = true;
      this.recognition.interimResults = true;
      this.recognition.lang = 'ru-RU';

      this.recognition.onresult = (event) => {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          if (event.results[i].isFinal) {
            transcript += event.results[i][0].transcript;
          }
        }
        if (transcript) {
          console.log('transcript', transcript);
          this.ws.send(transcript);
          this.isRecording = false;
        }
      };

      this.ws.onmessage = (e) => {

        const response = JSON.parse(e.data);
        console.log('here', response);
        console.log('here video', video);
        console.log('here link', response.link);
        video.src = response.link;

        // Update event listener for the 'ended' event
        video.addEventListener('ended', () => {
          console.log('ended', response);
          this.isRecording = true;
          // Optionally, you can remove the event listener here
          // video.removeEventListener('ended', this.playNextVideo);
          // Call the startRecording method again or perform any other logic
          // this.startRecording();
        });

        // Optionally, you can add an event listener for 'error' to handle video loading errors
        video.addEventListener('error', (error) => {
          console.error('Video loading error:', error);
        });
      };

      this.recognition.onerror = (event) => {
        console.error('Ошибка распознавания:', event.error);
      };

      this.recognition.onend = () => {
        this.isRecording = false;
        this.recognition = null;
      };

      this.recognition.start();
      this.isRecording = true;
      console.log('Распознавание начато');
    },
  }
};
</script>

<style scoped>
.chat {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 50px;
}

.chat-main-img {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
  text-align: center;
  border-radius: 50%;
  overflow: hidden;
}

.chat-main-img video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.chat-container {
  border-radius: 16px;
  border: 1px solid #B2DFF1;
  background: #FDFDFD;
  padding: 29px 83px;
  width: 100%;
  margin-top: 40px;
}

.chat-messages {
  margin-bottom: 20px;
}

.disabled {
  background: #7CA5B5;
  cursor: not-allowed;
}
</style>
