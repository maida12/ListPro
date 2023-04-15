import React, { useState } from 'react';


function MyForm() {
  // Declare state variables to hold form data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [gender, setGender] = useState('');

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}\nGender: ${gender}`);
  };

  return (
    <form onSubmit={handleSubmit} className="MyForm">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label htmlFor="message">Message:</label>
      <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} />

      <p className="gender-label">Gender:</p>
      <div className="radio-group">
        <label htmlFor="male">
          <input type="radio" id="male" name="gender" value="male" checked={gender === 'male'} onChange={(e) => setGender(e.target.value)} />
          <span>Male</span>
        </label>

        <label htmlFor="female">
          <input type="radio" id="female" name="gender" value="female" checked={gender === 'female'} onChange={(e) => setGender(e.target.value)} />
          <span>Female</span>
        </label>

        <label htmlFor="other">
          <input type="radio" id="other" name="gender" value="other" checked={gender === 'other'} onChange={(e) => setGender(e.target.value)} />
          <span>Other</span>
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
