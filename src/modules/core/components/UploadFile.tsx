import React, { useContext, useState } from "react";
import Papa from "papaparse";
import { toast } from "react-toastify";
import PackageService from "../../package/service/PackageService";
import PackageRequest from "../../package/dto/PackageRequest";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { LoginContext } from "../../context/LoginProvider";
import LoginContextType from "../../user/models/LoginContextType";

interface UploadFileProps {
  onClose: () => void;
}

const UploadFile: React.FC<UploadFileProps> = ({ onClose }) => {
  const [csvData, setCsvData] = useState<PackageRequest[]>([]);
  const [uploadedFileName, setUploadedFileName] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const servicePackage = new PackageService();
  const { user } = useContext(LoginContext) as LoginContextType;

  const isCSVorXMLFile = (fileName: string): boolean => {
    const allowedExtensions = [".csv", ".xml"];
    const lowerCaseFileName = fileName.toLowerCase();
    return allowedExtensions.some((ext) => lowerCaseFileName.endsWith(ext));
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const file = event.target.files?.[0];
    if (file) {
      const fileName = file.name;
      setUploadedFileName(fileName);
      if (!isCSVorXMLFile(fileName)) {
        toast.warning("Please select a CSV or XML file");
        setIsEmailValid(false);
        return;
      } else {
        toast.info("The type of file is valid");
      }
      Papa.parse(file, {
        complete: (result) => {
          const packagesData = result.data.slice(1);
          const lastRow = packagesData[packagesData.length - 1] as Record<
            string,
            unknown
          >;
          if (Object.values(lastRow).every((value) => value === "")) {
            packagesData.pop();
          }
          if (
            packagesData &&
            Array.isArray(packagesData) &&
            packagesData.length > 0
          ) {
            const mappedPackages = packagesData.map((data: any) => {
              return {
                customerEmail: data[0],
                origin: {
                  name: data[1],
                  phone: data[2],
                  addressDTO: {
                    city: data[3],
                    street: data[4],
                    streetNumber: data[5],
                    country: data[6],
                    postalCode: data[7],
                  },
                },
                destination: {
                  name: data[8],
                  phone: data[9],
                  addressDTO: {
                    city: data[10],
                    street: data[11],
                    streetNumber: data[12],
                    country: data[13],
                    postalCode: data[14],
                  },
                },
                packageDetails: {
                  weight: parseInt(data[15]),
                  height: parseInt(data[16]),
                  width: parseInt(data[17]),
                  length: parseInt(data[18]),
                  deliveryDescription: data[19],
                },
              };
            });

            const isValidEmail = mappedPackages.every(p => p.customerEmail === user.email);
            if (isValidEmail) {
              setCsvData(mappedPackages);
              setIsEmailValid(true);
            } else {
              toast.error("The email in the file does not match the user email");
              setIsEmailValid(false);
            }
          } else {
            toast.error("Invalid CSV data");
            setIsEmailValid(false);
          }
        },
        error: (error) => {
          toast.error("Error parsing CSV file");
          setIsEmailValid(false);
        },
      });
    }

  };

  const handleConfirm = async (): Promise<void> => {
    try {
      for (const packageCsv of csvData) {
        await servicePackage.createPackage(packageCsv);
      }
      toast.success("All packages were created successfully");
    } catch (error) {
      toast.warning("This record doesn't have all the required fields");
    }
    window.location.reload();
    onClose();
  };

  return (
    <section className="modal">
      <div className="modal__upload">
        <div className="modal__upload__content">
          <h2>Import file</h2>

          <div className="file-upload-container">
            <label className="file-upload-label">
              <div className="file-upload-content">
                <FontAwesomeIcon
                  icon={faCloudArrowUp}
                  className="file-upload-image"
                />
                <p className="file-upload-text">
                  {uploadedFileName ? (
                    <span className="file-upload-link ">
                      {uploadedFileName.toLocaleUpperCase()}
                    </span>
                  ) : (
                    <span className="file-upload-link ">
                      Select a file from your computer
                    </span>
                  )}
                </p>
              </div>
              <input
                type="file"
                className="file-upload-input"
                onChange={handleFileChange}
              />
            </label>
          </div>
          <div className="modal__upload__content__actions">
            <button className="button__modal" onClick={onClose}>
              Cancel
            </button>
            <button
              className={`button__modal button__modal__confirm ${!isEmailValid ? 'button__modal__confirm--disabled' : ''}`}
              onClick={handleConfirm}
              disabled={!isEmailValid}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadFile;
