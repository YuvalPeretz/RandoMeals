import './App.css';
import React from "react"
import { useTranslation } from 'react-i18next';
import "./i18n/configuration"
import i18next from "i18next";

const App = () => {

  const { t } = useTranslation();

  return (
    <div className="App">
      <button onClick={() => {
        i18next.changeLanguage("en")
        document.body.dir = "ltr"
      }}>EN</button>
      <button onClick={() => {
        i18next.changeLanguage("he")
        document.body.dir = "rtl"
      }}>HE</button>
      <button onClick={() => {
        i18next.changeLanguage("ar")
        document.body.dir = "rtl"
      }}>AR</button>
      <h2>{t('RandoMeals')}</h2>
    </div>
  );
}

export default App;
/*
<button onClick={() => {
        i18next.changeLanguage("en")
        document.body.dir = "ltr"
      }}>EN</button>
      <button onClick={() => {
        i18next.changeLanguage("he")
        document.body.dir = "rtl"
      }}>HE</button>
      <button onClick={() => {
        i18next.changeLanguage("ar")
        document.body.dir = "rtl"
      }}>AR</button>
      <h2>{t('RandoMeals')}</h2>
*/