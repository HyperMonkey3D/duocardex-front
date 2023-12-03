import { useState, useEffect } from "react";
import {
  incrementByAmount,
  selectCount,
} from "@/app/features/temp/counterSlice";
import { useSelector, useDispatch } from "react-redux";
import { selectProduct } from "../features/product/productSlice";

interface Details {
  ProductID: number;
  ProductName: string;
}
//////// state


//--- product id, unit price, total amount per product, quantity
const ProductsDropdown = () => {
  const products = useSelector(selectProduct);
  const dispatch = useDispatch();

  const [add, setAdd] = useState(false);

  const [kindAndAmount, setKindAndAmount] = useState({
    select: "",
    quantity: "",
  });

  const [processedData, setProcessedData] = useState({
    select: "",
    quantity: "",
    productName: "",
    unitPrice: 0,
    totalPrice: 0,
  });
  /////////

  //capture values from fields
  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    setKindAndAmount({ ...kindAndAmount, [name]: value });
  };

 

  //calculate the total to pay for each row of items added
  const calculateTransactionDetails = () => {
    const newprod = products.filter(
      (product) => product.ProductID === parseInt(kindAndAmount.select)
    );
    console.log("newprod" ,newprod[0]?.ProductName)
    const total = newprod[0]?.Price * parseInt(kindAndAmount.quantity);
    setProcessedData({
      ...kindAndAmount,
      productName: newprod[0]?.ProductName,
      unitPrice: newprod[0]?.Price,
      totalPrice: total,
    });
  };

  useEffect(() => {
    calculateTransactionDetails();
    if (!Number.isNaN(processedData.totalPrice) || processedData.totalPrice !== 0) {
      dispatch(incrementByAmount([processedData]));
    }
    setKindAndAmount({
      select: "",
      quantity: "",
    });
    setAdd(false);
    console.log("fffffffx", add);
  }, [add]);

  return (
    <div className="flex">
      <div>
        <label htmlFor="">ff</label>
        <select
          name="select"
          id=""
          value={kindAndAmount.select}
          onChange={handleOnChange}
        >
          <option defaultValue={"null"}>Click to select an option</option>
          {products.map((item: Details) => {
            const { ProductID, ProductName } = item;
            return (
              <option value={ProductID} key={ProductID}>
                {ProductName}
              </option>
            );
          })}
        </select>
      </div>
      {kindAndAmount.select !== "" &&
        kindAndAmount.select !== "Click to select an option" && (
          <div>
            <label htmlFor="">Qty</label>
            <input
              name="quantity"
              type="number"
              value={kindAndAmount.quantity}
              onChange={handleOnChange}
            />
          </div>
        )}

      <div>
        <button type="button" onClick={() => setAdd(true)}>
          ADD
        </button>
      </div>
    </div>
  );
};

export default ProductsDropdown;
