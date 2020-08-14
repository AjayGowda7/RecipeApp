import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';


const App = () => {

  const APP_ID = "2a17cdce";
  const APP_KEY = "71901ade129a360dc95fa842b1f10f63";

  // here we set the state
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  // we set query because we dont want to refresh the app every time when user add new letter in the search bar
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
    // it will be updated only when user click search button
    // useEffect only run when query is changing (button is clicked)
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits)
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <h1>Recipe Search</h1>
      <p>(enter the ingredient you want to eat)</p>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Search</button>
      </form>

      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            health={recipe.recipe.healthLabels} />
        ))}
      </div>
    </div>
  )
}


export default App;
