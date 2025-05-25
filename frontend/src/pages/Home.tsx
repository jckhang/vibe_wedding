import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Button,
  useTheme
} from '@mui/material';
import {
  Favorite,
  AccessTime,
  LocationOn,
  PhotoCamera
} from '@mui/icons-material';

const Home: React.FC = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="sm" sx={{ px: 2, py: 3 }}>
      {/* Hero Section */}
      <Box sx={{
        textAlign: 'center',
        mb: 4,
        position: 'relative',
        height: '40vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("/images/hero-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: 2,
        color: 'white'
      }}>
        <Typography variant="h4" sx={{ mb: 1, fontWeight: 'bold' }}>
          我们的婚礼
        </Typography>
        <Typography variant="h6" sx={{ mb: 2 }}>
          2024.06.01
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<Favorite />}
          sx={{
            borderRadius: 20,
            px: 3,
            py: 1
          }}
        >
          倒计时
        </Button>
      </Box>

      {/* Quick Info Cards */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid item xs={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <AccessTime sx={{ fontSize: 40, color: theme.palette.primary.main }} />
              <Typography variant="h6" sx={{ mt: 1 }}>仪式时间</Typography>
              <Typography variant="body2" color="text.secondary">
                下午 3:00
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <LocationOn sx={{ fontSize: 40, color: theme.palette.primary.main }} />
              <Typography variant="h6" sx={{ mt: 1 }}>婚礼地点</Typography>
              <Typography variant="body2" color="text.secondary">
                巴厘岛
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Photo Gallery Preview */}
      <Card sx={{ mb: 4 }}>
        <CardMedia
          component="img"
          height="200"
          image="/images/gallery-preview.jpg"
          alt="Photo Gallery"
        />
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="h6">照片墙</Typography>
            <Button
              endIcon={<PhotoCamera />}
              color="primary"
            >
              查看全部
            </Button>
          </Box>
        </CardContent>
      </Card>

      {/* Important Notice */}
      <Card sx={{ bgcolor: theme.palette.primary.light }}>
        <CardContent>
          <Typography variant="h6" color="primary" sx={{ mb: 1 }}>
            重要提醒
          </Typography>
          <Typography variant="body2" color="text.secondary">
            • 请提前确认行程安排
            <br />
            • 准备适合巴厘岛天气的衣物
            <br />
            • 查看当地风俗习惯
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Home;
