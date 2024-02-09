<template>
    <article>
        <div class="chat">
            <button style="margin-top: 10px" @click="start">Start</button>
            <div class="chat-main-img">
                <video ref="video" autoplay></video>
            </div>
            <input v-model="testValue">
            <button style="margin-top: 10px" @click="send" :class="{'disabled': !testValue}">Отправить</button>

<!--            <div class="chat-container">-->
<!--                <div v-if="transcript">{{ transcript }}</div>-->
<!--                <div class="chat-input">-->
<!--                    <button @click="startRecording" :class="{'disabled': !isRecording, 'active': isSay}">-->
<!--                        {{ isSay ? 'Говорите' : 'Начать запись' }}-->
<!--                    </button>-->
<!--                </div>-->
<!--            </div>-->
        </div>
    </article>
</template>

<script>
import io from "socket.io-client";
import axios from 'axios';

export default {
    data() {
        return {
            defaultLink: 'http://localhost/video/silence12sec.mp4',
            isRecording: false,
            recognition: null,
            step: 1,
            ws: null,
            need_answer: true,
            transcript: '',
            isSay: false,
            testValue: '',
            videoList: [],
            i: 0,
            test: false,
            order: [],
            orderId: 0,
            isSendDisabled: true
        };
    },
    async mounted() {
        this.ws = new WebSocket("ws://localhost/api/v1/courses/1/steps/1/question/");
        this.ws.onopen = function (e) {
            console.log("[open] Соединение установлено");
        };
        const video = this.$refs.video;

        this.ws.onmessage = async (e) => {
            const response = JSON.parse(e.data);
            this.videoList.push(response);
        }






        video.addEventListener('ended', () => {
            console.log('конец видео');
            // this.videoList.unshift();

            if(this.videoList.length === 0) {
              video.src = this.defaultLink;
            } else {
              console.log('1', this.videoList);
              video.src = this.videoList.shift().link;
            }
            // if(this.test) {
            //     this.order = this.videoList.filter(item => item.need_answer === false);
            //     console.log('order', this.order);
            //
            //     if(this.order && this.order.length > 0) {
            //         video.src = this.order[this.i].link;
            //         this.i = this.i + 1;
            //         console.log('i', this.i);
            //         console.log('this.order.length', this.order.length - 1);
            //
            //         if(this.i > this.order.length - 1) {
            //             console.log('finish');
            //             video.src = this.videoList[this.videoList.length - 1]?.link;
            //             this.order = [];
            //             this.i = 0;
            //         }
            //     } else {
            //         video.src = this.videoList[this.videoList.length - 1]?.link;
            //         this.test = false;
            //     }
            // } else {
            //     video.src = this.defaultLink;
            // }
        })


    },
    methods: {
        start() {
            const video = this.$refs.video;
            video.src = this.videoList[0]?.link;
            video.play();
            this.test = false;
        },
        send() {
            this.ws.send(this.testValue);
            this.testValue = '';
        },
        playVideo() {

        },
        async startRecording() {
            if (!this.isRecording) return;

            this.isSay = true;
            this.recognition = new webkitSpeechRecognition() || new SpeechRecognition();
            this.recognition.continuous = true;
            this.recognition.interimResults = true;
            this.recognition.lang = 'ru-RU';

            this.recognition.onresult = (event) => {
                console.log('onresult');
                let transcript = '';
                for (let i = event.resultIndex; i < event.results.length; i++) {
                    if (event.results[i].isFinal) {
                        transcript += event.results[i][0].transcript;
                    }
                }
                if (transcript) {
                    console.log('transcript', transcript);
                    this.transcript = transcript;
                    this.ws.send(transcript);
                    this.isRecording = false;
                    this.isSay = false;
                }
            };

            this.recognition.onerror = (event) => {
                console.error('Ошибка распознавания:', event.error);
            };

            this.recognition.onend = () => {
                console.log('onend');
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

.active {
    background-color: forestgreen;
}
</style>
