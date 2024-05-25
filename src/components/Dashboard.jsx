import React from 'react';
import { Typography, Container } from '@mui/material';

function Dashboard() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Welcome to the Dashboard</Typography>
      <Typography variant="body1">Here you can view the analysis results and system status.</Typography>
    </Container>
  );
}

export default Dashboard;
