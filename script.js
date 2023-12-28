// Функция для получения случайного слова из файла
async function getRandomWord() {
  try {
    // Загрузка файла с помощью fetch
    const response = await fetch('genre.txt');

    if (!response.ok) {
      throw new Error('Ошибка загрузки файла');
    }

    const words = await response.text();

    // Разделение строк файла на массив слов
    const wordArray = words.split('\n').filter(Boolean);

    // Получение случайного слова из массива
    const randomIndex = Math.floor(Math.random() * wordArray.length);
    const randomWord = wordArray[randomIndex];

    // Вывод случайного слова
    document.getElementById('random-word').textContent = `Случайное слово: ${randomWord}`;
  } catch (error) {
    console.error('Произошла ошибка:', error.message);
  }
}
