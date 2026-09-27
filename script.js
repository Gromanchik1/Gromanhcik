document.addEventListener('DOMContentLoaded', () => {
  const tabLinks = document.querySelectorAll('.tab-link');
  const tabPanes = document.querySelectorAll('.tab-pane');

  if (tabLinks.length === 0 || tabPanes.length === 0) {
    console.error('Не найдены элементы вкладок. Проверь классы в HTML.');
    return;
  }

  tabLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      // Убираем active у всех
      tabLinks.forEach(l => l.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      // Добавляем active текущему
      link.classList.add('active');

      const targetId = link.getAttribute('data-tab');
      const targetPane = document.getElementById(targetId);
      if (targetPane) {
        targetPane.classList.add('active');
      } else {
        console.error('Не найдена панель с id=' + targetId);
      }
    });
  });
});
