import { LanguageContext } from '../../contexts';
import SectionTitle from '../SectionTitle';
import ExperienciaItem from './EducationItem';
import { Container } from './styles';

function Education() {
  const { dictionary: { education } } = LanguageContext.useContext()
  return (
    <Container>
      <SectionTitle title={education.title} description={education.subtitle} />

      <section>
        {
          education.cards.map((card: { year: string; title: string; description: string; }, index: number) => (
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

export default Education;
