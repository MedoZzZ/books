import React from "react";
import ProductCard from "../product/components/productCard";
import "../product/style/reader.css"
import {Data} from '../../core/data/books'
import Empty from "../product/components/empty";
import AdminProduct from './../product/components/adminProduct'
import book from "../../assets/images/book.png";
const Reader = () => {
    const items = Data;

    const viewFromProductList = (id) => {
        console.log("We are from parent ", id);
    }

    const displayMovies = () => {
        return items.map((item) => {
            return <ProductCard 
            key={item.id} 
            id = {item.id}
            name={item.name} 
            desc={item.description} 
            img = {item.image}
            view = {viewFromProductList}
            />
        });
    }
    const displayMoviesAdmin = () => {
        return items.map((item) => {
            return <AdminProduct 
            key={item.id} 
            id = {item.id}
            name={item.name} 
            desc={item.description} 
            img = {item.image}
            view = {viewFromProductList}
            />
        });
    }
    let x=true
    return(
        x?
        <div className="admin">
            <div className="add-btn">
                <a href="#"><img src={book}/></a>
            </div>
            <div className="product-list">{
                items.length > 0 ?
                displayMoviesAdmin()
                :
                <Empty />
            }
            </div>
        </div>
        :
        <div className="product-list">{
            items.length > 0 ?
            displayMovies()
            :
            <Empty />
        }
        </div>
    );
}
export default Reader;