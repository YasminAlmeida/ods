import styled from 'styled-components';
export const ContainerResum = styled.div`
  width: 100%;
  display: block;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  max-width: 1140px;
`;
export const ContainerDescriptionOds = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
export const ContainerOds = styled.div`
  max-width: 400px;
  margin: 0 10px 0;
`;
export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 0;
  font-weight: 400;
  line-height: 1.2;
`;
export const SubText = styled.p`
  color: rgba(0, 0, 0, 0.54);
  margin-top: 0;
`;
export const ContainerText = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
    p {
      font-size: 0.9rem;
    }
  }
`;
export const SvgOnu = styled.img`
  width: 200px;
  margin: 40px;
`;
export const TypeOfOds = styled.h3`
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.167;
  margin: 0;
`;
export const SubTitleOfTypes = styled.p`
  font-size: 1rem;
  margin: 0;
  font-weight: 500;
  line-height: 1.57;
`;
export const Description = styled.p`
  font-size: 1rem;
  margin: 0;
  font-weight: 100;
  line-height: 1.57;
  margin: 10px 0 20px;
`;
export const Svg = styled.img`
  width: 10px;
  height: 10px;
  margin: 0 10px;
`;
