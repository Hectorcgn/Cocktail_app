import React, { useContext } from "react";
import "./Search.scss";
import { Link } from "react-router-dom";
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
      <Link to={"drinklist/details/random"}>
        <button>Random Drink</button>
      </Link>
      )}
    </div>
  );
}

export default Search;
