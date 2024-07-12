import React from 'react';
import './orderDetails.css';

const OrderDetails = () => {
  return (
    <form className="order-form">
      <div className="container">
        <div className="row mb-3">
          <div className="col-md-3">
            <div className="row">
              <div className="card mt-3 m-2">
                <h5>Vendor Detail</h5>
                <hr />
                <div className="col-12 p-4 mt-2">
                  <p><strong>Vendor Name:</strong> MOMAGIC TECHNOLOGIES PVT LTD</p>
                  <p>(VEN0853) MOMAGIC TECHNOLOGIES PVT LTD</p>
                  <p><strong>Vendor Address:</strong> 206, FF, PLOT NO. 190-191, NEELKANTH PALACE, DELHI</p>
                  <p><strong>Vendor GSTIN:</strong> 07AAHCM0426E1ZV</p>
                </div>
              </div>
              <div className="card mt-1 m-2">
              <h5>Tax Detail</h5>
              <hr/>
                <div className="col-12 p-4">
                  
                  <p><strong>Sub-Total value before Taxes:</strong> 0.00</p>
                  <p><strong>CGST:</strong> (+) 0.00</p>
                  <p><strong>SGST:</strong> (+) 0.00</p>
                  <p><strong>IGST:</strong> (+) 0.00</p>
                  <p><strong>Sub-Total values after Taxes:</strong> 0.00</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9 card mt-3">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <table className="table table-responsive">
                    <thead>
                      <tr>
                        <th>Component</th>
                        <th>Ord. Qty</th>
                        <th>Rate</th>
                        <th>Rate Cap</th>
                        <th>Tot Price</th>
                        <th>Proj. Req. Qty</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[...Array(4)].map((_, index) => (
                        <tr key={index}>
                          <td>
                            <select aria-label="Component select">
                              <option value="1">(0805-5.6K-5%-0.125W) P0000</option>
                              <option value="2">(Air Bubble Roll (100 m)) P0083</option>
                              <option value="3">(Plastic(Pad Printed)) P2460</option>
                              <option value="4">(screw 22mm) P3333</option>
                            </select>
                          </td>
                          <td>
                            <input type="number" defaultValue={1} min={0} />
                          </td>
                          <td>
                            <input type="number" step="0.01" min={0} />
                          </td>
                          <td>
                            <input type="number" step="0.01" min={0} />
                          </td>
                          <td>
                            <input type="number" step="0.01" min={0} readOnly />
                          </td>
                          <td>
                            <input type="number" defaultValue={0} min={0} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end">
            <button type="button" className="btn btn-secondary mr-2">Back</button>
            <button type="submit" className="btn btn-primary">Submit</button>
       
        </div>
      </div>
    </form>
  );
}

export default OrderDetails;
