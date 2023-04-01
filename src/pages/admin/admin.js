import React from "react";
import "../product/style/admin.css";
import image1 from "../../assets/images/addBook.jpg";
import image2 from "../../assets/images/showReaders.png";
import image3 from "../../assets/images/showRequests.jpg";
import { createSearchParams, Link, useNavigate } from "react-router-dom";
const Admin = () => {
  return (
    <div className="product-list1">
      <div className="product-card1">
        <div className="card-img1">
          <img src={image1} alt="addBook" />
        </div>
        <div className="card-info1">
          <h4 className="title1">
            You Can add a book from here Just click "Add Book" Button
          </h4>
          <button className="watch-but1">
            <Link to={"/adminView"}>Show Available Books</Link>
          </button>
        </div>
      </div>
      <div className="product-card1">
        <div className="card-img1">
          <img src={image2} alt="addBook" />
        </div>
        <div className="card-info1">
          <h4 className="title1">
            You Can See the requests from here Just click " Show Readers
            Requests" Button
          </h4>
          <Link to='/showRequests'><button className="watch-but1">Show Readers Requests</button></Link>
        </div>
      </div>
      <div className="product-card1">
        <div className="card-img1">
          <img src={image3} alt="addBook" />
        </div>
        <div className="card-info1">
          <h4 className="title1">
            You Can See the history of Readers from here Just click "Show
            Readers History" Button
          </h4>
          <Link to='/showHistory'><button className="watch-but1">Show Readers History</button></Link>
        </div>
      </div>
    </div>
  );
};
export default Admin;
