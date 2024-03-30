import ReactModal from "react-modal";

const ImageModal = ({ isOpen, modalContent, modalToggle }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      onRequestClose={modalToggle}
    >
      <img src={modalContent[2]} alt={modalContent[1]} />
      <p>{modalContent[0]}</p>
    </ReactModal>
  );
};

export default ImageModal;
