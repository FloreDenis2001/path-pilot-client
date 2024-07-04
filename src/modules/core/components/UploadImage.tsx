import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { LazyLoadImage } from "react-lazy-load-image-component";
import UserService from "../../user/service/UserService";
import { LoginContext } from "../../context/LoginProvider";
import LoginContextType from "../../user/models/LoginContextType";

interface UploadImgProps {
  onClose: () => void;
  imageProfile: string | null;
  onImageUpload: (newImage: string) => void;
}

const UploadImg: React.FC<UploadImgProps> = ({ onClose, imageProfile,onImageUpload }) => {
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [uploadedFileName, setUploadedFileName] = useState<string>("");

  const userService = new UserService();
  const { user } = useContext(LoginContext) as LoginContextType;

  const handleImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedImage(file);
      setUploadedFileName(file.name);
    }
  };

  const handleConfirm = async () => {
    try {
      if (uploadedImage) {  
        const response = await userService.uploadImage(user.email, uploadedImage);
        onImageUpload(response);
        toast.success("Image uploaded successfully");
        onClose();
      } else {
        toast.error("Please upload an image first");
      }
    } catch (err) {
      console.error("Failed to upload image", err);
      toast.error("Failed to upload image");
    }
  };

  return (
    <section className="modal">
      <div className="modal__upload">
        <div className="modal__upload__content">
          <h2>Upload Image</h2>

          {uploadedImage && (
            <div className="profileImage">
              <LazyLoadImage
                src={URL.createObjectURL(uploadedImage)}
                alt="user-photo"
                width={250}
                effect="blur"
              />
              <p>
                Selected image:{" "}
                <span className="green">{uploadedFileName}</span>
              </p>
            </div>
          )}

          <div className="file-upload-container">
            <label className="file-upload-label">
              <div className="file-upload-content">
                <FontAwesomeIcon
                  icon={faCloudUploadAlt}
                  className="file-upload-image"
                />
                <p className="file-upload-text">
                  {uploadedFileName ? (
                    <span className="file-upload-link">{uploadedFileName}</span>
                  ) : (
                    <span className="file-upload-link">
                      Select an image from your computer
                    </span>
                  )}
                </p>
              </div>
              <input
                type="file"
                className="file-upload-input"
                onChange={handleImageChange}
              />
            </label>
          </div>

          <div className="modal__upload__content__actions">
            <button className="button__modal" onClick={onClose}>
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

export default UploadImg;
