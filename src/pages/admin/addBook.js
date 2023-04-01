import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import "../product/style/updateBook.css";
const AddBook = () => {
  const [searchparams] = useSearchParams();
  const Auther = searchparams.get("Auther");
  const Name = searchparams.get("Name");
  const Desc = searchparams.get("Desc");
  const Field = searchparams.get("Field");
  const PublicationDate = searchparams.get('PublicationDate');
  return (
    <div className="containerContact4">
      <div className="right-side4">
        <div className="topic-text4">
          <h1>Add Book</h1>
        </div>
        <form action="#">
          <div className="input-box4">
            <input type="text" placeholder='Enter Auther Name'/>
          </div>
          <div className="input-box4">
            <input type="text" placeholder='Enter Book Name' />
          </div>
          <div className="input-box4">
            <input type="text" placeholder='Enter Book Publication Date' />
          </div>
          <div className="input-box4">
            <input type="text" placeholder='Enter Book Field' />
          </div>
          <textarea
            id="w3review"
            name="w3review"
            rows="4"
            cols="50"
            placeholder='Enter Book Description'
          />
          <br></br>
          <br></br>
          <div className="button4">
            <button className="updateBook">
              <Link to={"/adminView"}>Add</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddBook;
