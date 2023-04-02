import React from "react";
import "./style/productList.css";
import { Link } from "react-router-dom";
import book1 from "../../assets/images/book1.jfif";
import book2 from "../../assets/images/book2.jfif";
import book3 from "../../assets/images/book3.jfif";

const ProductList = () => {
  return (
    <div className="product-list">
      <div className="product-card">
        <div className="card-img">
          <img src={book1} alt="product-card" />
        </div>
        <div className="card-info">
          <h4 className="title">Hebta</h4>
          <p className="description">It has survived not only five centuries remaining essentially unchanged.</p>
          <button className="watch-but"><Link to={'/login'}>View</Link></button>
        </div>
      </div>
      <div className="product-card">
        <div className="card-img">
          <img src={book2} alt="product-card" />
        </div>
        <div className="card-info">
          <h4 className="title">Hebta</h4>
          <p className="description">It has survived not only five centuries remaining essentially unchanged.</p>
          <button className="watch-but"><Link to={'/login'}>View</Link></button>
        </div>
      </div>
      <div className="product-card">
        <div className="card-img">
          <img src={book3} alt="product-card" />
        </div>
        <div className="card-info">
          <h4 className="title">Hebta</h4>
          <p className="description">It has survived not only five centuries remaining essentially unchanged.</p>
          <button className="watch-but"><Link to={'/login'}>View</Link></button>
        </div>
      </div>
    </div>
  );
};
export default ProductList;
