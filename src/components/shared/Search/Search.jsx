import React, { useContext } from "react";
import "./Search.scss";
import { useLocation } from "react-router-dom";


function Search({ onChangeP, valueP, onClickP }) {
  const location = useLocation();
  const hideSearch = location.pathname === '/mydrink' || location.pathname.startsWith('/drinklist/details/');

  return (
    <div className="header-search">
      {!hideSearch && (
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
