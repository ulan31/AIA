<template>
  <article>
    <div class="chat">


      <div class="chat-main-img">
        <video ref="video" autoplay></video>
      </div>
      <div class="chat-container">
        <div v-for="(item, idx) in talk" :key="idx" class="chat-messages" id="chat-messages">
          {{ item }}
        </div>
        <div v-if="gpt">{{ gpt }}</div>
        <div class="chat-input">
          <button @click="sendMessage" :disabled="isRecording">Начать запись</button>
        </div>
      </div>
    </div>

<!--    <video id="video"></video>-->

  </article>
</template>

<script>
import io from "socket.io-client";
import axios from 'axios';

export default {
  data() {
    return {
      isRecording: false,
      transcription: '',
      transcripts: [],
      recognition: null,
      step: 1,
      id: null,
      talk: [],
      firstQuestion: '',
      gpt: null,
        ws: null
    };
  },
  async mounted() {
    //let accessToken = localStorage.getItem('access_token');
    //this.firstQuestion = await axios.get('http://localhost/api/v1/courses/1/steps/', {
      //  headers: {
        //  'Authorization': `Bearer ${accessToken}`
        //}
    //});
    //  console.log('dsadas', this.firstQuestion)
    // this.talk.push(this.firstQuestion.question);
    // this.id = this.firstQuestion.id;
    //
    // const videoTag = document.getElementById('video');
    // const myMediaSource = new MediaSource();
    // const url = URL.createObjectURL(myMediaSource);
    // videoTag.src = url;
    //
    // console.log('videoTag', videoTag)

    // Замените URL на ваш WebSocket сервер
    // const socketUrl = 'ws://localhost/api/v1/courses/1/steps/1/question/';

    // Создаем экземпляр сокета
    // this.socket = io(socketUrl, {
    //   // withCredentials: true,
    //   // extraHeaders: {
    //   //   'Authorization': `Bearer ${accessToken}`,
    //   // },
    //   transportOptions: {
    //     polling: {
    //       extraHeaders: {
    //         'Authorization': `Bearer ${accessToken}`,
    //       },
    //     },
    //   }
    // });
    //
    // this.socket.on('connect', () => {
    //   console.log('Connected to server');
    // });
    //
    // this.socket.on('message', (data) => {
    //   console.log('Received message:', data);
    // });
    //
    // this.socket.on('disconnect', () => {
    //   console.log('Disconnected from server');
    // });

    // let socket = new WebSocket("ws://localhost/api/v1/courses/1/steps/1/question/");
    //
    // // socket.onopen = function(e) {
    // //   console.log("[open] Соединение установлено");
    // //   console.log("Отправляем данные на сервер");
    // //   socket.send("Меня зовут Джон");
    // // };
    //
    // socket.onmessage = function(event) {
    //   console.log(`[message] Данные получены с сервера: ${event.data}`);
    // };
    //
    // socket.onclose = function(event) {
    //   if (event.wasClean) {
    //     console.log(`[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`);
    //   } else {
    //     // например, сервер убил процесс или сеть недоступна
    //     // обычно в этом случае event.code 1006
    //     console.log('[close] Соединение прервано');
    //   }
    // };
    //
    // socket.onerror = function(error) {
    //   console.log(`[error]`);
    // };
      let ws = new WebSocket("ws://localhost/api/v1/courses/1/steps/1/question/");

      ws.onopen = function(e) {
          console.log("[open] Соединение установлено");
          console.log("Отправляем данные на сервер");
          ws.send("Меня зовут Джон");
      };

      // this.ws.onmessage = function(event) {
      //     var messages = document.getElementById('messages')
      //     var message = document.createElement('li')
      //     var obj = JSON.parse(event.data)
      //     var content = document.createTextNode(event.data)
      //     message.appendChild(content)
      //     messages.appendChild(message)
      // };
  },
  methods: {
      sendMessage(event) {
          this.ws.send('')
      },
    async startRecording() {
      this.transcripts.length = 0;
      this.transcription = '';
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
          this.transcripts.push(transcript);
          this.talk.push(transcript);
          if (transcript) {
            this.updateTranscription(transcript);
          }
        }
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

      // Добавляем код для потокового видео
      const videoElement = this.$refs.video;
      await this.playCamera(videoElement, 640, 480);
    },
    updateTranscription(transcript) {
      if (this.talk.length === 2) {
        this.talk.push('Какой продукт является результатом Вашей деятельности? Что получается на выходе?');
      }

      if (this.talk.length === 4) {
        this.talk.push('Хорошо, и на каких территориях вы это делаете?');
      }

      if (this.talk.length === 6) {
        this.talk.push('Получается, что Вы ...');
        this.gpt = '"answer": "DEV_MODE: HERE WILL BE GPT ANSWER."';
      }

      this.id++;
    },
    playCamera(element, preferedWidth, preferedHeight) {
      return new Promise((resolve, reject) => {
        const devices = navigator.mediaDevices;
        if (devices && 'getUserMedia' in devices) {
          const constraints = {
            video: {
              width: preferedWidth,
              height: preferedHeight
            }
          };
          devices.getUserMedia(constraints)
              .then((stream) => {
                element.srcObject = stream;
                resolve();
              })
              .catch((error) => {
                console.error(error.name + ': ' + error.message);
                reject(error);
              });
        } else {
          console.error('Camera API is not supported.');
          reject(new Error('Camera API is not supported.'));
        }
      });
    }
  }
};
</script>

<style scoped>
.chat {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.chat-main-img {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 286px;
  height: 264.752px;
  /*background: url('/assets/images/sara.png'), lightgray 50% / cover no-repeat;*/
  border-radius: 50%;
  text-align: center;
}

.chat-container {
  border-radius: 16px;
  border: 1px solid #B2DFF1;
  background: #FDFDFD;
  padding: 29px 83px;
  width: 100%;
  margin-top: 150px;
}

.chat-messages {
  margin-bottom: 20px;
}
</style>
