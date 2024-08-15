import { ReactNode } from "react"
import OverleyStyled from "./Styled"

interface OverleyDefaultProps{
    children: ReactNode
}

function OverleyDefault({children}: OverleyDefaultProps){
    return(
        <OverleyStyled>
            {children}
        </OverleyStyled>
    )
}

export default OverleyDefault