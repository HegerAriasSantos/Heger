/* eslint-disable react/jsx-no-comment-textnodes */
import { LanguageContext } from '../../contexts';
import { Container, TextContainer, InfosContainer, CodeItem } from './styles';

function HomeHero() {
  const { dictionary: { homeHero } } = LanguageContext.useContext();
  return (
    <Container data-aos="fade-up">
      <img src="https://i.imgur.com/pLbxazs.jpg" alt="Minha foto" />
      <div>
        <TextContainer>
          <h1>{homeHero.h1}</h1>
          <h2>{homeHero.h2}</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem data-aos="zoom-in">
            <span className="purple">{homeHero.Code1.title}</span> {'\u007B'}
            <div>
              {homeHero.Code1.name[0]} <span className="blue">{homeHero.Code1.name[1]},</span>
            </div>
            <div>
              {homeHero.Code1.lastName[0]} <span className="blue">{homeHero.Code1.lastName[1]}</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem data-aos="zoom-in">
            <span className="purple">{homeHero.Code2.title}</span> {'\u007B'}
            <div>
              {homeHero.Code2.occupation[0]} <span className="blue">{homeHero.Code2.occupation[0]},</span>
            </div>
            <div>
              {homeHero.Code2.specialty[0]}: <span className="blue">{homeHero.Code2.specialty[0]}</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
