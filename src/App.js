import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';

const App = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async (query) => {
    const appId = process.env.REACT_APP_EDAMAM_APP_ID;
    const appKey = process.env.REACT_APP_EDAMAM_APP_KEY;
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  return (
    <div>
      <Header />
      <SearchBar onSearch={fetchRecipes} />
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default App;