"use client";

import axios from "axios";
import { useEffect, useState } from "react";

interface Item {
  ID: number;
  ClinicName: string;
  CreatedAt: string;
  ClientID: string;
}

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

const ItemRow = () => {
  const clinicsURL = "http://localhost:8000/clients";
  const byClinicBaseURL = "http://localhost:8000/orders";
  const [clinics, setClinics] = useState<[]>([]);
  const [orders, setOrders] = useState<Content[]>([]);
  const [numberOfOrders, setNumberOfOrders] = useState<Content[]>();
  const getClinics = async () => {
    const clinics = await axios.get(clinicsURL);
    setClinics(clinics.data);
  };

  const getOrders = async () => {
    const orders = await axios.get(byClinicBaseURL);

    setOrders(orders.data);
  };

  const filterUniqueOrders = () => {
    const uniqueOrders = new Set<string>();
    const uniqueOrderIds = orders.filter((order) => {
      if (!uniqueOrders.has(order.OrderID)) {
        uniqueOrders.add(order.OrderID);

        return true;
      }
      return false;
    });

    setNumberOfOrders(uniqueOrderIds);
  };

  const totalOrdersPerClient = (id: string) => {
    const ordersArray = numberOfOrders?.filter(
      (order) => order.ClientID === id
    );
    return ordersArray?.length;
  };

  const calculateTotalSpentPerClient = (id: string) => {
    const arr = orders.filter((order) => order.ClientID === id);
    const totalAmount = arr.reduce((a, c) => a + +c.TotalAmount, 0);
    return totalAmount;
  };

  useEffect(() => {
    getClinics();
    getOrders();
  }, []);

  useEffect(() => {
    filterUniqueOrders();
  }, [orders]);

  return (
    <div className="flex flex-col bg-slate-300">
      <div className="mr-6 flex justify-between bg-slate-500">
        <h3>Clinic ID</h3>
        <h3>Client Since</h3>
        <h3>Name</h3>
        <h3>No. of Orders</h3>
        <h3>Total Spent</h3>
      </div>
      {clinics &&
        clinics.map((item: Item) => {
          return (
            <div key={item.ID} className="bg-slate-500 my-7 flex">
              <div className="mr-6">
                <p>{item.ClientID}</p>
              </div>

              <div>
                <p>{item.CreatedAt}</p>
              </div>
              <div className="mr-6">
                <p> {item.ClinicName}</p>
              </div>
              <div className="mr-6">{totalOrdersPerClient(item.ClientID)}</div>
              <div className="mr-6">
                {calculateTotalSpentPerClient(item.ClientID)}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ItemRow;
