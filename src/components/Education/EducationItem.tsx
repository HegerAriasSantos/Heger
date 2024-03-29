import { ItemContainer } from './styles';

interface ExperienciaProps {
  year: string;
  title: string;
  description: string;
}

export default function ExperienciaItem({
  year,
  title,
  description
}: ExperienciaProps) {
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
