import { LanguageContext } from '../../contexts';
import SectionTitle from '../SectionTitle';
import { Container } from './styles';
import ExperienciaItem from './ExperienceItem';


function Experience() {
  const { dictionary: { experience } } = LanguageContext.useContext()
  return (
    <Container>
      <SectionTitle title={experience.title} description={experience.subtitle} />

      <section>
        {
          experience.cards.map((card: { year: string; title: string; description: string; }, index: number) => (
            <ExperienciaItem
              key={index}
              year={card.year}
              title={card.title}
              description={card.description}
            />
          ))
        }
      </section>
    </Container>
  );
}

export default Experience;
