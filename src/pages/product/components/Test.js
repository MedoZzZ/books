import React, { Component } from "react";
import '../style/productCard.css'
import { Link } from "react-router-dom"
const Test = ()=> {
    return (
        <div className="admin">
        <button className="remove">
            <Link >
            Remove
            </Link>
        </button>
        <button className="edit">
            <Link >
            Edit
            </Link>
        </button>
    </div>
    )
  
}

export default Test