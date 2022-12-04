import { AppPill } from "./UI/AppPill/AppPill";

export const AppCategories = () => {
  const categories = ["Politics", "Entertainment", "Education", "History"];

  return (
    <div className="text-center flex justify-center gap-4">
      <AppPill type="primary">#Al Categories</AppPill>
      {categories.map((cate) => {
        return <AppPill key={cate}>#{cate}</AppPill>;
      })}
      <AppPill ghost type="primary">
        +12 Categories
      </AppPill>
    </div>
  );
};
