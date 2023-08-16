import React, { useContext } from "react";
import "./Search.scss";

function Search({ onChangeP, valueP, onClickP }) {
  return (
    <div className="header-search">
      <input
        onChange={onChangeP}
        value={valueP}
        type="text"
        placeholder="type something"
      />
      <button onClick={onClickP}>Search</button>
    </div>
  );
}

export default Search;
