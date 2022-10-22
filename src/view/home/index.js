import React from 'react';
import One from '../../assets/images/sdg1.png';
import Two from '../../assets/images/sdg2.png';
import Three from '../../assets/images/sdg3.png';
import For from '../../assets/images/sdg4.png';
import Five from '../../assets/images/sdg5.png';
import Six from '../../assets/images/sdg6.png';
import Seven from '../../assets/images/sdg7.png';
import Eight from '../../assets/images/sdg8.png';
import Nine from '../../assets/images/sdg9.png';
import Ten from '../../assets/images/sdg10.png';
import Eleven from '../../assets/images/sdg11.png';
import Twelve from '../../assets/images/sdg12.png';
import Thirteen from '../../assets/images/sdg13.png';
import Fourteen from '../../assets/images/sdg14.png';
import Fifteen from '../../assets/images/sdg15.png';
import Sixteen from '../../assets/images/sdg16.png';
import Seventeen from '../../assets/images/sdg17.png';

import BallRed from '../../assets/svg/ballred.svg';
import BallOrange from '../../assets/svg/ballorange.svg';
import BallYellow from '../../assets/svg/ballyellow.svg';
import BallGreen from '../../assets/svg/ballgreen.svg';
import Population from '../../assets/svg/population.svg';
import Classification from '../../assets/svg/classification.svg';
import Footer from '../../components/footer/index';
import * as S from './style';

export default function Home() {
  return (
    <section>
      <S.SectionHome>
        <S.Title>Geral</S.Title>
        <S.FirstBlockInformation>
          <S.BoxNumber>
            <img src={Population} alt="Population" />
            <div>
              <h4>52,4</h4>
              <h6>de 100</h6>
            </div>
          </S.BoxNumber>
          <S.BoxNumber>
            <img src={Classification} alt="Classification" />
            <div>
              <h4>1135</h4>
              <h6>de 100</h6>
            </div>
          </S.BoxNumber>
        </S.FirstBlockInformation>
        <S.Title>Avaliação Atual</S.Title>
        <S.SectionImg>
          <S.ContainerImg>
            <S.ImgRed src={One} alt="1" />
            <S.ImgOrange src={Two} alt="1" />
            <S.ImgRed src={Three} alt="1" />
            <S.ImgRed src={For} alt="1" />
            <S.ImgRed src={Five} alt="1" />
            <S.ImgOrange src={Six} alt="1" />
            <S.ImgGreen src={Seven} alt="1" />
            <S.ImgOrange src={Eight} alt="1" />
            <S.ImgGreen src={Nine} alt="1" />
            <S.ImgRed src={Ten} alt="1" />
            <S.ImgRed src={Eleven} alt="1" />
            <S.ImgRed src={Twelve} alt="1" />
            <S.ImgOrange src={Thirteen} alt="1" />
            <S.ImgRed src={Fourteen} alt="1" />
            <S.ImgOrange src={Fifteen} alt="1" />
            <S.ImgRed src={Sixteen} alt="1" />
            <S.ImgYellow src={Seventeen} alt="1" />
          </S.ContainerImg>
        </S.SectionImg>
        <S.SectionLegend>
          <p>Legenda:</p>
          <S.ContainerInfo>
            <S.Svg src={BallGreen} alt="BallGreen" />
            <p>ODS atingido</p>
          </S.ContainerInfo>
          <S.ContainerInfo>
            <S.Svg src={BallYellow} alt="BallYellow" />
            <p>Há desafios</p>
          </S.ContainerInfo>
          <S.ContainerInfo>
            <S.Svg src={BallRed} alt="BallRed" />
            <p>Há grandes desafios</p>
          </S.ContainerInfo>
          <S.ContainerInfo>
            <S.Svg src={BallOrange} alt="BallOrange" />
            <p>Há desafios significativo</p>
          </S.ContainerInfo>
          <S.ContainerInfo>
            <S.Svg src={BallRed} alt="BallRed" />
            <p>Há grandes desafios</p>
          </S.ContainerInfo>
        </S.SectionLegend>
      </S.SectionHome>
      <Footer />
    </section>
  );
}
