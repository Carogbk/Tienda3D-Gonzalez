import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Detail = ({ productos }) => {
    
    return (
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={productos.image}
              alt={productos.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              {productos.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              ${productos.price}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      );
  };

  export default Detail;
