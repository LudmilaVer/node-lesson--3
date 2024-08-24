const fs = require('fs'); // Импортируем модуль fs

// Создание каталога 'myFolder'
fs.mkdir('myFolder', (err) => {
  if (err) {
    return console.error('Ошибка при создании каталога:', err);
  }
  console.log('Каталог myFolder успешно создан.');

  // Удаление каталога 'myFolder'
  fs.rmdir('myFolder', (err) => {
    if (err) {
      return console.error('Ошибка при удалении каталога:', err);
    }
    console.log('Каталог myFolder успешно удалён.');
  });
});
