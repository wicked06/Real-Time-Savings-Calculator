import styled from 'styled-components';


export const Header = styled.div`
  background: var(--color-primary-blue);
  position: sticky;
  display: flex;
  height: 120px;
  margin-top: -1px;
  font-size: 1rem;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px){
    transition: 0.8s all ease;
  }
`;


export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  max-width: 1100px;
  z-index: 1;
`;


export const HeaderLogo = styled.div`
  display: flex;
  justify-self: flex-start;
  cursor: pointer;
  margin-top: 12px;
  margin-left: 60px;

  .GECO-logo{
    width: 130px;
    height: 90px;
  }
`;


