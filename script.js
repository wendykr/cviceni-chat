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
        document.querySelector('#result').innerHTML = data.messages
        .map(oneMessage => 
            `<div class="result__item">
                <p><span class="result__name">${oneMessage.name}</span> <span class="result__date">${oneMessage.date}</span></p>
                <p class="result__message">${oneMessage.message}</p>
             </div>`)
        .join('');
    })
}

loadMessage();
setInterval(loadMessage, 3000);

formularElm.addEventListener('submit', process);