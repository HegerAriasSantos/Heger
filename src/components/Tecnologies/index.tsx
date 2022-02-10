import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact, FaNodeJs, FaGit } from 'react-icons/fa';
import { IoLogoJavascript, IoLogoSass } from 'react-icons/io5';
import SectionTitle from '../SectionTitle';
import ConhecimentoItem from './Tecnologies';
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
        <ConhecimentoItem title="HTML" icon={<AiFillHtml5 />} />
        <ConhecimentoItem title="CSS" icon={<FaCss3Alt />} />
        <ConhecimentoItem title="Sass" icon={<IoLogoSass />} />
        <ConhecimentoItem title="Tailwind" icon={<SiTailwindcss />} />
        <ConhecimentoItem title="Javascript" icon={<IoLogoJavascript />} />
        <ConhecimentoItem title="Typescript" icon={<SiTypescript />} />
        <ConhecimentoItem title="React" icon={<FaReact />} />
        <ConhecimentoItem title="Next" icon={<SiNextDotJs />} />
        <ConhecimentoItem title="Node" icon={<FaNodeJs />} />
        <ConhecimentoItem title="Gatsby" icon={<RiGatsbyFill />} />
        <ConhecimentoItem title="Git" icon={<FaGit />} />
        <ConhecimentoItem title="Github" icon={<SiGithub />} />
        <ConhecimentoItem title="MongoDB" icon={<SiMongodb />} />
        <ConhecimentoItem title="PostgreSQL" icon={<SiPostgresql />} />
      </section>
    </Container>
  );
}

export default Tecnologies;
