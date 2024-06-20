import React from 'react';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const StyledCard = styled(Card)`
  max-width: 345px;
  margin: auto;
`;

const RecipeCard = ({ recipe }) => {
  return (
    <StyledCard>
      <CardMedia
        component="img"
        height="140"
        image={recipe.image}
        alt={recipe.label}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {recipe.label}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {recipe.source}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default RecipeCard;