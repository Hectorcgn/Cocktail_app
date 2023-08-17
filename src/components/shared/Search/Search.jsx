import React, { useContext } from "react";
import "./Search.scss";
import { Link } from "react-router-dom";

function Search({ onChangeP, valueP, onClickP }) {
  return (
    <div className="header-search">
      <input
        onChange={onChangeP}
        value={valueP}
        type="text"
        placeholder="type something"
      />
      <Link to={"drinklist/details/random"}>
        <button>Random Drink</button>
      </Link>
    </div>
  );
}

export default Search;
