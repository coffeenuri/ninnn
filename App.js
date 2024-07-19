import React from 'react';
import QuoteGenerator from './components/QuoteGenerator';
import ToDoList from './components/ToDoList';
import './styles.css'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <div className="logo">
            <a href="/">Ninjas</a>
          </div>
          <ul className="nav-links">
            <li><a href="/">Главная</a></li>
            <li><a href="/about_us">О нас</a></li>
            <li><a href="/our_goal">Наша цель</a></li>
            <li><a href="/opportunities">Возможности</a></li>
            <li><a href="/challenges">Проблемы</a></li>
            <li><a href="/gender_issues">Гендерные проблемы</a></li>
          </ul>
        </nav>
        <h1>Мотивационные цитаты и список задач</h1>
      </header>
      <main>
        <QuoteGenerator />
        <ToDoList />
      </main>
      <footer>
        <p>&copy; 2024 EdTech Platform. Все права защищены.</p>
      </footer>
    </div>
  );
}

export default App;