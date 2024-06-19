import React from "react";

interface EditProfileSelectProps {
  handleEditCompany: () => void;
  handleEditUser: () => void;
  handleClose: () => void;
}

const EditProfileSelect: React.FC<EditProfileSelectProps> = ({
  handleEditCompany,
  handleEditUser,
  handleClose,
}) => {
  return (
    <div className="modal">
      <div className="modal__container">
        <h2 className="heading-primary">Select what you want to edit</h2>

        <div className="modal__container__profiles">
          <div className="profileAvatar" onClick={handleEditCompany}>
            <div className="intransit profileAvatar__icon">
              <span>C</span>
            </div>
            <p className="profileAvatar__text">Company</p>
          </div>

          <div className="profileAvatar" onClick={handleEditUser}>
            <div className="pending profileAvatar__icon">
              <span>U</span>
            </div>
            <p className="profileAvatar__text">User</p>
          </div>
        </div>

        <button
          className="button__modal button__modal__cancel"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default EditProfileSelect;
