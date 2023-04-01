import React from "react"
import '../style/productCard.css'
const Product = (props) =>{
    return(
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
    </div>
    )
}
export default Product;