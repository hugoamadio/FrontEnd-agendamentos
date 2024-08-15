import styled from "styled-components";

interface ModalStyledProps{
    backgroundColor: string
}

const ModalStyled = styled.div<ModalStyledProps>`
    width: 350px;
    height: 250px;
    background-color: ${props => props.backgroundColor};
    border: ${props => props.theme.border.default};
    border-radius: 18px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0px 20px;
    text-align: center;
`

export default ModalStyled