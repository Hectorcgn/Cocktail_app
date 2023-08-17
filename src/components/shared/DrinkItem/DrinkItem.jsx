import React from "react";
import "./DrinkItem.scss";
import { Link } from "react-router-dom";

function DrinkItem(props) {
  return (
    <Link to={`/drinklist/details/${props.id}`}>
      <li>
        <h3>{props.name}</h3>
        <img src={props.img} alt="coctail.img" />
      </li>
    </Link>
  );
}

export default DrinkItem;
