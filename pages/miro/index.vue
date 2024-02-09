<template>
  <arcticle>
    <button style="margin-top: 10px" @click="createBoards">Создать доску</button>
    <button style="margin-top: 10px" @click="createCard">Создать карточку 1</button>
    <button style="margin-top: 10px" @click="createCard1">Создать карточку 2</button>
    <button style="margin-top: 10px" @click="connect">Соединить</button>

    <iframe v-if="idBoard" style="margin-top: 10px" :src="`https://miro.com/app/board/${idBoard}/`" width="800"
            height="600" frameborder="0" scrolling="no"></iframe>
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
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'Authorization': 'Bearer eyJtaXJvLm9yaWdpbiI6ImV1MDEifQ_XU2JvpCHoXkLG0BUYMUvDeTmnOQ'
      }
    };

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
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          'Authorization': 'Bearer eyJtaXJvLm9yaWdpbiI6ImV1MDEifQ_XU2JvpCHoXkLG0BUYMUvDeTmnOQ'
        }
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
        body: JSON.stringify({
          data: {title: 'дlorem sadsa dsa d sad sad sa d sad sadsadj nsajlkbdsd b hdsbshd fdsfdsfdsfdsfds'},
          position: {x: 400, y: 500}
        })
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
        body: JSON.stringify({data: {title: 'test2dsvsdvds'}, position: {x: 400}})
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
        body: JSON.stringify({startItem: {id: card1, snapTo: 'right'}, endItem: {id: card2}})
      };

      fetch(`https://api.miro.com/v2/boards/${idBoard}/connectors`, options)
          .then(response => response.json())
          .then(response => console.log(response))
          .catch(err => console.error(err));
    }
  }
}
</script>


{
"size": 6,
"limit": 10,
"total": 6,
"data": [
{
"id": "3458764578363188728",
"type": "card",
"data": {
"title": "test1"
},
"style": {
"cardTheme": "#2d9bf0"
},
"geometry": {
"width": 320,
"height": 60
},
"position": {
"x": 0,
"y": 0,
"origin": "center",
"relativeTo": "canvas_center"
},
"links": {
"self": "http://api.miro.com/v2/boards/uXjVNv45AIA%3D/cards/3458764578363188728"
},
"createdAt": "2024-02-08T12:15:26Z",
"createdBy": {
"id": "3074457355961907759",
"type": "user"
},
"modifiedAt": "2024-02-08T12:15:26Z",
"modifiedBy": {
"id": "3074457355961907759",
"type": "user"
}
},
{
"id": "3458764578363188807",
"type": "card",
"data": {
"title": "test2"
},
"style": {
"cardTheme": "#2d9bf0"
},
"geometry": {
"width": 320,
"height": 60
},
"position": {
"x": 400,
"y": 0,
"origin": "center",
"relativeTo": "canvas_center"
},
"links": {
"self": "http://api.miro.com/v2/boards/uXjVNv45AIA%3D/cards/3458764578363188807"
},
"createdAt": "2024-02-08T12:15:33Z",
"createdBy": {
"id": "3074457355961907759",
"type": "user"
},
"modifiedAt": "2024-02-08T12:15:33Z",
"modifiedBy": {
"id": "3074457355961907759",
"type": "user"
}
},
{
"id": "3458764578416706346",
"type": "card",
"data": {
"assigneeId": "3458764578416187965",
"description": "dsadasdsadasds",
"title": "title"
},
"style": {
"cardTheme": "#2d9bf0"
},
"geometry": {
"width": 320,
"height": 60
},
"position": {
"x": 456.68077473161264,
"y": -183.73751971017475,
"origin": "center",
"relativeTo": "canvas_center"
},
"links": {
"self": "http://api.miro.com/v2/boards/uXjVNv45AIA%3D/cards/3458764578416706346"
},
"createdAt": "2024-02-08T17:32:06Z",
"createdBy": {
"id": "3074457355961907759",
"type": "user"
},
"modifiedAt": "2024-02-08T17:36:58Z",
"modifiedBy": {
"id": "3074457355961907759",
"type": "user"
}
},
{
"id": "3458764578417253833",
"type": "app_card",
"data": {
"description": "description",
"fields": [
{
"fillColor": "#ffffff",
"iconShape": "round",
"textColor": "#1a1a1a"
}
],
"owned": true,
"status": "disconnected"
},
"style": {
"fillColor": "#2d9bf0"
},
"geometry": {
"width": 320,
"height": 60
},
"position": {
"x": 80.00000000000001,
"y": -215.69183342363738,
"origin": "center",
"relativeTo": "canvas_center"
},
"links": {
"self": "http://api.miro.com/v2/boards/uXjVNv45AIA%3D/app_cards/3458764578417253833"
},
"createdAt": "2024-02-08T17:36:46Z",
"createdBy": {
"id": "3074457355961907759",
"type": "user"
},
"modifiedAt": "2024-02-08T17:36:55Z",
"modifiedBy": {
"id": "3074457355961907759",
"type": "user"
}
},
{
"id": "3458764578417456521",
"type": "app_card",
"data": {
"description": "description",
"fields": [
{
"fillColor": "#ffffff",
"iconShape": "round",
"textColor": "#1a1a1a",
"tooltip": "tooltip",
"value": "value"
}
],
"owned": true,
"status": "disconnected"
},
"style": {
"fillColor": "#2d9bf0"
},
"geometry": {
"width": 320,
"height": 60
},
"position": {
"x": -262.56748879124103,
"y": -194.5719597362399,
"origin": "center",
"relativeTo": "canvas_center"
},
"links": {
"self": "http://api.miro.com/v2/boards/uXjVNv45AIA%3D/app_cards/3458764578417456521"
},
"createdAt": "2024-02-08T17:37:50Z",
"createdBy": {
"id": "3074457355961907759",
"type": "user"
},
"modifiedAt": "2024-02-08T17:38:09Z",
"modifiedBy": {
"id": "3074457355961907759",
"type": "user"
}
},
{
"id": "3458764578419475230",
"type": "card",
"data": {
"title": "<p>наша доска</p>"
},
"style": {
"cardTheme": "#2d9bf0"
},
"geometry": {
"width": 320,
"height": 60
},
"position": {
"x": -871.24264889014,
"y": 47.03476875777379,
"origin": "center",
"relativeTo": "canvas_center"
},
"links": {
"self": "http://api.miro.com/v2/boards/uXjVNv45AIA%3D/cards/3458764578419475230"
},
"createdAt": "2024-02-08T17:51:34Z",
"createdBy": {
"id": "3074457355961907759",
"type": "user"
},
"modifiedAt": "2024-02-08T17:51:40Z",
"modifiedBy": {
"id": "3074457355961907759",
"type": "user"
}
}
],
"links": {
"self": "http://api.miro.com/v2/boards/uXjVNv45AIA%3D/cards?limit=10&cursor="
},
"type": "cursor-list"
}
