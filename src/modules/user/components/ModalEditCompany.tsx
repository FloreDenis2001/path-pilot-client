import React from 'react';

interface ModalEditCompanyProps {
  handleClose: () => void;
}

const ModalEditCompany: React.FC<ModalEditCompanyProps> = ({ handleClose }) => {
  return (
    <div className="modal">
      <div className="modal__container">
        <h2>Edit Company</h2>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};

export default ModalEditCompany;
