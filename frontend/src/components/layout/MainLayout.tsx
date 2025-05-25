import React from 'react';
import { Box, BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { Home, PhotoLibrary, Event, People, Info } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const getCurrentTab = () => {
    const path = location.pathname;
    if (path === '/') return 0;
    if (path === '/photos') return 1;
    if (path === '/schedule') return 2;
    if (path === '/guests') return 3;
    if (path === '/info') return 4;
    return 0;
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      pb: 7
    }}>
      <Box sx={{ flex: 1 }}>
        {children}
      </Box>
      <Paper
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          borderTop: '1px solid rgba(0, 0, 0, 0.12)'
        }}
        elevation={3}
      >
        <BottomNavigation
          value={getCurrentTab()}
          onChange={(_, newValue) => {
            switch (newValue) {
              case 0:
                navigate('/');
                break;
              case 1:
                navigate('/photos');
                break;
              case 2:
                navigate('/schedule');
                break;
              case 3:
                navigate('/guests');
                break;
              case 4:
                navigate('/info');
                break;
            }
          }}
          showLabels
        >
          <BottomNavigationAction label="首页" icon={<Home />} />
          <BottomNavigationAction label="照片" icon={<PhotoLibrary />} />
          <BottomNavigationAction label="日程" icon={<Event />} />
          <BottomNavigationAction label="宾客" icon={<People />} />
          <BottomNavigationAction label="信息" icon={<Info />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

export default MainLayout;
