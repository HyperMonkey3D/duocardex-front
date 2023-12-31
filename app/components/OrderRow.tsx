"use client";

import axios from "axios";
import { useEffect, useState } from "react";

interface Content {
  ID: number;
  OrderID: string;
  ClientID: string;
  ProductID: number;
  ProductName: string;
  OrderDate: string;
  Quantity: number;
  UnitPrice: number;
  Comment: string;
  TotalAmount: string;
}

interface OrderData {
  orderId: string;
  quantity: number;
  totalAmount: string;
}

const OrderRow = () => {
  const byClinicBaseURL = "http://localhost:8000/orders";

  const [orders, setOrders] = useState<Content[]>([]);
  const [orderValues, setOrderValues] = useState<{
    [orderId: string]: OrderData;
  }>({});

  const getOrders = async () => {
    const orders = await axios.get(byClinicBaseURL);
    console.log(orders);
    setOrders(orders.data);
  };

  const filterIndividualOrders = () => {
    //const orderSums: { [orderId: string]: { quantity: number; totalAmount: string } } = {};
    const orderSums: { [orderId: string]: OrderData } = {};

    // Iterate through the data
    for (const row of orders) {
      const orderId: string = row.OrderID;
      const quantity: number = row.Quantity;
      const totalAmount: string = row.TotalAmount;

      // If the Order ID is already in the dictionary, update the sums
      if (orderSums[orderId]) {
        orderSums[orderId].quantity += quantity;
        orderSums[orderId].totalAmount += totalAmount;
      } else {
        orderSums[orderId] = { orderId, quantity, totalAmount };
      }
    }

    setOrderValues(orderSums);
  };

  useEffect(() => {
    getOrders();
  }, []);

  useEffect(() => {
    filterIndividualOrders();
  }, [orders]);

  return (
    <div className="flex flex-col bg-slate-300">
      <div className="mr-6 flex justify-between bg-slate-500">
        <h3>Order ID</h3>
        <h3>Date</h3>
        <h3>Items QTY</h3>
        <h3>Total</h3>
      </div>
      {orders &&
        orders.map((item: Content) => {
          return (
            <div key={item.ID} className="bg-slate-500 my-7 flex">
              <div className="mr-6">
                <p>{item.OrderID}</p>
              </div>
              <div className="mr-6">
                <p> {item.OrderDate}</p>
              </div>

              {Object.values(orderValues)
                .filter((sum) => sum.orderId === item.OrderID)
                .map((filteredItem) => {
                  return (
                    <>
                      <div className="mr-6">
                        <p> {filteredItem.quantity}</p>
                      </div>
                      <div className="mr-6">
                        <p> {filteredItem.totalAmount}</p>
                      </div>
                    </>
                  );
                })}
            </div>
          );
        })}
    </div>
  );
};

export default OrderRow;
