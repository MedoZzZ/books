import React from "react";
const History = (props)=>{
    return(
            <div className="card">
                <div className="cont">
                    <div className="reader-name">
                        <p>Name: {props.readername}</p>
                    </div>
                    <div className="book-name">
                        <p>Book: {props.bookname}</p>
                    </div>
                    <div className="state">
                        <p>State: {props.state}</p>
                    </div>
                </div>
            </div>
    )
}

export default History;