import React from "react";
import Test from './Test'
import '../style/productCard.css'
import { Link } from "react-router-dom"

const AdminProduct = (props)=>{
    return(
        <div className="product-card">
        <div className="card-img">
            <img src={props.img} alt="product-card" />
        </div>
        <div className="card-info">
            <h4 className="title">{props.name}</h4>
            <p className="description">{props.desc}</p>
            <button className="watch-but">
                   <Link to={'/productInfo/'+props.id}>
                       Show Chapters
                    </Link>
            </button>
            <Test/>
        </div>
    </div>
    )
}

export default AdminProduct;