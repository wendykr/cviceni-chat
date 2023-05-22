import { Message } from '../Message/index.js';

export const LoadMessage = (props) => {

    const element = document.createElement('div');
    element.setAttribute('id','result');


        fetch('https://czechichat.deno.dev/api/list-messages', {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json'
            },
        })
        .then(response => response.json())
        .then(data => {

            const listMessage = data.messages.map(oneMessage => Message({
                name: oneMessage.name,
                date: oneMessage.date,
                message: oneMessage.message
            }));

            element.innerHTML = '';
            element.append(...listMessage);
        })

    return element;
}