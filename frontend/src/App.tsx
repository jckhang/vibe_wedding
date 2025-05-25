import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';

// Create a theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: '#9c27b0', // Purple
      light: '#f3e5f5',
    },
    secondary: {
      main: '#f50057', // Pink
    },
  },
  typography: {
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add more routes as we develop the features */}
          </Routes>
        </MainLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
