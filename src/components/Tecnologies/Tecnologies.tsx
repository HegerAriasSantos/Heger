import { ReactNode } from 'react';
import { TecnologieContainer } from './styles';

interface TecnologieProps {
  title: string;
  icon: ReactNode;
}

export default function TecnologieItem({ title, icon }: TecnologieProps) {
  return (
    <TecnologieContainer data-aos="fade-up">
      <p>{title}</p>
      {icon}
    </TecnologieContainer>
  );
}
