import { RiGithubFill, RiLinkedinBoxFill, RiMailFill } from 'react-icons/ri';
import { LanguageContext } from '../../contexts';
import SectionTitle from '../SectionTitle';
import TecnologieItem from '../Tecnologies/Tecnologies';
import { Container } from './styles';

function FormContato() {
  const { dictionary: { contact } } = LanguageContext.useContext();
  return (
    <Container>
      <SectionTitle
        title={
          <>
            {contact.title}
          </>
        }
        description={
          <>
            {contact.description}
          </>
        }
      />
      <section >
        <a href="https://github.com/HegerAriasSantos" target="_blank">
          <TecnologieItem title="Github" icon={<RiGithubFill />} />
        </a>
        <a href="https://www.linkedin.com/in/heger-arias-santos/" target="_blank">
          <TecnologieItem title="Linkedin" icon={<RiLinkedinBoxFill />} />
        </a>
        <a href="mailto:hegel.0218@gmail.com" target="_blank">
          <TecnologieItem title="Gmail" icon={<RiMailFill />} />
        </a>
      </section>
    </Container >
  );
}

export default FormContato;
