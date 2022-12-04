import classNames from "classnames";

interface Props {
  children: any;
  size?: number;
  direction?: "row" | "col";
}
export const AppSpace = ({ direction = "row", children, size = 4 }: Props) => {
  const classes = classNames({
    flex: true,
    "flex-row": direction == "row",
    "flex-col": direction == "col",
    "gap-4": size == 4,
    "gap-5": size == 5,
    "gap-6": size == 6,
    "gap-7": size == 7,
    "gap-8": size == 8,
    "gap-9": size == 9,
    "gap-10": size == 10,
    "gap-12": size == 12,
    "gap-16": size == 16,
  });

  return <div className={classes}>{children}</div>;
};
