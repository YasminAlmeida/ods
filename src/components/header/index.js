import React from 'react';
import Logo from '../../assets/images/logo.png';
import Flag from '../../assets/images/flag.webp';
import { Link } from 'react-router-dom';

import * as S from './styled';
export default function Header() {
  return (
    <S.Header>
      <S.HeaderContainer>
        <S.Img src={Logo} alt="" />
        <h6>Índice de Desenvolvimento Humano | Brasil</h6>
      </S.HeaderContainer>
      <S.ContainerRoute>
        <S.ContainerImage>
          <S.Flag src={Flag} alt="" srcset="" />
          <S.City>Cuiabá (MT)</S.City>
        </S.ContainerImage>
        <S.Navigation>
          <S.List>
            <Link to="/">Visão Geral</Link>
            <Link to="./resum">Resmuno</Link>
          </S.List>
        </S.Navigation>
      </S.ContainerRoute>
    </S.Header>
  );
}
