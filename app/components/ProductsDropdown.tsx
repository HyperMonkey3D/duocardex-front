import { useState } from "react"

interface Props {
  keyz: string;
  products: Data[]
}

interface Data {
  ProductID: string
  ProductName: string
}
console.log()
const ProductsDropdown = ({ keyz, products }: Props) => {
  const [selectedProduct, setSelectedProduct] = useState("")
  const [quantity, setQuantity] = useState("")
  console.log(selectedProduct, quantity)
  return (
    <div className="flex" key={keyz + 1}>
      <div>
        <label htmlFor="">{`${keyz}`}</label>
        <select name="" id="" value={selectedProduct} onChange={(e)=> setSelectedProduct(e.target.value)}>
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
      <div>
        <label htmlFor="">Qty</label>
        <input type="number" value={quantity} onChange={(e)=> setQuantity(e.target.value)} />
      </div>
    </div>
  );
};

export default ProductsDropdown;
