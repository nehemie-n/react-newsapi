import classNames from "classnames";
import "./AppPill.scss";

interface Props {
  children?: any;
  size?: "md" | "sm" | "lg";
  shape?: "round" | "circle";
  type?: "default" | "primary";
  ghost?: boolean
}

export function AppPill({
  children,
  shape = "round",
  type = "default",
  size = "md",
  ghost = false,
}: Props) {
  const classes = classNames({
    AppPill: true,
    AppPill_Lg: size == "lg",
    AppPill_Sm: size == "sm",
    AppPill_Md: size == "md",
    // Shape
    AppPill_Round: shape == "round",
    AppPill_Circle: shape == "circle",
    // Colors
    AppPill_Primary: type == "primary",
    AppPill_Default: type == "default",
    AppPill_Ghost: ghost,
  });

  return (
    <button type="button" className={classes}>
      {children}
    </button>
  );
}
