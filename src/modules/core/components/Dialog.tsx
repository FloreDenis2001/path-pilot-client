import React from "react";

interface DialogProps {
    title: string;
    handleConfirm: () => void;
    handleOpenModal: () => void;
}

const Dialog: React.FC<DialogProps> = ({
  title,
  handleConfirm,
  handleOpenModal,
}) => {
 

  return (
    <section className="modal">
      <div className="modal__dialog">
        <div className="modal__dialog__content">
          <h2>{title}</h2>
          <div className="modal__dialog__content__actions">
            <button className="button__modal" onClick={handleOpenModal}>
              Cancel
            </button>
            <button
              className="button__modal button__modal__confirm"
              onClick={handleConfirm}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dialog;
