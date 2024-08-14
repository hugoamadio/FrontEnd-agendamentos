import styled from "styled-components";

export const FirstBlockStyled = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 350px;
  max-height: 530px;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.secondary};
  flex-wrap: wrap;
  font-size: 50px;
  font-weight: 600;
  padding: 0px 155px;
  text-align: center;
`;

export const SecondBlockStyled = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 350px;
  max-height: 530px;
  background-color: ${(props) => props.theme.colors.background}
`;
