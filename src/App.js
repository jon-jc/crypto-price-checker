// src/App.js

import React from 'react';
import HomePage from './components/HomePage';
import { CssBaseline, Container, ThemeProvider, createTheme } from '@mui/material';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // A shade of blue.
    },
    secondary: {
      main: '#424242', // A shade of grey.
    },
    background: {
      default: '#f0f2f5', // Light grey background.
      paper: '#ffffff', // White background for paper components.
    },
    text: {
      primary: '#212121', // Dark grey text.
      secondary: '#1976d2', // Blue text for contrast or emphasis.
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <HomePage />
      </Container>
    </ThemeProvider>
  );
}

export default App;
