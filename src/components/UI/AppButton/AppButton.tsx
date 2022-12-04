import classNames from "classnames";
import "./AppButton.scss";

interface Props {
  children?: any;
  size?: "md" | "sm" | "lg";
  shape?: "round" | "circle";
  type?: "default" | "primary";
}

export function AppButton({
  children,
  shape = "round",
  type = "default",
  size = "md",
}: Props) {
  const classes = classNames({
    AppBtn: true,
    AppBtn_Lg: size == "lg",
    AppBtn_Sm: size == "sm",
    AppBtn_Md: size == "md",
    // Shape
    AppBtn_Round: shape == "round",
    AppBtn_Circle: shape == "circle",
    // Colors
    AppBtn_Primary: type == "primary",
    AppBtn_Default: type == "default",
  });

  return (
    <button type="button" className={classes}>
      {children}
    </button>
  );
}
