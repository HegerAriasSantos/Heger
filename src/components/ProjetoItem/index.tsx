import Link from 'next/link';
import { Container } from './styles';

interface ProjetoItemProps {
  title: string;
  type: string;
  imgUrl: string;
  slug: string;
}

function ProjetoItem({ title, type, imgUrl, slug }: ProjetoItemProps) {
  return (
    <Container
      imgUrl={imgUrl}
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
    >
      <Link href={`/projects/${slug}`}>
        <a>
          <div className="overlay" />
          <section>
            <h1>{title}</h1>
            <h2>{type}</h2>
          </section>
        </a>
      </Link>
    </Container>
  );
}

export default ProjetoItem;
