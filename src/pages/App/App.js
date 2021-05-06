import './App.css';
import React, { useEffect } from "react"
import { useTranslation } from 'react-i18next';
import "../../components/i18n/configuration"
import Header from '../../components/header/header-component';
import cookies from "js-cookies"

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

  const { t } = useTranslation();

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
/*
  <h2>{t('RandoMeals')}</h2>
*/