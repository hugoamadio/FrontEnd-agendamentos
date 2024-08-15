import ModalStyled from "./Styled";

interface ModalDefaultProps {
    closeModal: () => void;
    modalTitle: string;
    modalContent: string;
    modalBackground: string;
}

function ModalDefault({closeModal, modalContent, modalTitle, modalBackground}: ModalDefaultProps) {
  return (
    <ModalStyled backgroundColor={modalBackground}>
      <h3>{modalTitle}</h3>
      <p>{modalContent}</p>
      <button type="button" className="btn btn-success" onClick={closeModal}>OK</button>
    </ModalStyled>
  );
}

export default ModalDefault;
