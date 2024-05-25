import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

function LoginForm() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(credentials); // Placeholder for authentication logic
  };

  return (
    <Container>
      <Typography variant="h6">Login</Typography>
      <form onSubmit={handleLogin}>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          value={credentials.username}
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        />
        <Button type="submit" variant="contained" color="primary">
          Log In
        </Button>
      </form>
    </Container>
  );
}

export default LoginForm;
