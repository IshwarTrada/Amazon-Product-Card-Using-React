import "./ProductList.css";
import Product from "./Product.jsx";

function ProductList() {
  return (
    <div className="ProductList">
      <Product idx={0} title="Logitech MX Master" />
      <Product idx={1} title="Apple Pencil (2nd Gen)" />
      <Product idx={2} title="Zebronics Zeb-Transformer" />
      <Product idx={3} title="Petronics Toad" />
    </div>
  );
}

export default ProductList;
