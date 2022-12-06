import classNames from "classnames";
import { AppPill } from "./UI/AppPill/AppPill";
interface Props {
  direction?: "vertical" | "horizontal";
  size?: "md" | "sm" | "lg";
}
export const AppCategories = ({
  direction = "horizontal",
  size = "md",
}: Props) => {
  const categories = [
    "Politics",
    "Entertainment",
    "Education",
    "Sports",
    "History",
    "Technology",
    "UI/UX Designing",
  ];

  const classes = classNames({
    "text-center flex gap-4": true,
    "justify-center flex-row flex-wrap": direction == "horizontal",
    "justify-center flex-col items-start": direction == "vertical",
  });

  return (
    <div className={classes}>
      <span key="all">
        <AppPill size={size} type="primary">
          #All Categories
        </AppPill>
      </span>
      {categories.map((cate) => {
        return (
          <span key={cate}>
            <AppPill size={size}>#{cate}</AppPill>
          </span>
        );
      })}
      <span>
        <AppPill size={size} ghost type="primary">
          +12 Categories
        </AppPill>
      </span>
    </div>
  );
};
