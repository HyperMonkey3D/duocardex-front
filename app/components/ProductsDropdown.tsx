import { useState, useEffect } from "react"
import {  incrementByAmount, selectCount } from "@/app/features/temp/counterSlice";
import { useSelector, useDispatch } from "react-redux";
interface Props {
  keyz: string;
  products: Data[]
  nextState: boolean
}

interface Data {
  ProductID: string
  ProductName: string
}

const ProductsDropdown = ({ keyz, products, nextState }: Props) => {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
const [text, setText] = useState({
  select: "",
  quantity: ""
})

const handleOnChange = (e:any) => {
const {name, value} = e.target
setText({...text, [name]:value}) 
}


useEffect(() => {
 // console.log("qqqq", text)
const { select, quantity } = text
  if(text.quantity !== "") {
    dispatch(incrementByAmount([text]))
  }
}, [text.quantity])


 
  return (
    <div className="flex" key={keyz + 1}>
      
      <div>
        <label htmlFor="">{`${keyz}`}</label>
        <select name="select" id="" value={text.select} onChange={handleOnChange}>
          <option defaultValue={"null"} >Click to select an option</option>
          {
            products.map((item:Data) => {
              const {ProductID, ProductName} = item
              return(
                <option  value={ProductID} key={ProductID} >{ProductName}</option>
              )
            })
          }
        </select>
      </div>
     { text.select!=="" && text.select !== "Click to select an option" && (<div>
        <label htmlFor="">Qty</label>
        <input name="quantity" type="number" value={text.quantity} onChange={handleOnChange} />
      </div>)}
    </div>
  );
};

export default ProductsDropdown;
