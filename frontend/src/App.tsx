import React from 'react';
import './index.css'
import { LoginForm } from './components/auth/login-form/login-form.component';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Routes } from './routes/routes';

const darkTheme = createTheme({
  palette: {
    mode: "dark"
  }
})

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
