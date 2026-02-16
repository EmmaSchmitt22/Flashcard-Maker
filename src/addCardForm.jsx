
import React, { useState } from 'react';

const AddCardForm = ({ onAddCard }) => {
  const [formData, setFormData] = useState({ question: '', answer: ''});
  const [errors, setErrors] = useState({});

const handleChange = (e) => {
	const {name, value} = e.target
	setFormData(prev => ({... prev, [name]: value }));
  };


  const validate = () => {
    const newErrors = {};
    if (!formData.question.trim()) newErrors.question = 'Question is required';
    if (!formData.answer.trim()) newErrors.answer = 'Answer is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    
     if (Object.keys(validationErrors).length === 0) {
      onAddCard(formData);
      setFormData({ question: '', answer: '' });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div>
      <h2>Create New Flashcard</h2>
      <form onSubmit={handleSubmit}>
        <label>Question:<br />
          <input 
	type="text" 
	name="question" 
	value={formData.question} 
	onChange={handleChange} 
	/>
          {errors.question && <p style={{color: 'red'}}>{errors.question}</p>}
        </label><br /><br />

        <label>Answer:<br />
          <textarea 
	name="answer" 
	rows="5" 
	value={formData.answer} 
	onChange={handleChange}
	></textarea>
          {errors.answer && <p style={{color: 'red'}}>{errors.answer}</p>}
        </label><br /><br />

        <button type="submit">Add to Deck</button>
      </form>
    </div>
  );
}

export default AddCardForm;