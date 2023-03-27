import React from "react"
import '../style/productCard.css'
const Product = (props) =>{
   return(
        <div className="product-card">
            <div className="card-img">
                <img src={props.img} alt="product-card" />
            </div>
            <div className="card-info">
                <h4 className="title">{props.name}</h4>
                <p className="description">{props.desc}</p>
                <button className="watch-but">
                       Request
                </button>
                <button className="watch-but">
                       Filter
                </button>
            </div>
        </div>
    )
}
export default Product;