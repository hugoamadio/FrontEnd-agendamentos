import styled from "styled-components";

interface RowStyledProps{
    backgroundColor: string
}

export const RowStyled = styled.div<RowStyledProps>`
    width: 60%;
    height: 105px;
    background-color: ${props => props.backgroundColor};
    color: ${props => props.theme.colors.secondary};
    padding: 20px;
    box-sizing: border-box;
    border-radius: 18px;
    font-size: 18px;

    @media(max-width: 700px){
        width: 95%;
        font-size: 14px;
        h5{
            font-size: 16px;
        }
    }
`