import style from "./AutoGrid.module.scss";

export const AutoGrid = ({ children }) => {
  return <main className={style.grid}>{children}</main>;
};
