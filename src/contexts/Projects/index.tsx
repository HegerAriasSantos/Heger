/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/ban-types */
import React, {
  createContext, ReactNode, useEffect, useMemo, useState,
} from "react";
import { LanguageContext } from "../index";
import ES_es from "../../../public/ES_es.json";
import EN_en from "../../../public/EN.json";


interface IProject {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface IProjectContext {
  projects: IProject[];
}

export interface IProvider {
  children: ReactNode;
}

const ProjectsContext = createContext<IProjectContext>({
  projects: []
});

const useContext = () => React.useContext(ProjectsContext);

const Provider = ({ children }: IProvider) => {
  const { language } = LanguageContext.useContext();
  const [projects, setProjects] = useState<IProject[]>(EN_en.projectsPage.projects);
  useEffect(() => {
    if (language !== "en") {
      setProjects(ES_es.projectsPage.projects);
      return;
    }
    setProjects(EN_en.projectsPage.projects);
  }, [language])

  const values = useMemo(
    () => ({ projects }),
    [projects],
  );

  return (
    <ProjectsContext.Provider value={values}>
      {children}
    </ProjectsContext.Provider>
  );
};

export { Provider, useContext };
