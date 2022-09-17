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


const Provider = ({ children }: ProviderProps) => {
  const [language, setLanguage] = useState<string>("en");

  useEffect(() => {
    setLanguage(localStorage.getItem("lang") ?? "en");
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
