import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact, FaNodeJs, FaGit } from 'react-icons/fa';
import { IoLogoJavascript, IoLogoSass } from 'react-icons/io5';
import SectionTitle from '../SectionTitle';
import TecnologieItem from './Tecnologies';
import { Container } from './styles';
import {
  SiTypescript,
  SiNestjs,
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiGithub,
  SiPostgresql,
  SiDotnet,
  SiMicrosoftsqlserver,
  SiAngular,
  SiAngularjs,
  SiAzuredevops,
  SiCsharp
} from 'react-icons/si';
import { LanguageContext } from '../../contexts';

function Tecnologies() {
  const {
    dictionary: { tecnologies }
  } = LanguageContext.useContext();
  return (
    <Container>
      <SectionTitle title={tecnologies} />
      <section>
        <TecnologieItem title="Sass" icon={<IoLogoSass />} />
        <TecnologieItem title="Tailwind" icon={<SiTailwindcss />} />
        <TecnologieItem title="Javascript" icon={<IoLogoJavascript />} />
        <TecnologieItem title="Typescript" icon={<SiTypescript />} />
        <TecnologieItem title="React" icon={<FaReact />} />
        <TecnologieItem title="Next" icon={<SiNextdotjs />} />
        <TecnologieItem title="Angular" icon={<SiAngular />} />
        <TecnologieItem title="AngularJS" icon={<SiAngularjs />} />

        
      </section>

      <section>
        <TecnologieItem title="Node" icon={<FaNodeJs />} />
        <TecnologieItem title="NestJs" icon={<SiNestjs />} />

        <TecnologieItem title="C#" icon={<SiCsharp />} />
        <TecnologieItem title=".Net" icon={<SiDotnet />} />
      </section>

      <section>
        <TecnologieItem title="MongoDB" icon={<SiMongodb />} />
        <TecnologieItem title="PostgreSQL" icon={<SiPostgresql />} />
        <TecnologieItem title="SQL Server" icon={<SiMicrosoftsqlserver />} />
      </section>

      <section>
        <TecnologieItem title="Git" icon={<FaGit />} />
        <TecnologieItem title="Github" icon={<SiGithub />} />
        <TecnologieItem title="Azure Devops" icon={<SiAzuredevops />} />
      </section>

    </Container>
  );
}

export default Tecnologies;
