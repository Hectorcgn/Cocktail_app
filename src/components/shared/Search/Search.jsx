import React, { useContext } from "react";
import "./Search.scss";
import { useLocation } from "react-router-dom";


function Search({ onChangeP, valueP, onClickP }) {
  const lodation = useLocation();
  return (
    <div className="header-search">
      {location.pathname !== '/mydrink' && (
      <input
        onChange={onChangeP}
        value={valueP}
        type="text"
        placeholder="type something"
      />
      )}
    
    </div>
  );
}

export default Search;
