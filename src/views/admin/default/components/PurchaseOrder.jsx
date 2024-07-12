import React from "react";
import styles from "./purchaseOrder.module.css";

const PurchaseOrder = () => {
  return (
    <div className={styles.mainHoomeRightbar}>
      <form className={`${styles.form} p-5`}>
        <h4 className={styles.labelStyles}>Purchase Order Form</h4>

        <div className={`row ${styles.borderBottomStyle} mb-3`}>
          <div className={`form-group ${styles.col}`}>
            <label htmlFor="poType" className={styles.labelStyle}>
              PO Type <span className={styles.asteriskStyle}>*</span>
            </label>
            <select id="poType" className="form-control" required>
              <option>New</option>
              <option>Supplementary</option>
            </select>
          </div>
        </div>

        <h4 className={styles.labelStyles}>Vendor Details</h4>
        <div className="row mb-3">
          <div className={`form-group ${styles.col}`}>
            <label htmlFor="vendorType" className={styles.labelStyle}>
              Vendor Type <span className={styles.asteriskStyle}>*</span>
            </label>
            <select id="vendorType" className="form-control" required>
              <option>Vendor</option>
            </select>
          </div>
          <div className={`form-group ${styles.col}`}>
            <label htmlFor="vendorName" className={styles.labelStyle}>
              Vendor Name <span className={styles.asteriskStyle}>*</span>
            </label>
            <input type="text" id="vendorName" className="form-control" required />
          </div>
          <div className={`form-group ${styles.col}`}>
            <label htmlFor="vendorBranch" className={styles.labelStyle}>
              Vendor Branch <span className={styles.asteriskStyle}>*</span>
            </label>
            <input
              type="text"
              id="vendorBranch"
              className="form-control"
              required
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className={`form-group ${styles.col}`}>
            <label htmlFor="gstin" className={styles.labelStyle}>
              GSTIN <span className={styles.asteriskStyle}>*</span>
            </label>
            <input type="text" id="gstin" className="form-control" />
          </div>
          <div className={`form-group ${styles.col}`}>
            <label htmlFor="msmeId" className={styles.labelStyle}>
              MSME Id <span className={styles.asteriskStyle}>*</span>
            </label>
            <input type="text" id="msmeId" className="form-control" />
          </div>
        </div>

        <div className={`form-group ${styles.borderBottomStyle} mb-3`}>
          <label htmlFor="billFromAddress" className={styles.labelStyle}>
            Bill From Address <span className={styles.asteriskStyle}>*</span>
          </label>
          <textarea
            id="billFromAddress"
            className="form-control"
            rows="3"
          ></textarea>
        </div>

        <h4 className={styles.labelStyles}>PO Terms</h4>
        <div className="row mb-3">
          <div className={`form-group ${styles.col}`}>
            <label htmlFor="termsAndConditions" className={styles.labelStyle}>
              Terms and Conditions <span className={styles.asteriskStyle}>*</span>
            </label>
            <textarea
              id="termsAndConditions"
              className="form-control"
              rows="3"
            ></textarea>
          </div>
        </div>

        <div className="row mb-3">
          <div className={`form-group ${styles.col}`}>
            <label htmlFor="costCenter" className={styles.labelStyle}>
              Cost Center <span className={styles.asteriskStyle}>*</span>
            </label>
            <input type="text" id="costCenter" className="form-control" />
          </div>
          <div className={`form-group ${styles.col}`}>
            <label htmlFor="projectId" className={styles.labelStyle}>
              Project ID <span className={styles.asteriskStyle}>*</span>
            </label>
            <input type="text" id="projectId" className="form-control" />
          </div>
          <div className={`form-group ${styles.col}`}>
            <label htmlFor="quotation" className={styles.labelStyle}>
              Quotation <span className={styles.asteriskStyle}>*</span>
            </label>
            <input type="text" id="quotation" className="form-control" />
          </div>
        </div>

        <div className="row mb-3">
          <div className={`form-group ${styles.col}`}>
            <label htmlFor="paymentTerms" className={styles.labelStyle}>
              Payment Terms <span className={styles.asteriskStyle}>*</span>
            </label>
            <input type="text" id="paymentTerms" className="form-control" />
          </div>
          <div className={`form-group ${styles.col}`}>
            <label htmlFor="dueDate" className={styles.labelStyle}>
              Due Date (in days) <span className={styles.asteriskStyle}>*</span>
            </label>
            <input type="number" id="dueDate" className="form-control" />
          </div>
        </div>

        <div className={`row ${styles.borderBottomStyle} mb-3`}>
          <div className={`form-group ${styles.col}`}>
            <label htmlFor="projectDescription" className={styles.labelStyle}>
              Project Description <span className={styles.asteriskStyle}>*</span>
            </label>
            <input type="text" id="projectDescription" className="form-control" />
          </div>
          <div className={`form-group ${styles.col}`}>
            <label htmlFor="comments" className={styles.labelStyle}>
              Comments <span className={styles.asteriskStyle}>*</span>
            </label>
            <input type="text" id="comments" className="form-control" />
          </div>
          <div className={`form-group ${styles.col}`}>
            <label htmlFor="requestedBy" className={styles.labelStyle}>
              Requested By <span className={styles.asteriskStyle}>*</span>
            </label>
            <input type="text" id="requestedBy" className="form-control" />
          </div>
        </div>

        <h4 className={styles.labelStyles}>Billing Details</h4>
        <div className="row mb-3">
          <div className={`form-group ${styles.col}`}>
            <label htmlFor="billingId" className={styles.labelStyle}>
              Billing Id <span className={styles.asteriskStyle}>*</span>
            </label>
            <input type="text" id="billingId" className="form-control" />
          </div>
          <div className={`form-group ${styles.col}`}>
            <label htmlFor="billingAddress" className={styles.labelStyle}>
              Billing Address <span className={styles.asteriskStyle}>*</span>
            </label>
            <textarea
              id="billingAddress"
              className="form-control"
              rows="3"
            ></textarea>
          </div>
        </div>

        <div className={`row ${styles.borderBottomStyle} mb-3`}>
          <div className={`form-group ${styles.col}`}>
            <label htmlFor="billingPanNo" className={styles.labelStyle}>
              PAN No. <span className={styles.asteriskStyle}>*</span>
            </label>
            <input type="text" id="billingPanNo" className="form-control" />
          </div>
          <div className={`form-group ${styles.col}`}>
            <label htmlFor="billingGstin" className={styles.labelStyle}>
              GSTIN / UIN <span className={styles.asteriskStyle}>*</span>
            </label>
            <input type="text" id="billingGstin" className="form-control" />
          </div>
        </div>

        <h4 className={styles.labelStyles}>Shipping Details</h4>
        <div className="row mb-3">
          <div className={`form-group ${styles.col}`}>
            <label htmlFor="shippingId" className={styles.labelStyle}>
              Shipping Id <span className={styles.asteriskStyle}>*</span>
            </label>
            <input type="text" id="shippingId" className="form-control" />
          </div>
          <div className={`form-group ${styles.col}`}>
            <label htmlFor="shippingAddress" className={styles.labelStyle}>
              Shipping Address <span className={styles.asteriskStyle}>*</span>
            </label>
            <textarea
              id="shippingAddress"
              className="form-control"
              rows="3"
            ></textarea>
          </div>
        </div>

        <div className={`row ${styles.borderBottomStyle} mb-3`}>
          <div className={`form-group ${styles.col}`}>
            <label htmlFor="shippingPanNo" className={styles.labelStyle}>
              PAN No. <span className={styles.asteriskStyle}>*</span>
            </label>
            <input type="text" id="shippingPanNo" className="form-control" />
          </div>
          <div className={`form-group ${styles.col}`}>
            <label htmlFor="shippingGstin" className={styles.labelStyle}>
              GSTIN / UIN <span className={styles.asteriskStyle}>*</span>
            </label>
            <input type="text" id="shippingGstin" className="form-control" />
          </div>
        </div>

        <div className="row mb-3">
          <div className={`col ${styles.dFlex}`}>
            <button type="submit" className={`${styles.btn} ${styles.btnPrimary}`}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PurchaseOrder;
