import "./Product.css";
import Price from "./Price.jsx";

function Product({ idx, title }) {
  let oldPrices = ["12,495", "11,900", "1,599", "599"];
  let newPrices = ["8,999", "9,199", "899", "278"];
  let description = [
    ["8000 DPI", "5 Programmable Buttons"],
    ["Intuitive Touch Surface", "Designed for iPad Pro"],
    ["Designed for iPad Pro", "Intuitive Touch Surface"],
    ["Wireless Mouse 2.4 GHz", "Optical Orientation"],
  ];
  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
  );
}

export default Product;
