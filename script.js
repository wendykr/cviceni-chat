import { Message } from './Message/index.js';

const formularElm = document.querySelector('#formular');
const nameElm = document.querySelector('#name');
const messageElm = document.querySelector('#message');

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

const loadMessage = () => {
    fetch('https://czechichat.deno.dev/api/list-messages', {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json'
        },
    })
    .then(response => response.json())
    .then(data => {

        const resultElm = document.querySelector('#result');

        const listMessage = data.messages.map(oneMessage => Message({
            name: oneMessage.name,
            date: oneMessage.date,
            message: oneMessage.message
        }));

        resultElm.innerHTML = '';
        resultElm.append(...listMessage);
    })
}

loadMessage();
setInterval(loadMessage, 3000);

formularElm.addEventListener('submit', process);