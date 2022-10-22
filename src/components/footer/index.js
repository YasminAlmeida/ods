import React from 'react';
import Ics from '../../assets/images/ics.jpg';
import Pcs from '../../assets/images/pcs.jpg';
import Sds from '../../assets/images/sds.png';
import Cit from '../../assets/images/cit.png';
import Cebrap from '../../assets/images/cebrap.png';
import * as S from './styled';

export default function Footer() {
  return (
    <footer>
      <S.ContainerLinks>
        <a href="https://icidadessustentaveis.org.br/">
          <S.Img src={Ics} alt="Instituto Cidades Sustentáveis" />
        </a>
        <a href="https://www.cidadessustentaveis.org.br/">
          <S.Img src={Pcs} alt="Programa Cidades Sustentaváveis" />
        </a>
        <a href="https://www.unsdsn.org/">
          <S.Img src={Sds} alt="Programa Cidades Sustentaváveis" />
        </a>
        <a href="https://citinova.mctic.gov.br/periodo-eleitoral/">
          <S.Img
            src={Cit}
            alt="Planejamento Integrado e Tecnologias Para Cidades Sustentáveis"
          />
        </a>
        <a href="https://cebrap.org.br/">
          <S.Img
            src={Cebrap}
            alt="Centro Brasileiro de Análise e Planejamento"
          />
        </a>
      </S.ContainerLinks>
    </footer>
  );
}
