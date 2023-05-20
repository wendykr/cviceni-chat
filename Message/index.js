export const Message = (props) => {

    const { name, date, message } = props;

    const element = document.createElement('div');
    element.classList.add('result__item');

    element.innerHTML = `
        <p><span class="result__name">${name}</span> <span class="result__date">${date}</span></p>
        <p class="result__message">${message}</p>
        `;

    return element;

}