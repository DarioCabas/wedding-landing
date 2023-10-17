import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

export default function MediaCover() {
  return (
    <Box
      component="ul"
      sx={{ display: 'flex', flexWrap: 'wrap', p: 0, m: 0, height: '100%', width: '100%' }}
    >

      <iframe src="" width="100%"  allow="autoplay; fullscreen; picture-in-picture" ></iframe>

    </Box>
  );
}