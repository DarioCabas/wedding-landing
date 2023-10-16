import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Grid } from '@mui/material';
import { Avatar, Stack } from '@mui/joy';

const feedback = [
  {
    id: "feedback-1",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.jpg",
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.jpg",
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.jpg",
  },
];
const TestimonialsComponent = () => {

  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={6100}
    >
      {feedback.map((card) => (
        <Box sx={{ width: '100%', height: 500, display: 'flex', justifyContent: 'center', mb: 0, alignItems: 'center' }}>
          <Card sx={{ width: { md: '50%', lg: '50%', sm: '50%', xs: '85%', height: 400 } }}>
            <Stack sx={{ height: '100%'}} direction={{ xs: 'column', sm: 'row' }} >

              <Box sx={{ width: {md: '80%'}, height: {md:'100%'} ,display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Avatar src={card.img} sx={{ width: { sm: 200, xs: 100 }, height: { sm: 200, xs: 100 } }} />
              </Box>

              <Stack spacing={6} sx={{ width: '100%', height: '100%', display: 'flex', justifyContent:'center'}}>
                <Typography variant="body2" sx={{ textAlign: 'justify', fontSize: { xs: '0.8rem', sm: '1rem' } }}>
                  {card?.content}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }}>
                  {card?.name}
                  <br />
                  <Typography variant='subtitle1'>{card?.title}</Typography>
                </Typography>
              </Stack>

            </Stack>
          </Card>
        </Box>
      ))
      }
    </Carousel >
  );

}

export default TestimonialsComponent