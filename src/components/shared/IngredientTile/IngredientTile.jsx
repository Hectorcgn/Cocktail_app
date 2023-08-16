import style from "./IngredientTile.module.scss";
import { Link } from "react-router-dom";

export const IngredientTile = ({ name, linkName, onClickP }) => {
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
    <Link
      onClick={onClickP}
      className={style.link}
      to={`/drinklist/${linkName}`}
    >
      <article
        style={{ backgroundColor: randomColor }}
        className={style.container}
      >
        <h1>{name}</h1>
      </article>
    </Link>
  );
};
