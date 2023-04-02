import React from "react";
const Rq = (props) => {
  return (
    <div className="card">
      <div className="cont">
        <div className="readers-data">
          <div className="reader-name">
            <p>Name: {props.readername}</p>
          </div>
          <div className="book-name">
            <p>Book: {props.bookname}</p>
          </div>
        </div>
        
        <div className="choice">
          <button className="acc">Accept</button>
          <button className="dec">Decline</button>
        </div>
      </div>
    </div>
  );
};

export default Rq;
