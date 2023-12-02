import {  incrementByAmount, selectCount } from "@/app/features/temp/counterSlice";
import { selectProduct } from "../features/product/productSlice";
import { useSelector, useDispatch } from "react-redux";
const SummaryRow = () => {
    const count = useSelector(selectCount);

    const products = useSelector(selectProduct);
    return(
<div className="flex bg-slate-300">
    <p>Circonia</p>
    <p>3</p>
    <p>Q300.00</p>
    <p>Q900.00</p>
</div>
      
    )
}

export default SummaryRow