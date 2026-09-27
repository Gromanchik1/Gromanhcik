document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.tab-btn'); // Класс твоих кнопок
  const content = document.querySelectorAll('.tab-content'); // Класс блоков с контентом

  buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      // Убираем активный класс у всех
      buttons.forEach(b => b.classList.remove('active'));
      content.forEach(c => c.classList.remove('active'));

      // Добавляем активный класс нажатой кнопке и нужному блоку
      btn.classList.add('active');
      content[index].classList.add('active');
    });
  });
});
