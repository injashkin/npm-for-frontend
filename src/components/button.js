export const button = () => {
  let button = document.querySelector('.button');
  let text = button.textContent;
  const message = "Этот текст изменен JavaScript'ом";

  button.addEventListener('click', () => {
    text === message ? (text = 'Жми еще!') : (text = message);
    button.textContent = text;
  });
};
