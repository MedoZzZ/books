import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import "../product/style/updateBook.css";
const UpdateBook = () => {
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
          <h1>Update Book</h1>
        </div>
        <form action="#">
          <div className="input-box4">
            <input type="text" defaultValue={Auther}/>
          </div>
          <div className="input-box4">
            <input type="text" defaultValue={Name} />
          </div>
          <div className="input-box4">
            <input type="text" defaultValue={PublicationDate} />
          </div>
          <div className="input-box4">
            <input type="text" defaultValue={Field} />
          </div>
          <textarea
            id="w3review"
            name="w3review"
            rows="4"
            cols="50"
            defaultValue={Desc}
          />
          <br></br>
          <br></br>
          <div className="button4">
            <button className="updateBook">
              <Link to={"/adminView"}>Update</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default UpdateBook;
