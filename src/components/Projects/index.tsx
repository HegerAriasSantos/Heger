import Link from 'next/link';
import { LanguageContext } from '../../contexts';
import SectionTitle from '../SectionTitle';
import ProjetoItem from './ProjetoItem';
import { Container } from './styles';

interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface projectsProps {
  projects: IProjeto[];
}



function projects({ projects }: projectsProps) {
  const { dictionary: { projectsPage } } = LanguageContext.useContext();
  return (
    <Container>
      <SectionTitle title={projectsPage.title} />

      <section>
        {projects.slice(0, 3).map(project => (
          <ProjetoItem
            key={project.slug}
            img={project.thumbnail}
            title={project.title}
            type={project.type}
            slug={project.slug}
          />
        ))}
      </section>
      <button type="button">
        <Link href="/projects">
          <a>Ver todos os projects</a>
        </Link>
      </button>
    </Container>
  );
}

export default projects;
