import style from "./IngredientTile.module.scss";
import { Link } from "react-router-dom";

export const IngredientTile = ({ name, linkName, onClickP }) => {
  return (
    <Link className={style.link} to={`/drinklist/${linkName}`}>
      <article className={style.button19}>
        <h1>{name}</h1>
      </article>
    </Link>
  );
};
