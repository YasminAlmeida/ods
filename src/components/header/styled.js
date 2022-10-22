import styled from 'styled-components';

export const Img = styled.img`
  width: 40px;
  height: 40px;
`;
export const Header = styled.section`
  display: flex;
  flex-direction: column;
`;
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #8174b7;
  height: 40px;
  color: #e8e8e8;
  padding: 10px;
`;
export const ContainerRoute = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #0c003c;
  color: #e8e8e8;
`;
export const ContainerImage = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  background-color: #0c003c;
  max-width: 1140px;
  justify-content: space-around;
  align-items: center;
`;

export const Flag = styled.img`
  width: 250px;
  height: 150px;
  opacity: 0.8;
`;
export const List = styled.li`
  padding: 10px;
  list-style: none;
  margin: 0;
  padding: 0;

  a {
    margin-right: 5px;
    color: #e8e8e8;
    text-decoration: none;
    margin: 20px 10px;
    position: relative;
    display: inline-block;
    font-size: 1.1rem;
  }
  a::after {
    content: '';
    display: block;
    height: 3px;
    width: 0px;
    background: #e8e8e8;
    margin-top: 4px;
    transition: 0.3s;
    position: absolute;
    margin-top: 5px;
  }
  a:focus:after {
    width: 110%;
  }
`;
export const Navigation = styled.nav`
  display: flex;
  position: absolute;
  top: 150px;
  left: 20px;
`;
export const City = styled.h2`
  font-size: 2.35rem;

  font-weight: 500;
  line-height: 1.167;
`;
