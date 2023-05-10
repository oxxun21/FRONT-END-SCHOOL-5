import React from 'react';
import './EventForm.css';
import { useState } from 'react';

export default function EventForm({addData}) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [food, setFood] = useState('짜장면');

  const resetForm = () => {
    setTitle('');
    setDate('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      id: Math.floor(Math.random() * 10000),
      title: title,
      date: date,
      food: food,
    }
    console.log(formData);
    addData(formData);
    resetForm();
  }

  return (
    <form className='event-form' onSubmit={handleSubmit}>
      <label>
        <strong>Event Title: </strong>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        <strong>Event date: </strong>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
      <label>
        <select onChange={(e) => {setFood(e.target.value)}}>
          <option value="짜장면">짜장면</option>
          <option value="짬뽕">짬뽕</option>
          <option value="탕수육">탕수육</option>
        </select>
      </label>
      <button type='submit' onClick={handleSubmit}>Sumbit</button>
      <button type='reset' onClick={resetForm}>Reset</button>
    </form>
  )
}
