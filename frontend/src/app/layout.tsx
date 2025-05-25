'use client';

import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import MainLayout from '@/components/layout/MainLayout';

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainLayout>{children}</MainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
