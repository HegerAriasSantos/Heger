import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import ProjectBanner from '../../../components/ProjectBanner';
import Header from '../../../components/Header';
import { ProjectContainer } from '../../../styles/ProjectStyles';
import LoadingScreen from '../../../components/LoadingScreen';
import { LanguageContext } from '../../../contexts';

export default function Projeto({ slug }: { slug: string }) {
  const router = useRouter();
  const { dictionary: { projectsPage } } = LanguageContext.useContext();
  const project: any = projectsPage.projects.filter((elem: any) => elem.slug === slug)[0];
  if (router.isFallback) {
    return <LoadingScreen />;
  }

  return (
    <ProjectContainer>
      <Head>
        <title>{project.title} | Heger Portfolio</title>
        <meta name="description" content={project.description} />
        <meta property="og:image" content={project.thumbnail} />
        <meta property="og:image:secure_url" content={project.thumbnail} />
        <meta name="twitter:image" content={project.thumbnail} />
        <meta name="twitter:image:src" content={project.thumbnail} />
        <meta property="og:description" content={project.description} />
      </Head>

      <Header />
      <ProjectBanner
        title={project.title}
        type={project.type}
        imgUrl={project.thumbnail}
      />

      <main>
        <p>{project.description}</p>
        {slug !== "todo" ? (<button type="button">
          <a target='_blank' href={project.link}>{project.linkText}</a>
        </button>) : (
          ""
        )}

        <button type="button">
          <a target='_blank' href={project.repository}>{project.repositoryText}</a>
        </button>
      </main>
    </ProjectContainer>
  );
}

export const getStaticProps: GetStaticProps = async context => {
  const { slug } = context.params;

  return {
    props: {
      slug
    },
  };
};
export const getStaticPaths = () => {
  const arr: string[] = ['teacher_reviewer', 'chatapp', 'todo', 'noteapp', "tictactoe"];
  const paths = arr.map((slug) => {
    return { params: { slug } }
  });
  return { paths, fallback: true, }
};
