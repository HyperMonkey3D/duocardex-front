"use client";

import { useSelector, useDispatch } from "react-redux";
import { selectCount } from "@/app/features/temp/counterSlice";
import { selectProduct } from "../features/product/productSlice";

interface Comment {
  comment: string;
}

const OrderSummary = ({ comment }: Comment) => {
  const count = useSelector(selectCount);
  const products = useSelector(selectProduct);

  const calculateTotalAmounInTransaction = () => {
    const validCount = count.filter(
      (element) => !Number.isNaN(element.totalPrice)
    );
    const sumTotalPrice = validCount.reduce((a, c) => a + c.totalPrice, 0);

    return sumTotalPrice;
  };

  return (
    <div className="bg-slate-200 w-full h-full">
      <div>
        <h3>In this Order</h3>
      </div>
      <div className="flex bg-slate-400">
        <h4>Qty</h4>
        <h4>Product</h4>
        <h4>Price</h4>
        <h4>Total</h4>
      </div>
      {count.map((item, index) => {
        return (
          <div key={index} className="flex">
            <p className="text-red-600">{item.quantity}</p>

            {products
              .filter((product) => product.ProductID === parseInt(item.select))
              .map((product) => {
                return (
                  <>
                    <p className="mx-6">{product.ProductName}</p>
                    <p className="mx-6">{product.Price}</p>
                    <p className="mx-6">{item.totalPrice}</p>
                  </>
                );
              })}
          </div>
        );
      })}
      <div className="flex bg-slate-600">
        <h3>Summary</h3>
        <div>
          <h4>items</h4>
          <p>{count.reduce((a, c) => a + +c.quantity, 0)}</p>
        </div>
        <div>
          <h4>Grand Total</h4>
          <p>{calculateTotalAmounInTransaction()}</p>
        </div>
      </div>
      <div>
        <span>Comments</span>
        <div className="bg-slate-200">
          <p>{comment}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
