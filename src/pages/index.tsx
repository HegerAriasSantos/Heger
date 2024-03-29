import { useEffect } from 'react';
import Head from 'next/head';
import { HomeContainer } from '../styles/HomeStyles';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Tecnologies from '../components/Tecnologies';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { ProjectsContext } from '../contexts';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  const { projects } = ProjectsContext.useContext();
  useEffect(() => {
    Aos.init({ duration: 1300, once: true });
  }, []);
  return (
    <HomeContainer>
      <Head>
        <title>Home | Heger portfolio</title>
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
        <HomeHero />
        <Education />
        <Experience />
        <Projects projects={projects} />
        <Tecnologies />
        <Contact />
        <Footer />
      </main>
    </HomeContainer>
  );
}


