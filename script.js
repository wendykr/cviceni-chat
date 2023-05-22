import { LoadMessage } from './LoadMessage/index.js';

const formularElm = document.querySelector('#formular');
const nameElm = document.querySelector('#name');
const messageElm = document.querySelector('#message');
const containerElm = document.querySelector('.container');

const process = (event) => {
    event.preventDefault();

    const objectData = {
        name: nameElm.value,
        message: messageElm.value,
    }

    fetch('https://czechichat.deno.dev/api/send-message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(objectData),
    })

    .then(response => response.json())
    .then(data => {
        if (data.status = 'ok') {
            messageElm.value = '';
        }
    });
}

containerElm.append(LoadMessage());

setInterval(LoadMessage, 3000);

formularElm.addEventListener('submit', process);