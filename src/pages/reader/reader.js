import React from "react";
import ProductCard from "../product/components/productCard";
import "../product/style/reader.css";
import { Data } from "../../core/data/books";
import Empty from "../product/components/empty";
import { useState } from "react";
const Reader = () => {
  const items = Data;
  const [searchTerm, setSearchTerm] = useState("");
  const filteredCards = Data.filter((card) =>
    card.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayMovies = () => {
    return filteredCards.map((item) => {
      return (
        <ProductCard
          key={item.id}
          id={item.id}
          name={item.name}
          auther={item.auther}
          desc={item.description}
          field={item.field}
          publicationDate={item.publicationDate}
        />
      );
    });
  };
  return (
    <div>
      <div className="box7">
        <form name="search">
          <input
            type="text"
            className="input7"
            name="txt"
            onmouseout="this.value = ''; this.blur();"
            value={searchTerm}
            placeholder="Search Here...."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
      </div>
      <div className="product-list">
        {items.length > 0 ? displayMovies() : <Empty />}
      </div>
    </div>
  );
};
export default Reader;
