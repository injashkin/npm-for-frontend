export function button(prop) {
  let button = document.querySelector('.button');
  button.innerHTML = `Этот текст изменил JavaScript ${prop}`;
  document.body.appendChild(button);
  console.log('Ура! Заработало!');
}
