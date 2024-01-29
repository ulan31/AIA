import io from 'socket.io-client';

const socket = io('http://localhost:3000'); // Замените на ваш адрес сервера

export default ({ app }, inject) => {
    inject('socket', socket);
};
