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
`;

export const Flag = styled.img`
  width: 150px;
  height: 80px;
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
    position: relative;
    display: inline-block;
    font-size: 1.1rem;
  }
  a:hover {
    color: #8174b7;
  }
`;
export const Navigation = styled.nav`
  display: flex;
`;
