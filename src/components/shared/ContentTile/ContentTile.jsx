import style from "./ContentTile.module.scss";
import { Link } from "react-router-dom";

export const ContentTile = ({ name, linkName }) => {
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  }

  const randomColor = getRandomColor();
  return (
    <Link to={`/drinklist/${linkName}`}>
      <article
        style={{ backgroundColor: randomColor }}
        className={style.container}
      >
        <h1>{name}</h1>
      </article>
    </Link>
  );
};
