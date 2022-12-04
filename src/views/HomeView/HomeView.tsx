import { AppCategories } from "../../components/AppCategories";
import {
  AppMainLayout,
  AppScreen,
} from "../../components/MainLayout/AppMainLayout";
import { AppSearch } from "../../components/UI/AppSearch/AppSearch";
import { AppSpace } from "../../components/AppSpace";
import "./HomeView.scss";
import { useEffect, useState } from "react";
import { Article, fetchTrending } from "../../state";
import { SimpleNewsCard } from "../../components/Cards/SimpleNewsCard/SimpleNewsCard";

export function HomeView() {
  const [state, setState] = useState<any>();
  useEffect(() => {
    setState(fetchTrending());
  });

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
        {/*  */}
      </AppScreen>
    </AppMainLayout>
  );
}
