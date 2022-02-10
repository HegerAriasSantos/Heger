import Head from 'next/head';
import Header from '../../components/Header';
import ProjetoItem from '../../components/ProjetoItem';
import { LanguageContext } from '../../contexts';
import { ProjectsContainer } from '../../styles/ProjectsStyles';


export default function projects() {
  const { dictionary: { projectsPage: { projects } } } = LanguageContext.useContext();

  return (
    <ProjectsContainer>
      <Head>
        <title>Projects | Heger portfolio</title>
        <meta
          name="description"
          content="My name is Heger Arias Santos. I'm Web developer"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="My name is Heger Arias Santos. I'm Web developer"
        />
      </Head>

      <Header />
      <main className="container">
        {projects.map(pro => (
          <ProjetoItem
            key={pro.slug}
            title={pro.title}
            type={pro.type}
            slug={pro.slug}
            imgUrl={pro.thumbnail}
          />
        ))}
      </main>
    </ProjectsContainer>
  );
}