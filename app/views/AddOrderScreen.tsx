"use client";

import { useEffect, useState } from "react";

// ClientID    String
//   ProductID   Int
//   Quantity    Int
//   UnitPrice   Decimal
//   Comment     String
//   TotalAmount Decimal

import ProductsDropdown from "../components/ProductsDropdown";
import OrderSummary from "./OrderSummary";

import { useSelector, useDispatch } from "react-redux";

import axios from "axios";
import { incrementProductList } from "../features/product/productSlice";

const AddOrderScreen = () => {
  interface Clinics {
    ID: string;
    ClinicName: string;
  }

  const [clinics, setClinics] = useState<[]>([]);
  const [selectedClinic, setSelectedClinic] = useState("");

  const [productList, setProductList] = useState<[]>([]);
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();
  const clinicsURL = "http://localhost:8000/clients";
  const productsURL = "http://localhost:8000/items";

  const fetchClinics = async () => {
    const clinics = await axios.get(clinicsURL);

    setClinics(clinics.data);
  };

  const fetchProducts = async () => {
    const products = await axios.get(productsURL);

    setProductList(products.data);
  };

  useEffect(() => {
    fetchClinics();
    fetchProducts();
  }, []);

  useEffect(() => {
    //dispatch the list of products to a global state
    dispatch(incrementProductList(productList));
  }, [productList.length > 0]);

  return (
    <div className="bg-slate-300 h-full w-full">
      <div>
        <h2>add new order</h2>
      </div>
      <div className="flex">
        <form>
          <div>
            <label htmlFor="">Select A Clinic</label>
            <select
              name=""
              id=""
              value={selectedClinic}
              onChange={(e) => setSelectedClinic(e.target.value)}
            >
              {clinics.map((item: Clinics) => {
                const { ClinicName, ID } = item;
                return (
                  <option value={ID} key={ID}>
                    {ClinicName}
                  </option>
                );
              })}
            </select>
          </div>
          <ProductsDropdown />

          <div></div>
          <div>
            <label htmlFor="">Add a comment</label>
            <textarea
              name=""
              id=""
              cols={30}
              rows={5}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
        </form>
        <OrderSummary comment={comment}/>
      </div>
    </div>
  );
};

export default AddOrderScreen;
