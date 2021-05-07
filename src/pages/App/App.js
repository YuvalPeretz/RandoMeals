import './App.css';
import React, { useEffect } from "react"
import "../../components/i18n/configuration"
import Header from '../../components/header/header-component';
import cookies from "js-cookies"
import MiddleMain from '../../components/middle/middle-main/middle-main-component';
import RecipesAdd from '../recipes-add/recipes-add';

const App = () => {

  useEffect(() => {
    (function currentDir() { //Sets the body.dir by looking at the cookies' i18next lng
      if (cookies.getItem("i18next") === "en" || cookies.getItem("i18next") === null) {
        document.body.dir = "ltr";
      }
      else {
        document.body.dir = "rtl"
      }
    }())
  });

  function AddRecipe() {
    if (window.location.pathname === "/recipesadd")
      return <RecipesAdd />
  }

  return (
    <div className="App">
      {AddRecipe()}
      <Header />
      <MiddleMain />
    </div>
  );
}

export default App;
/*
  <h2>{t('RandoMeals')}</h2>
*/