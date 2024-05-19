import React from 'react';

interface ModalEditUserProps {
  handleClose: () => void;
}

const ModalEditUser: React.FC<ModalEditUserProps> = ({ handleClose }) => {
  return (
    <div className="modal">
      <div className="modal__container">
        <h2>Edit User</h2>
        {/* Add form or content for editing the user */}
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};

export default ModalEditUser;
