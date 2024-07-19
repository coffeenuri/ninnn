import React, { useState } from 'react';

const quotes = [
  "Единственный способ делать выдающуюся работу — это любить то, что вы делаете. - Стив Джобс",
  "Успех не является ключом к счастью. Счастье является ключом к успеху. - Альберт Швейцер",
  "Лучший способ предсказать будущее — изобрести его. - Алан Кей",
  "Ваше время ограничено, не тратьте его, живя чужой жизнью. - Стив Джобс",
  "Единственный предел для нашего осознания завтрашнего дня — это наши сегодняшние сомнения. - Франклин Д. Рузвельт"
];

const QuoteGenerator = () => {
  const [quote, setQuote] = useState(quotes[0]);

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="quote-generator">
      <h2>Мотивационная цитата</h2>
      <p>{quote}</p>
      <button onClick={generateQuote}>Сгенерировать новую цитату</button>
    </div>
  );
};

export default QuoteGenerator;