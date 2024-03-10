import React from 'react'
import OptionsDropDownOrderDetails from './OptionsDropDownOrderDetails';
interface ModalOrdersProps {
    handleOpenModal: () => void;
  }
const ModalEditOrder: React.FC<ModalOrdersProps> = ({ handleOpenModal }) => {
  return (
    <section className="modal">
    <div className="modal__container">
      <div className="modal__container__header">
        <div className="modal__container__header__title">
          <span>Edit Order</span>
        </div>

        <div className="modal__container__header__actions">
          <span className="modal__container__header__actions__status" >Pending</span>
          {/* <OptionsDropDownOrderDetails onDelete={() => {}} onDownload={() => {}} onMarkDevivered={() => {}} onPrint={() => {}} onToggle={() => {}} index={1} /> */}
        </div>
      </div>

      <div className="modal__container__body">
        <div className="modal__container__body__content">
          <h2>Pick-up from : </h2>
          <div className="modal__container__body__content__main">
            <div className="modal__container__body__content__input">
              <label htmlFor="">Name</label>
              <input type="text" placeholder="Enter the name" value="Denis" />
            </div>

            <div className="modal__container__body__content__input">
              <label htmlFor="">Phone</label>
              <input type="text" placeholder="Enter phone number" />
            </div>

            <div className="modal__container__body__content__input">
              <label htmlFor="">City</label>
              <input type="text" placeholder="Enter the city" />
            </div>

            <div className="modal__container__body__content__input">
              <label htmlFor="">Street</label>
              <input type="text" placeholder="Enter the street" />
            </div>
            <div className="modal__container__body__content__input">
              <label htmlFor="">Number</label>
              <input type="text" placeholder="Enter the number" />
            </div>

            <div className="modal__container__body__content__input">
              <label htmlFor="">Country</label>
              <input type="text" placeholder="Enter the country" />
            </div>

            <div className="modal__container__body__content__input">
              <label htmlFor="">Postal Code</label>
              <input type="text" placeholder="Enter the postal code" />
            </div>
          </div>
        </div>

        <div className="modal__container__body__content">
          <h2>Deliver to : </h2>

          <div className="modal__container__body__content__main">
           

            <div className="modal__container__body__content__input">
              <label htmlFor="">Phone</label>
              <input type="text" placeholder="Enter phone number" />
            </div>

            <div className="modal__container__body__content__input">
              <label htmlFor="">Email</label>
              <input type="text" placeholder="Enter the email" value="Denis" />
            </div>

            <div className="modal__container__body__content__input">
              <label htmlFor="">City</label>
              <input type="text" placeholder="Enter the city" />
            </div>

            <div className="modal__container__body__content__input">
              <label htmlFor="">Street</label>
              <input type="text" placeholder="Enter the street" />
            </div>
            <div className="modal__container__body__content__input">
              <label htmlFor="">Number</label>
              <input type="text" placeholder="Enter the number" />
            </div>

            <div className="modal__container__body__content__input">
              <label htmlFor="">Country</label>
              <input type="text" placeholder="Enter the country" />
            </div>

            <div className="modal__container__body__content__input">
              <label htmlFor="">Postal Code</label>
              <input type="text" placeholder="Enter the postal code" />
            </div>

            <div className="modal__container__body__content__input">
              <label htmlFor="">Delivery Date</label>
              <input type="date" />
            </div>
          </div>
        </div>

        <div className="modal__container__body__content">
          <h2>Order Details</h2>
          <div className="modal__container__body__content__main">
            <div className="modal__container__body__content__input">
              <label htmlFor="">Weight</label>
              <input type="text" placeholder="Enter the weight" />
            </div>

            <div className="modal__container__body__content__input">
              <label htmlFor="">Type</label>
              <input type="text" placeholder="Enter the type" />
            </div>

            <div className="modal__container__body__content__input">
              <label htmlFor="">Height</label>
              <input type="text" placeholder="Enter the height" />
            </div>

            <div className="modal__container__body__content__input">
              <label htmlFor="">Width</label>
              <input type="text" placeholder="Enter the width" />
            </div>

            <div className="modal__container__body__content__input">
              <label htmlFor="">Volume</label>
              <input type="text" placeholder="Enter the volume" />
            </div>

            <div className="modal__container__body__content__input">
              <label htmlFor="">Price</label>
              <input type="text" placeholder="Enter the price" />
            </div>

            <div className="modal__container__body__content__input">
              <label htmlFor="">Delivery Details :</label>
              <input
                type="text"
                placeholder="Enter the details for our driver"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="modal__container__footer">
        <button
          className="button__modal   button__modal__cancel"
          onClick={() => handleOpenModal()}
        >
          Cancel
        </button>
        <button className="button__modal  button__modal__save">Update</button>
      </div>
    </div>
  </section>
  )
}

export default ModalEditOrder