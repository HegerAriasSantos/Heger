import { RiArrowUpCircleFill } from 'react-icons/ri';
import TecnologieItem from '../Tecnologies/Tecnologies';
import { Container } from './styles';

function Footer() {
  const handleScrollTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Container>
      <div>
        <TecnologieItem title={""} icon={<RiArrowUpCircleFill onClick={handleScrollTop} />} />
      </div>
    </Container>
  );
}
export default Footer;
