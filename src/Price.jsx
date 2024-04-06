import "./Price.css";

export default function Price({ oldPrice, newPrice }) {
  return (
    <div className="Prices">
      <span className="oPrice">{oldPrice}</span>
      &nbsp;&nbsp;&nbsp;
      <span className="nPrice">{newPrice}</span>
    </div>
  );
}
