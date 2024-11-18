import React, { useState } from 'react';
import './App.css';

const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
];

function App() {
  const [quote, setQuote] = useState(quotes[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Inspirational Quote Generator</h1>
      </div>
      <div className="quote-container">
        <p>"{quote.quote}"</p>
        <p>- {quote.author}</p>
        <button onClick={getRandomQuote}>New Quote</button>
      </div>
    </div>
  );
}

export default App;
