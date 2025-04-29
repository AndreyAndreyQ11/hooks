import React, { useState } from "react";
// import s from "./RandomCocktail.module.css";

export default function RandomCocktail({
  error,
  isLoaded,
  items,
  fetchRandomCocktail,
}) {
  return (
    <div>
      <button onClick={() => fetchRandomCocktail()}>
        Получить случайный коктейль
      </button>

      <p>{items ? items.strDrink : "Коктейль не загружен"}</p>

      {error ? (
        <p>Ошибка: {error.message}</p>
      ) : !isLoaded ? (
        <p>Загрузка...</p>
      ) : (
        <img src={items.strDrinkThumb} alt={items.strDrink} />
      )}
    </div>
  );
}
