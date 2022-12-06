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
import { NotFoundView } from "../NotFoundView";
import "./ResultsView.scss";

export function ResultsView() {
  const [state, setState] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  // anytime props change we fetch news
  useEffect(() => {
    // setState(fetchTrending());
  });

  const showNotFound =
    loading == false && (state == undefined || state.length == 0);

  return (
    <AppMainLayout>
      {/*  */}
      <AppScreen>
        <div className="grid grid-cols-12">
          {/*  */}
          <div className="col-span-12 pt-6 pb-12">
            <div className="sticky top-24">
              <AppCategories size="sm" direction="horizontal" />
            </div>
          </div>
          {/*  */}
          <div className="col-span-12">
            {Array.isArray(state) ? (
              <div className="grid grid-cols-5 gap-6">
                {state.map((article: Article, index) => {
                  return (
                    <SimpleNewsCard
                      key={article.url + index}
                      article={article}
                    ></SimpleNewsCard>
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>
        {/* Simple news results */}

        {/* Show loader */}
        {loading ? (
          <AppSpinner className="py-10" size="lg">
            loading ...
          </AppSpinner>
        ) : null}

        {/* Not Found */}
        {showNotFound ? <NotFoundView></NotFoundView> : null}
      </AppScreen>
    </AppMainLayout>
  );
}
