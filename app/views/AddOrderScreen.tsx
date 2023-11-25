"use client";

import { useEffect, useState } from "react";

import ProductsDropdown from "../components/ProductsDropdown";
import OrderSummary from "./OrderSummary";

import type { RootState } from "@/app/redux/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "@/app/features/temp/counterSlice";
import axios from "axios";

const AddOrderScreen = () => {

  interface Clinics {
    ID: string
    ClinicName: string
  }

 

  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  

  const [dropdownList, setDropdownList] = useState<JSX.Element[]>([]);

  const [clinics, setClinics] = useState<[]>([])
  const [selectedClinic, setSelectedClinic] = useState("")

  const [productList, setProductList] = useState([])
  const [comment, setComment] = useState("")

  const clinicsURL = "http://localhost:8000/clients"
  const productsURL = "http://localhost:8000/items"

  const addNewDrop = () => {
   
    const newElement = <ProductsDropdown products={productList} keyz={`key-${dropdownList.length}`} />;
    setDropdownList((prevElementList) => [...prevElementList, newElement]);
    
  };

  const deleteLast = () => {
    setDropdownList((prevList) => {
      const newList = [...prevList];
      newList.pop();
      return newList;
    });
  };

  const fetchClinics = async () => {
    const clinics = await axios.get(clinicsURL)
   
    setClinics(clinics.data)
  }

  const fetchProducts = async () => {
    const products = await axios.get(productsURL)
   
    setProductList(products.data)
  }

  useEffect(() => {
    fetchClinics()
    fetchProducts()
  }, [])



  return (
    <div className="bg-slate-300 h-full w-full">
      <div>
        <h2>add new order</h2>
        <h3>{dropdownList.length}</h3>
      </div>
      <div className="flex">
        <form>
          <div>
            <label htmlFor="">Select A Clinic</label>
            <select name="" id="" value={selectedClinic} onChange={(e)=>setSelectedClinic(e.target.value)} >

              {
                clinics.map((item:Clinics) => {
                    const { ClinicName, ID } = item
                  return(
                    <option value={ID}  key={ID}>{ClinicName}</option>
                  )
                })
              }
             
            </select>
          </div>
          {dropdownList}
          <div>
            <button type="button" onClick={addNewDrop}>
              add more
            </button>
          </div>
          <div>
            <label htmlFor="">Add a comment</label>
            <textarea name="" id="" cols={30} rows={10} value={comment} onChange={ (e) => setComment(e.target.value)}></textarea>
          </div>
        </form>
        <OrderSummary />

        <button onClick={deleteLast}>DELETE LAST</button>
      </div>
    </div>
  );
};

export default AddOrderScreen;
