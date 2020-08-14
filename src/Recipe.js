import React from 'react';
import style from './recipe.module.css';

const Recipe = ({ title, calories, image, ingredients, health }) => {
    return (
        <div className={style.recipe}>
            <h1 className={style.h1}>{title}</h1>
            <img className={style.image} src={image} alt="#" />
            <h3>Recipe:</h3>
            <ol className={style.ingredients}>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            {/* <p><b>Healty info:</b> {health.map(one => (
                <p> {one.split('---')} </p>
            ))}</p> */}

            <p className={style.healtyInfo}><b>Healty info:</b> {health.map(one => (
                <span> {one}. </span>
            ))}</p>

            <p className={style.healtyInfo}><b>Calories:</b> {calories.toFixed()}</p>
        </div>
    )
}

export default Recipe;