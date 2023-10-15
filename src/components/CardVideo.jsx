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

      <iframe src="https://player.vimeo.com/video/873569687?h=0c5736bb06&autoplay=1" width="100%" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

    </Box>
  );
}