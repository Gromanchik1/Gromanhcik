document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.tab-link');
  const panes = document.querySelectorAll('.tab-pane');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // Отменяем стандартное поведение ссылки (переход по #id)

      // Убираем активный класс у всех ссылок и панелей
      links.forEach(l => l.classList.remove('active'));
      panes.forEach(p => p.classList.remove('active'));

      // Добавляем активный класс нажатой ссылке и соответствующей панели
      link.classList.add('active');

      const targetId = link.getAttribute('data-tab');
      const targetPane = document.getElementById(targetId);
      if (targetPane) {
        targetPane.classList.add('active');
      }
    });
  });
});

