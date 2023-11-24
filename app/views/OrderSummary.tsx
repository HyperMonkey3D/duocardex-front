"use client"

import SummaryRow from "../components/SummaryRow";

const OrderSummary = () => {
  return (
    <div className="bg-slate-200 w-full h-full">
      <div>
        <h3>In this Order</h3>
      </div>
      <div className="flex bg-slate-400">
        
        <h4>Product</h4>
        <h4>Qty</h4>
        <h4>Price</h4>
        <h4>Total</h4>
      </div>
      <SummaryRow />
      
      <div className="flex bg-slate-600">
        <h3>Summary</h3>
        <div>
          <h4>items</h4>
          <p>3</p>
        </div>
        <div>
          <h4>Grand Total</h4>
          <p>Q2233.77</p>
        </div>
      </div>
      <div>
        <span>Comments</span>
        <div className="bg-slate-200">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
