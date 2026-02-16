import React, { useState } from 'react';
import Flashcard from './Flashcard';
import AddCardForm from './addCardForm';
import "./App.css";

function App() {
  const [cards, setCards] = useState([])

const addCard = (newCard) => {
	setCards([...cards, {...newCard, id: Date.now() }]);
};

  return (
      <div className="app">
        <h1> Flashcard Deck </h1>
	<AddCardForm onAddCard={addCard} />

     <div className="card-grid">
       {cards.map(card => (
	<Flashcard
	key = {card.id}
	question={card.question}
        answer={card.answer}
       />
      ))}
      </div>
    </div>
  );
}

export default App;
