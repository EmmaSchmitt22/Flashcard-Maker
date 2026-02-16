import React, { useState } from 'react';
import './Flashcard.css';

const Flashcard = ({ question, answer }) => {
const [isFlipped, setIsFlipped] =useState(false);
const handleFlip = () => {
	setIsFlipped(!isFlipped);
};

return (
<div 
className={`flashcard-container ${isFlipped ? 'is-flipped' : ''}`}
onClick={handleFlip}
>

<div className = "flashcard-inner">

 <div className="flashcard-front">
  <div className="card-content">{question}</div>
 </div>

 <div className="flashcard-back">
  <div className="card-content">{answer}</div>
  </div>

 </div>
</div>
);
};

export default Flashcard;

