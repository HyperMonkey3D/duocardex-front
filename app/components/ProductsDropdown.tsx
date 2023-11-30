import { useState, useEffect } from "react"
import {  incrementByAmount, selectCount } from "@/app/features/temp/counterSlice";
import { useSelector, useDispatch } from "react-redux";
import { selectProduct } from "../features/product/productSlice";
interface Props {
  keyz: string;
  
  nextState: boolean
}

interface Details {
  ProductID: number,
  ProductName: string
}

const ProductsDropdown = ({ keyz, nextState }: Props) => {

  const products = useSelector(selectProduct);
  const dispatch = useDispatch();

const [kindAndAmount, setKindAndAmount] = useState({
  select: "",
  quantity: ""
})

const handleOnChange = (e:any) => {
const {name, value} = e.target
setKindAndAmount({...kindAndAmount, [name]:value}) 
}

useEffect(() => {
  console.log("data in usefect is ", kindAndAmount)
}, [])


useEffect(() => {
 // console.log("qqqq", text)

  if(kindAndAmount.quantity !== "") {
    
    dispatch(incrementByAmount([kindAndAmount]))
  }
}, [kindAndAmount.quantity])



 
  return (
    <div className="flex" key={keyz + 1}>
      
      <div>
        <label htmlFor="">{`${keyz}`}</label>
        <select name="select" id="" value={kindAndAmount.select} onChange={handleOnChange}>
          <option defaultValue={"null"} >Click to select an option</option>
          {
            products.map((item:Details) => {
             const { ProductID, ProductName } = item
             console.log("ProductID",ProductID)
              return(
                <option  value={ProductID} key={ProductID} >{ProductName}</option>
              )
            })
          }
        </select>
      </div>
     { kindAndAmount.select!=="" && kindAndAmount.select !== "Click to select an option" && (<div>
        <label htmlFor="">Qty</label>
        <input name="quantity" type="number" value={kindAndAmount.quantity} onChange={handleOnChange} />
      </div>)}
    </div>
  );
};

export default ProductsDropdown;
