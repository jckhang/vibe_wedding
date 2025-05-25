'use client';

import React from 'react';
import { Box, BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { Home, PhotoLibrary, Event, People, Info } from '@mui/icons-material';
import { useRouter, usePathname } from 'next/navigation';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();

  const getCurrentTab = () => {
    if (pathname === '/') return 0;
    if (pathname === '/photos') return 1;
    if (pathname === '/schedule') return 2;
    if (pathname === '/guests') return 3;
    if (pathname === '/info') return 4;
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
          onChange={(_: unknown, newValue: number) => {
            switch (newValue) {
              case 0:
                router.push('/');
                break;
              case 1:
                router.push('/photos');
                break;
              case 2:
                router.push('/schedule');
                break;
              case 3:
                router.push('/guests');
                break;
              case 4:
                router.push('/info');
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
