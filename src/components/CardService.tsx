import * as React from 'react';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';


interface ServiceCardProps {
  image?: string;
  title?: string;
  description?: string;
}

export default function CardService(props: ServiceCardProps) {
  const { image, title, description } = props;

  return (
    <Card sx={{ minHeight: {xs: '180px', md:'280px', sm: '180px'}, width: '100%' }}>
      <CardCover>
        <img
          src={image}
          srcSet="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320&dpr=2 2x"
          loading="lazy"
          alt=""
        />
      </CardCover>
      <CardCover
        sx={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
        }}
      />
      <CardContent sx={{ justifyContent: 'flex-end' }}>
        <Typography level="title-lg" textColor="#fff">
          {title}
        </Typography>
        <Typography
          textColor="neutral.300"
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}