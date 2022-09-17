import { ItemContainer } from './styles';

interface ExperienceProps {
  year: string;
  title: string;
  description: string;
}

export default function ExperienceItem({
  year,
  title,
  description
}: ExperienceProps) {
  return (
    <ItemContainer data-aos="fade-up">
      <div>
        <h2>{title}</h2>
        <h3>{year}</h3>
        <p>{description}</p>
      </div>
    </ItemContainer>
  );
}
