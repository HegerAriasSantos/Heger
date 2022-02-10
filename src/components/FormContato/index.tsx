import { RiGithubFill, RiLinkedinBoxFill, RiMailFill } from 'react-icons/ri';
import { LanguageContext } from '../../contexts';
import SectionTitle from '../SectionTitle';
import ConhecimentoItem from '../Tecnologies/Tecnologies';
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
          <ConhecimentoItem title="Github" icon={<RiGithubFill />} />
        </a>
        <a href="https://www.linkedin.com/in/hegel-arias-santos-9a11661b4/" target="_blank">
          <ConhecimentoItem title="Linkedin" icon={<RiLinkedinBoxFill />} />
        </a>
      </section>
    </Container >
  );
}

export default FormContato;
