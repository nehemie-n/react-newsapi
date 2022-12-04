import classnames from "classnames";
import { AiOutlineLoading } from "react-icons/ai";

import "./AppSpinner.scss";

interface Props {
  size?: "lg" | "md" | "sm";
  children?: any;
  className?: string;
}
export const AppSpinner = ({ size = "md", children, className }: Props) => {
  let classes = classnames({
    AppSpinner: true,
    AppSpinner_sm: size == "sm",
    AppSpinner_md: size == "md",
    AppSpinner_lg: size == "lg",
  });
  classes = classnames(classes, className); // append the custom classes

  const iconSize = () => {
    switch (size) {
      case "lg":
        return 56;
      case "md":
        return 40;
      case "sm":
        return 25;
    }
  };
  return (
    <div className={classes}>
      <div className="AppSpinner_H">
        <AiOutlineLoading className="animate-spin " size={iconSize()} />
        {/* <CgSpinner className="animate-spin " size={50} /> */}
      </div>
      {children ? <div className="AppSpinner_T">{children}</div> : null}
    </div>
  );
};
