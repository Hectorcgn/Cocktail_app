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
    
    </div>
  );
}

export default Search;
