import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact, FaNodeJs, FaGit } from 'react-icons/fa';
import { IoLogoJavascript, IoLogoSass } from 'react-icons/io5';
import SectionTitle from '../SectionTitle';
import TecnologieItem from './Tecnologies';
import { Container } from './styles';
import { RiGatsbyFill } from 'react-icons/ri';
import { SiTypescript, SiNextDotJs, SiMongodb, SiPostgresql, SiTailwindcss, SiGithub } from 'react-icons/si';
import { LanguageContext } from '../../contexts';

function Tecnologies() {
  const { dictionary: { tecnologies } } = LanguageContext.useContext();
  return (
    <Container>
      <SectionTitle title={tecnologies} />
      <section >
        <TecnologieItem title="HTML" icon={<AiFillHtml5 />} />
        <TecnologieItem title="CSS" icon={<FaCss3Alt />} />
        <TecnologieItem title="Sass" icon={<IoLogoSass />} />
        <TecnologieItem title="Tailwind" icon={<SiTailwindcss />} />
        <TecnologieItem title="Javascript" icon={<IoLogoJavascript />} />
        <TecnologieItem title="Typescript" icon={<SiTypescript />} />
        <TecnologieItem title="React" icon={<FaReact />} />
        <TecnologieItem title="Next" icon={<SiNextDotJs />} />
        <TecnologieItem title="Node" icon={<FaNodeJs />} />
        <TecnologieItem title="Gatsby" icon={<RiGatsbyFill />} />
        <TecnologieItem title="Git" icon={<FaGit />} />
        <TecnologieItem title="Github" icon={<SiGithub />} />
        <TecnologieItem title="MongoDB" icon={<SiMongodb />} />
        <TecnologieItem title="PostgreSQL" icon={<SiPostgresql />} />
      </section>
    </Container>
  );
}

export default Tecnologies;
