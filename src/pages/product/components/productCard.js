import React from "react";
import "../style/productCard.css";
import { useState, useRef } from "react";
const Product = (props) => {
  const [isAsk, setIsAsk] = useState(true);
  const isFirstClick = useRef(true);

  const hClick = () => {
    if (isFirstClick.current) {
      setIsAsk(false);
      isFirstClick.current = false;
    }
  };
  return (
    <div className="product-card">
      <div className="card-info">
        <br></br>
        <h2 className="auther">{props.auther}</h2>
        <br></br>
        <div>
          <div>
            <h1 className="title">{props.name}</h1>
            <p className="publicationDate">{props.publicationDate}</p>
          </div>
          <h5 className="field">({props.field})</h5>
        </div>
        <br></br>
        <h3 className="description">{props.desc}</h3>
      </div>
      <button className="neon1" onClick={hClick}>
        {isAsk ? "Ask" : "Booked"}
      </button>
    </div>
  );
};
export default Product;
