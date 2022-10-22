import React from 'react';
import Footer from '../../components/footer/index';
import Onu from '../../assets/svg/onu.svg';
import BallRed from '../../assets/svg/ballred.svg';
import BallOrange from '../../assets/svg/ballorange.svg';
import BallYellow from '../../assets/svg/ballyellow.svg';
import BallGreen from '../../assets/svg/ballgreen.svg';
import * as S from './styled';

export default function Resum() {
  return (
    <section>
      <S.ContainerResum>
        <S.Title>ODS</S.Title>
        <S.SubText>Definição e objetivos</S.SubText>
        <S.ContainerText>
          <S.SvgOnu src={Onu} alt="" srcset="" />
          <div>
            <p>
              Em 2012, a Organização das Nações Unidas (ONU) instituiu 17
              Objetivos de Desenvolvimento Sustentável para superar os maiores
              desafios do nosso tempo, cuidar do planeta e melhorar a vida de
              todos.
            </p>
            <p>
              O Índice de Desenvolvimento Sustentável das Cidades – Brasil
              (IDSC-BR) é uma iniciativa do Instituto Cidades Sustentáveis, no
              âmbito do Programa Cidades Sustentáveis, em parceria com o
              Sustainable Development Solutions Network (SDSN), apoio do Centro
              Brasileiro de Análise e Planejamento (Cebrap) e financiamento do
              Projeto CITinova.
            </p>
          </div>
        </S.ContainerText>
        <S.Title>Indicadores</S.Title>
        <S.SubText>Ojetivo de Cada ODS</S.SubText>

        <S.ContainerDescriptionOds>
          <S.ContainerOds>
            <S.TypeOfOds>ODS 1: Erradicação da pobreza</S.TypeOfOds>
            <S.SubTitleOfTypes>Descrição</S.SubTitleOfTypes>
            <S.Description>
              <S.Svg src={BallRed} alt="BallRed" />
              Acabar com a pobreza em todas as suas formas, em todos os lugares.
            </S.Description>
          </S.ContainerOds>
          <S.ContainerOds>
            <S.TypeOfOds>
              ODS 2: Fome zero e agricultura sustentável
            </S.TypeOfOds>
            <S.SubTitleOfTypes>Descrição</S.SubTitleOfTypes>
            <S.Description>
              <S.Svg src={BallOrange} alt="BallOrange" />
              Acabar com a fome, alcançar a segurança alimentar e melhoria da
              nutrição e promover a agricultura sustentável.
            </S.Description>
          </S.ContainerOds>
          <S.ContainerOds>
            <S.TypeOfOds>ODS 3: Saúde e bem-estar</S.TypeOfOds>
            <S.SubTitleOfTypes>Descrição</S.SubTitleOfTypes>
            <S.Description>
              <S.Svg src={BallRed} alt="BallRed" />
              Assegurar uma vida saudável e promover o bem-estar para todos, em
              todas as idades.
            </S.Description>
          </S.ContainerOds>
          <S.ContainerOds>
            <S.TypeOfOds>ODS 4: Educação de qualidade</S.TypeOfOds>
            <S.SubTitleOfTypes>Descrição</S.SubTitleOfTypes>

            <S.Description>
              <S.Svg src={BallRed} alt="BallRed" />
              Assegurar a educação inclusiva, e equitativa e de qualidade, e
              promover oportunidades de aprendizagem ao longo da vida para
              todos.
            </S.Description>
          </S.ContainerOds>
          <S.ContainerOds>
            <S.TypeOfOds>ODS 5: Igualdade de gênero</S.TypeOfOds>
            <S.SubTitleOfTypes>Descrição</S.SubTitleOfTypes>
            <S.Description>
              <S.Svg src={BallRed} alt="BallRed" />
              Alcançar a igualdade de gênero e empoderar todas as mulheres e
              meninas.
            </S.Description>
          </S.ContainerOds>
          <S.ContainerOds>
            <S.TypeOfOds>ODS 6: Água limpa e saneamento</S.TypeOfOds>
            <S.SubTitleOfTypes>Descrição</S.SubTitleOfTypes>
            <S.Description>
              <S.Svg src={BallOrange} alt="BallOrange" />
              Garantir disponibilidade e manejo sustentável da água e saneamento
              para todos.
            </S.Description>
          </S.ContainerOds>
          <S.ContainerOds>
            <S.TypeOfOds>ODS 7: Energia limpa e acessível</S.TypeOfOds>
            <S.SubTitleOfTypes>Descrição</S.SubTitleOfTypes>
            <S.Description>
              <S.Svg src={BallGreen} alt="BallGreen" />
              Garantir disponibilidade e manejo sustentável da água e saneamento
              para todos.
            </S.Description>
          </S.ContainerOds>
          <S.ContainerOds>
            <S.TypeOfOds>
              ODS 8: Trabalho decente e crescimento econômico
            </S.TypeOfOds>
            <S.SubTitleOfTypes>Descrição</S.SubTitleOfTypes>
            <S.Description>
              <S.Svg src={BallOrange} alt="BallOrange" />
              Garantir disponibilidade e manejo sustentável da água e saneamento
              para todos.
            </S.Description>
          </S.ContainerOds>
          <S.ContainerOds>
            <S.TypeOfOds>
              ODS 9: Indústria, Inovação e Infraestrutura
            </S.TypeOfOds>
            <S.Description>
              <S.Svg src={BallGreen} alt="BallGreen" />
              Promote sustained, inclusive and sustainable economic growth, full
              and productive employment and decent work for all.
            </S.Description>
          </S.ContainerOds>
          <S.ContainerOds>
            <S.TypeOfOds>ODS 10:Redução das desigualdades</S.TypeOfOds>
            <S.Description>
              <S.Svg src={BallRed} alt="BallRed" />
              Reduzir as desigualdades dentro dos países e entre eles.
            </S.Description>
          </S.ContainerOds>
          <S.ContainerOds>
            <S.TypeOfOds>ODS 11:Cidades e comunidades sustentáveis</S.TypeOfOds>
            <S.Description>
              <S.Svg src={BallRed} alt="BallRed" />
              Tornar as cidades e os assentamentos humanos inclusivos, seguros,
              resilientes e sustentáveis.
            </S.Description>
          </S.ContainerOds>
          <S.ContainerOds>
            <S.TypeOfOds>ODS 12:Consumo e produção responsáveis</S.TypeOfOds>
            <S.Description>
              <S.Svg src={BallRed} alt="BallRed" />
              Assegurar padrões de produção e de consumo sustentáveis.
            </S.Description>
          </S.ContainerOds>
          <S.ContainerOds>
            <S.TypeOfOds>
              ODS 13:Ação contra a mudança global do clima
            </S.TypeOfOds>
            <S.Description>
              <S.Svg src={BallOrange} alt="BallOrange" />
              Tomar medidas urgentes para combater a mudança climática e seus
              impactos (*).
            </S.Description>
          </S.ContainerOds>
          <S.ContainerOds>
            <S.TypeOfOds>ODS 14:Vida na água</S.TypeOfOds>
            <S.Description>
              <S.Svg src={BallRed} alt="BallRed" />
              Conservação e uso sustentável dos oceanos, dos mares, e dos
              recursos marinhos para o desenvolvimento sustentável.
            </S.Description>
          </S.ContainerOds>
          <S.ContainerOds>
            <S.TypeOfOds>ODS 15:Proteger a vida terrestre</S.TypeOfOds>
            <S.Description>
              <S.Svg src={BallOrange} alt="BallOrange" />
              Promover sociedades pacíficas e inclusivas par ao desenvolvimento
              sustentável, proporcionar o acesso à justiça para todos e
              construir instituições eficazes, responsáveis e inclusivas em
              todos os níveis.
            </S.Description>
          </S.ContainerOds>
          <S.ContainerOds>
            <S.TypeOfOds>
              ODS 16:Paz, justiça e instituições eficazes
            </S.TypeOfOds>
            <S.Description>
              <S.Svg src={BallRed} alt="BallRed" />
              Promote peaceful and inclusive societies for sustainable
              development, provide access to justice for all and build
              effective, accountable and inclusive institutions at all levels.
            </S.Description>
          </S.ContainerOds>
          <S.ContainerOds>
            <S.TypeOfOds>ODS 17:Parcerias e meios de implementação</S.TypeOfOds>
            <S.Description>
              <S.Svg src={BallYellow} alt="BallYellow" />
              Fortalecer os meios de implementação e revitalizar a parceria
              global para o desenvolvimento sustentável.
            </S.Description>
          </S.ContainerOds>
        </S.ContainerDescriptionOds>
      </S.ContainerResum>
      <Footer />
    </section>
  );
}
