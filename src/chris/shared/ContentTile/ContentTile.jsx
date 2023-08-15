import style from "./ContentTile.module.scss";

export const ContentTile = ({ category, discription }) => {
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
    <article
      style={{ backgroundColor: randomColor }}
      className={style.container}
    >
      <h1>{category}</h1>
      <p>{discription}</p>
    </article>
  );
};
