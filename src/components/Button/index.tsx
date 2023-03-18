import style from "./Button.module.scss";

interface IProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

export const ButtonR = ({ children, type = "button", onClick }: IProps) => (
  <button onClick={onClick} type={type} className={style.botao}>
    {children}
  </button>
);
