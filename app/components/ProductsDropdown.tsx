interface Props {
  keyz: number;
}

const ProductsDropdown = ({ keyz }: Props) => {
  return (
    <div className="flex" key={keyz + 1}>
      <div>
        <label htmlFor="">{`${keyz + 1} ddd`}</label>
        <select name="" id="" value={"d"}>
          <option value="1">one</option>
          <option value="2">two</option>
          <option value="3">three</option>
        </select>
      </div>
      <div>
        <label htmlFor="">Qty</label>
        <input type="number" />
      </div>
    </div>
  );
};

export default ProductsDropdown;
