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
          <button className="button button__switch" onClick={handleEditCompany}>
            Company Profile
          </button>
          <button className="button button_switch" onClick={handleEditUser}>
            User Profile
          </button>
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
