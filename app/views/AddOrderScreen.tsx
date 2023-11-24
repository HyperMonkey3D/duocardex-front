"use client";

import { useState } from "react";

import ProductsDropdown from "../components/ProductsDropdown";
import OrderSummary from "./OrderSummary";

import type { RootState } from "@/app/redux/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "@/app/features/temp/counterSlice";

const AddOrderScreen = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const [dropdownList, setDropdownList] = useState<JSX.Element[]>([]);

  const addNewDrop = () => {
    const newElement = <ProductsDropdown keyz={dropdownList.length} />;
    setDropdownList((prevElementList) => [...prevElementList, newElement]);
  };

  const deleteLast = () => {
    setDropdownList((prevList) => {
      const newList = [...prevList];
      newList.pop();
      return newList;
    });
  };

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
            <select name="" id="" value={"d"}>
              <option value="2">two</option>
              <option value="3">three</option>
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
            <textarea name="" id="" cols={30} rows={10}></textarea>
          </div>
        </form>
        <OrderSummary />

        <button onClick={deleteLast}>DELETE LAST</button>
      </div>
    </div>
  );
};

export default AddOrderScreen;
