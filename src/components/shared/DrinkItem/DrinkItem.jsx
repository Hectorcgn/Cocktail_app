import React, { useState } from "react";
import "./DrinkItem.scss";
import { Link } from "react-router-dom";

function DrinkItem(props) {
  const [imageUrl, setImageUrl] = useState(props.img)

  const imageAlternative = () => {
    setImageUrl('https://cdn.pixabay.com/photo/2021/02/02/08/38/broken-5973122_1280.jpg')
  }

  return (
    <Link to={`/drinklist/details/${props.id}`}>
      <li>
        <h3>{props.name}</h3>
        <img src={imageUrl} onError={imageAlternative}/>
      </li>
    </Link>
  );
}

export default DrinkItem;
