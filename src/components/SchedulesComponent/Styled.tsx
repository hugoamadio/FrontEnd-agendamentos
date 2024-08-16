import styled from "styled-components";

export const FirstBlockStyled = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-height: 400px;
  max-height: 630px;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.secondary};
  flex-wrap: wrap;
  padding: 0px 230px;
  text-align: center;

  @media(max-width: 700px){
    padding: 20px 30px;
  }
`;

export const SecondBlockStyled = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-height: 400px;
  max-height: 630px;
  background-color: ${(props) => props.theme.colors.background};
  padding-right: 200px;
  
  @media(max-width: 700px){
    padding-right: 0px;
  }
`;
