import { useEffect, useState } from "react";
import { AppCategories } from "../../components/AppCategories";
import { AppSpace } from "../../components/AppSpace";
import { SimpleNewsCard } from "../../components/Cards/SimpleNewsCard/SimpleNewsCard";
import {
  AppMainLayout,
  AppScreen,
} from "../../components/MainLayout/AppMainLayout";
import { AppSearch } from "../../components/UI/AppSearch/AppSearch";
import { AppSpinner } from "../../components/UI/AppSpinner/AppSpinner";
import { Article, fetchTrending } from "../../state";
import "./HomeView.scss";

export function HomeView() {
  const [state, setState] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);

  // anytime props change we fetch news
  useEffect(() => {
    setState(fetchTrending());
  });

  // document title
  document.title = "#What's Up? Home of news!";

  return (
    <AppMainLayout>
      {/*  */}
      <AppScreen>
        <div className="HomeView_Hero">
          {/*  */}
          <div className="HomeView_Hero_T">
            <AppSpace size={5} direction="col">
              <h3>Heeey, do you know</h3>
              <h1>#What's Up?</h1>
            </AppSpace>
          </div>
          {/*  */}
          <AppCategories />
          {/*  */}
          <div className="py-6">
            <AppSearch></AppSearch>
          </div>
          {/*  */}
        </div>
        {/*  */}
        {/* Simple news results */}
        {Array.isArray(state) ? (
          <div className="grid grid-cols-4 gap-6">
            {state.map((article: Article) => {
              return <SimpleNewsCard article={article}></SimpleNewsCard>;
            })}
          </div>
        ) : null}
        {/* Show loader */}
        {loading ? (
          <AppSpinner className="py-10" size="lg">
            loading ...
          </AppSpinner>
        ) : null}
        {/*  */}
      </AppScreen>
    </AppMainLayout>
  );
}
