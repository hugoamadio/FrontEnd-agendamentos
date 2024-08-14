import { ReactNode } from "react";
import { FirstBlockStyled, SecondBlockStyled } from "./Styled";

interface SchedulesComponentProps {
  children: ReactNode;
}

function SchedulesComponent({ children }: SchedulesComponentProps) {
  return (
    <div className="row">
        <FirstBlockStyled className="col-12 col-sm-8">
            {children}
        </FirstBlockStyled>
        <SecondBlockStyled className="col-12 col-sm-4">
            
        </SecondBlockStyled>
    </div>
  );
}

export default SchedulesComponent;
