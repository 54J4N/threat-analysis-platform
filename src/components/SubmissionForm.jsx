import React, { useState } from 'react';
import { Button, TextField, Container } from '@mui/material';

function SubmissionForm() {
  const [input, setInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input); // Placeholder for submission logic
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Enter URL or IP"
          variant="outlined"
          fullWidth
          margin="normal"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default SubmissionForm;
