import express from 'express';
import fetch from 'node-fetch';

const app = express();

// Задаем порт, на котором будет работать сервер
const PORT = 3000;

// Обработка запросов к серверу
app.get('/api', async (req, res) => {
    try {
        // Отправляем запрос к API
        const response = await fetch('https://api.vk.com/method/wall.get?owner_id=174700694&domain=tspk63&offset=1&count=5&access_token=664330a8664330a8664330a8fa6638f9f566643664330a8047988401142e3fe7c189a9a&filter=owner&v=5.199');
        // Проверяем статус ответа
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        // Получаем данные в формате JSON
        const data = await response.json();
        // Отправляем ответ клиенту
        res.json(data);
    } catch (error) {
        console.error('There was a problem with your fetch operation:', error);
        res.status(500).send('Internal Server Error');
    }
});

export default data
// Запускаем сервер
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});