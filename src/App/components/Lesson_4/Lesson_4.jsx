import React, { useState } from "react";
import s from "./Lesson_4.module.css";

import RandomCocktail from "./component/RandomCocktail/RandomCocktail.js"
import SearchCocktail from "./component/SearchCocktail/SearchCocktail.js"

export default function Lesson_4() {
  const [appThecocktaildbRandom, setAppThecocktaildbRandom] = useState({
    error: null,
    isLoaded: false,
    items: null,
  });
  const [appThecocktaildbSearch, setAppThecocktaildbSearch] = useState({
    error: null,
    isLoaded: false,
    items: null,
  });


  function fetchRandomCocktail() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((res) => res.json())
      .then(
        (result) => {
          setAppThecocktaildbRandom({
            error: null,
            isLoaded: true,
            items: result.drinks ? result.drinks[0] : null,
          });
        },
        (error) => {
          setAppThecocktaildbRandom({
            error,
            isLoaded: true,
            items: null,
          });
        }
      );
  }
  function fetchSearchCocktail(cocktailName) {

    if (cocktailName) {
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${encodeURIComponent(cocktailName)}`)
        .then((res) => res.json())
        .then(
          (result) => {
            setAppThecocktaildbSearch({
              error: null,
              isLoaded: true,
              items: result.drinks ? result.drinks : null,
            });
          },
          (error) => {
            setAppThecocktaildbSearch({
              error,
              isLoaded: true,
              items: null,
            });
          }
        );
    } else {
      setAppThecocktaildbSearch({
        error: null,
        isLoaded: false,
        items: null,
      })

    }
  }
  const { error: randomError, isLoaded: randomIsLoaded, items: randomItems } = appThecocktaildbRandom;
  const { error: searchError, isLoaded: searchIsLoaded, items: searchItems } = appThecocktaildbSearch;



  return (
    <div className={s.container}>
      <RandomCocktail
        error={randomError}
        isLoaded={randomIsLoaded}
        items={randomItems}
        fetchRandomCocktail={fetchRandomCocktail}
      />
      <SearchCocktail
        error={searchError}
        isLoaded={searchIsLoaded}
        items={searchItems}
        fetchSearchCocktail={fetchSearchCocktail}
      />
    </div>
  );
}
const user = {
  name: "Andrey",
  sayHi: function () {
    console.log(this.name);
  },
  sayHello: () => {
    console.log(name);
  }
};
user.sayHi();
user.sayHello();
