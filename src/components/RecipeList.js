import React from 'react';
import styled from 'styled-components';
import RecipeCard from './RecipeCard';

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  padding: 1rem;
`;

const RecipeList = ({ recipes }) => {
  return (
    <ListContainer>
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe.recipe} />
      ))}
    </ListContainer>
  );
};

export default RecipeList;
