/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/ban-types */
import React, {
  createContext, ReactNode, useState,
} from "react";

import ES_es from "../../../public/EN.json";
import EN_en from "../../../public/ES_es.json";
import { useEffect } from 'react';

interface ProviderProps {
  children: ReactNode
}

interface ILanguageContext {
  language: string;
  dictionary: any;
  changeLanguage: Function;
}

interface IDictionaryList {
  en: {},
  es: {}
}

const dictionaryList: IDictionaryList = { en: EN_en, es: ES_es };

const LanguageContext = createContext<ILanguageContext>({
  language: "en",
  dictionary: dictionaryList.en,
  changeLanguage: () => { },
});

const useContext = () => React.useContext(LanguageContext);

const getLanguageStoraged = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("lang");

    if (typeof storedPrefs === "string") return storedPrefs;
  }

  return "en";
};

const Provider = ({ children }: ProviderProps) => {
  const [language, setLanguage] = useState<string>(getLanguageStoraged || "en");

  useEffect(() => {
    let item = localStorage.getItem("lang")
    if (item) {
      setLanguage(item);
    }
    setLanguage("en")
  }, [])

  const changeLanguage = (newLang: string) => {
    localStorage.setItem("lang", newLang);
    setLanguage(newLang);
  };

  return (
    <LanguageContext.Provider value={{
      language,
      dictionary: dictionaryList[language as keyof object],
      changeLanguage,
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { Provider, useContext };
