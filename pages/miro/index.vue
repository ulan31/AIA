<template>
    <arcticle>
        <button style="margin-top: 10px" @click="createBoards">Создать доску</button>
        <button style="margin-top: 10px" @click="createCard">Создать карточку 1</button>
        <button style="margin-top: 10px" @click="createCard1">Создать карточку 2</button>
        <button style="margin-top: 10px" @click="connect">Соединить</button>

        <iframe v-if="idBoard" style="margin-top: 10px" :src="`https://miro.com/app/board/${idBoard}/`" width="800" height="600" frameborder="0" scrolling="no"></iframe>
    </arcticle>
</template>

<script>
export default {
    data() {
        return {
            idBoard: ''
        }
    },
    mounted() {
        const options = {method: 'GET', headers: {accept: 'application/json', 'Authorization': 'Bearer eyJtaXJvLm9yaWdpbiI6ImV1MDEifQ_XU2JvpCHoXkLG0BUYMUvDeTmnOQ'}};

        fetch('https://api.miro.com/v2/boards', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
        this.idBoard = localStorage.getItem('idBoard');
    },
    methods: {
        createBoards() {
            const options = {
                method: 'POST',
                headers: {accept: 'application/json', 'content-type': 'application/json', 'Authorization': 'Bearer eyJtaXJvLm9yaWdpbiI6ImV1MDEifQ_XU2JvpCHoXkLG0BUYMUvDeTmnOQ'}
            };

            fetch('https://api.miro.com/v2/boards', options)
                .then(response => response.json())
                .then(response => {
                    console.log(response)
                    this.idBoard = response.id;
                    localStorage.setItem('idBoard', this.idBoard);
                })
                .catch(err => console.error(err));
        },
        createCard() {
            let idBoard = localStorage.getItem('idBoard');
            const options = {
                method: 'POST',
                headers: {
                    accept: 'application/json',
                    'content-type': 'application/json',
                    authorization: 'Bearer eyJtaXJvLm9yaWdpbiI6ImV1MDEifQ_pe1CRGHmzuBvUIdZ1f3cH9rMiGc'
                },
                body: JSON.stringify({data: {title: 'test1'}})
            };

            fetch(`https://api.miro.com/v2/boards/${idBoard}/cards`, options)
                .then(response => response.json())
                .then(response => {
                    localStorage.setItem('card1', response.id);
                    console.log(response)
                })
                .catch(err => console.error(err));
        },
        createCard1() {
            let idBoard = localStorage.getItem('idBoard');
            const options = {
                method: 'POST',
                headers: {
                    accept: 'application/json',
                    'content-type': 'application/json',
                    authorization: 'Bearer eyJtaXJvLm9yaWdpbiI6ImV1MDEifQ_pe1CRGHmzuBvUIdZ1f3cH9rMiGc'
                },
                body: JSON.stringify({data: {title: 'test2'}, position: {x: 400}})
            };

            fetch(`https://api.miro.com/v2/boards/${idBoard}/cards`, options)
                .then(response => response.json())
                .then(response => {
                    localStorage.setItem('card2', response.id);
                    console.log(response)
                })
                .catch(err => console.error(err));
        },
        connect() {
            let idBoard = localStorage.getItem('idBoard');
            let card1 = localStorage.getItem('card1');
            let card2 = localStorage.getItem('card2');

            const options = {
                method: 'POST',
                headers: {
                    accept: 'application/json',
                    'content-type': 'application/json',
                    authorization: 'Bearer eyJtaXJvLm9yaWdpbiI6ImV1MDEifQ_pe1CRGHmzuBvUIdZ1f3cH9rMiGc'
                },
                body: JSON.stringify({startItem: {id: card1}, endItem: {id: card2}})
            };

            fetch(`https://api.miro.com/v2/boards/${idBoard}/connectors`, options)
                .then(response => response.json())
                .then(response => console.log(response))
                .catch(err => console.error(err));
        }
    }
}
</script>