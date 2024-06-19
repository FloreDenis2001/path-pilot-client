import React, { useState } from "react";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";

interface UploadImgProps {
  onClose: () => void;
}

const UploadImg: React.FC<UploadImgProps> = ({ onClose }) => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [uploadedFileName, setUploadedFileName] = useState<string>("");

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0];
    if (file) {
      const fileName = file.name;
      setUploadedFileName(fileName);
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleConfirm = (): void => {
    toast.success("Image uploaded successfully");
    onClose();
  };

  return (
    <section className="modal">
      <div className="modal__upload">
        <div className="modal__upload__content">
          <h2>Upload Image</h2>

          <div className="file-upload-container">
            <label className="file-upload-label">
              <div className="file-upload-content">
                <FontAwesomeIcon icon={faCloudUploadAlt} className="file-upload-image" />
                <p className="file-upload-text">
                  {uploadedFileName ? (
                    <span className="file-upload-link">{uploadedFileName}</span>
                  ) : (
                    <span className="file-upload-link">Select an image from your computer</span>
                  )}
                </p>
              </div>
              <input type="file" className="file-upload-input" onChange={handleImageChange} />
            </label>
          </div>

          <div className="modal__upload__content__actions">
            <button className="button__modal" onClick={onClose}>
              Cancel
            </button>
            <button className="button__modal button__modal__confirm" onClick={handleConfirm}>
              Confirm
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadImg;
