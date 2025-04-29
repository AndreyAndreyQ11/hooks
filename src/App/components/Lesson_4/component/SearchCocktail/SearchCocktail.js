import React, { useState } from "react";

export default function SearchCocktail({
  error,
  isLoaded,
  items,
  fetchSearchCocktail,
}) {
  const [inputMaxSearch, setInputMaxSearch] = useState(2);
  function search(e) {
    const value = e.target.value.toLowerCase();
    fetchSearchCocktail(value);
  }

  return (
    <div>
      <section>
        <input type="text" placeholder="Найти/Find" onChange={search} />
        <input type="number" value={inputMaxSearch} style={{ width: "20%" }} />
      </section>
      {error ? (
        <p>Ошибка: {error.message}</p>
      ) : !isLoaded ? (
        <p>Загрузка...</p>
      ) : !items ? (
        <p>Пусто</p>
      ) : (
        items.map((item, index) => (
          <div key={index}>
            <p>{item.strDrink}</p>
            <img src={item.strDrinkThumb} alt={item.strDrink} />
          </div>
        ))
      )}
    </div>
  );
}
