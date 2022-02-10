import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import { RiArrowUpCircleFill } from 'react-icons/ri';
import ConhecimentoItem from '../Tecnologies/Tecnologies';
import { Container } from './styles';

function Footer() {
  function handleRedirect(url: string) {
    window.open(url);
  }


  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Container>
      <div>
        <ConhecimentoItem title={""} icon={<RiArrowUpCircleFill onClick={handleScrollTop} />} />
      </div>
    </Container>
  );
}
export default Footer;
