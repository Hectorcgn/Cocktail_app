import React, { useContext } from "react";
import "./Search.scss";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Search({ onChangeP, valueP, onClickP }) {
  const lodation = useLocation();
  return (
    <div className="header-search">
      {location.pathname !== '/mydrink' && (
      <div>
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

      )}
    </div>
  );
}

export default Search;
