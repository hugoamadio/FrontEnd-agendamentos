import React from "react";
import { RowStyled } from "./Styled";

interface BoxComponentProps {
  id: string;
  email: string;
  phone: string;
  datatime: string;
  past?: boolean;
}

const BoxComponent: React.FC<BoxComponentProps> = ({
  email,
  phone,
  datatime,
  past,
}: BoxComponentProps) => {
  return (
    <>
      {past ? (
        <RowStyled backgroundColor="#c7c7c7" className="row">
          <div className="col-12 d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex gap-2">
              <h5>Email:</h5>
              <p>
                <a href={`mailto:${email}`}>{email}</a>
              </p>
            </div>

            <div className="d-flex gap-2">
              <h5>Telefone:</h5>
              <p>{phone}</p>
              <h5>Dia:</h5>
              <p>{datatime}</p>
            </div>
          </div>
        </RowStyled>
      ) : (
        <RowStyled backgroundColor="#5be73fd3" className="row">
          <div className="col-12 d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex gap-2">
              <h5>Email:</h5>
              <p>
                <a href={`mailto:${email}`}>{email}</a>
              </p>
            </div>
            <div className="d-flex gap-2">
              <h5>Telefone:</h5>
              <p>{phone}</p>
              <h5>Dia:</h5>
              <p>{datatime}</p>
            </div>
          </div>
        </RowStyled>
      )}
    </>
  );
};

export default BoxComponent;
