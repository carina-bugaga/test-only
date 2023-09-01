/* Находим список кнопок и преобразуем в массив */
let btnList = document.querySelectorAll('input');
let btnArray = Array.from(btnList);

btnArray.forEach((btn) =>
  btn.addEventListener('click', () => {
    /* Если текст не виден,  добавляем подсказку*/
    /* Иначе убираем её */
    if (!btn.classList.contains('visible')) {
      closeButton();
      btn.classList.add('visible');
      btn.value = '-  ' + btn.getAttribute('hint');
    } else {
      btn.value = '+';
      btn.classList.remove('visible');
    }
  })
);

/* Listener для закрытия кнопок по клику на изображение*/
document.addEventListener('click', (e) => {
  const target = e.target;
  if (!target.closest('.button')) {
    closeButton();
  }
});

/* Метод для закрития открытых кнопок*/
const closeButton = () => {
  btnArray
    .filter((btn) => btn.classList.contains('visible'))
    .forEach((btn) => {
      btn.classList.remove('visible');
      btn.value = '+';
    });
};
