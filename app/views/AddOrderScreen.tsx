"use client";

import { useEffect, useState } from "react";

import {selectCount } from "@/app/features/temp/counterSlice";

import ProductsDropdown from "../components/ProductsDropdown";
import OrderSummary from "./OrderSummary";


import { useSelector, useDispatch } from "react-redux";

import axios from "axios";
import { incrementProductList } from "../features/product/productSlice";

const AddOrderScreen = () => {

  interface Clinics {
    ID: string
    ClinicName: string
  }

  const countz = useSelector(selectCount);

  //const count = useSelector((state: RootState) => state.counter.value);


  

  const [dropdownList, setDropdownList] = useState<JSX.Element[]>([]);
const [nextState, setNextState] = useState(false)

  const [clinics, setClinics] = useState<[]>([])
  const [selectedClinic, setSelectedClinic] = useState("")

  const [productList, setProductList] = useState<[]>([])
  const [comment, setComment] = useState("")

 const dispatch = useDispatch()
  const clinicsURL = "http://localhost:8000/clients"
  const productsURL = "http://localhost:8000/items"

  const addNewDrop = () => {
    
    const newElement = <ProductsDropdown nextState={nextState}  keyz={`key-${dropdownList.length}`} />;
    setDropdownList((prevElementList) => [...prevElementList, newElement]);
    
  };

  const changeNextState = () => {
    if(!nextState) {
      setNextState(true)
    } else {
      setNextState(false)
    }
  }

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
   //dispatch(incrementProductList([products.data]))
    setProductList(products.data)
  }

  useEffect(() => {
    fetchClinics()
    fetchProducts()
  }, [])


  useEffect(() => {
    dispatch(incrementProductList(productList))
   // console.log("useeffect in length")
  },[productList.length>0])


  return (
    <div className="bg-slate-300 h-full w-full">
      <div>
        <h2>add new order</h2>
        
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
          
          </div>
          <div>
            <label htmlFor="">Add a comment</label>
            <textarea name="" id="" cols={30} rows={5} value={comment} onChange={ (e) => setComment(e.target.value)}></textarea>
          </div>

        </form>
        <OrderSummary />

        <button onClick={deleteLast}>DELETE LAST</button>
      </div>
    </div>
  );
};

export default AddOrderScreen;
