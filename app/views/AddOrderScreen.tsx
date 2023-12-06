"use client";

import { useEffect, useState } from "react";



import {
  incrementByAmount,
  selectCount,
} from "@/app/features/temp/counterSlice";

//--- client id and comment
import ProductsDropdown from "../components/ProductsDropdown";
import OrderSummary from "./OrderSummary";

import { useSelector, useDispatch } from "react-redux";

import axios from "axios";
import { incrementProductList } from "../features/product/productSlice";

const AddOrderScreen = () => {
  interface Clinics {
    ClientID: string;
    ClinicName: string;
  }


  const dasProducts = useSelector(selectCount)

  const [clinics, setClinics] = useState<[]>([]);
  const [selectedClinic, setSelectedClinic] = useState("");

  const [productList, setProductList] = useState<[]>([]);
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();
  const clinicsURL = "http://localhost:8000/clients";
  const productsURL = "http://localhost:8000/items";
  const ordersURL = "http://localhost:8000/orders"

  const fetchClinics = async () => {
    const clinics = await axios.get(clinicsURL);

    setClinics(clinics.data);
  };

  const fetchProducts = async () => {
    const products = await axios.get(productsURL);
    setProductList(products.data);
  };


  const filterOrderToSend = () => {
    const sortedOrder = dasProducts.filter((element)=> !Number.isNaN(element.totalPrice) && element.unitPrice > 0)
    
    return sortedOrder
  }

  const handleSubmit = async (e:any) => {
    e.preventDefault()
    const order = {
      ClientID: selectedClinic,
      Orders: filterOrderToSend(),
      Comment: comment
    }

    const postOrder = await axios.post(ordersURL, order)

    const  postResult = postOrder.data
    console.log("post result is", postResult)
    
    //console.log("objext ", order)
  }

  useEffect(() => {
    fetchClinics();
    fetchProducts();
  }, []);

  useEffect(() => {
    //dispatch the list of products to a global state
    dispatch(incrementProductList(productList));
  }, [productList.length > 0]);

  useEffect(() => {
    filterOrderToSend()
  }, [dasProducts])

  return (
    <div className="bg-slate-300 h-full w-full">
      <div>
        <h2>add new order</h2>
      </div>
      <div className="flex">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">Select A Clinic</label>
            <select
              name=""
              id=""
              value={selectedClinic}
              onChange={(e) => setSelectedClinic(e.target.value)}
            >
              {clinics.map((item: Clinics) => {
                const { ClinicName, ClientID} = item;
                return (
                  <option value={ClientID} key={ClientID}>
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
          <button type="submit" className="bg-black text-white">submit</button>
        </form>
        <OrderSummary comment={comment}/>
      </div>
    </div>
  );
};

export default AddOrderScreen;
