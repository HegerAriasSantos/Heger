import { LanguageContext } from '../../contexts';
import NavLink from './NavLink';
import { Container, ChangeLanguageContainer } from './styles';

function Header() {
  const { dictionary: { header }, changeLanguage, language } = LanguageContext.useContext();
  return (
    <Container>
      <ul>
        <NavLink title={header[0]} path="/" />
        <NavLink title={header[1]} path="/projects" includes />
        <ChangeLanguageContainer onClick={() => {
          if (language === "es") {
            changeLanguage("en")
            return;
          }
          changeLanguage("es")
        }}>
          <a>
            {header[2]}
          </a>
        </ChangeLanguageContainer>
      </ul>
    </Container>
  );
}

export default Header;
