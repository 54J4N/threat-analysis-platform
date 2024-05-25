import React, { useState } from 'react';

function SubmissionForm() {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement what happens when the form is submitted
    console.log(inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter Data:
        <input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default SubmissionForm;
