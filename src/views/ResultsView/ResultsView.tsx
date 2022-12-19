import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Article } from "../../api";
import { AppCategories } from "../../components/AppCategories";
import { SimpleNewsCard } from "../../components/Cards/SimpleNewsCard/SimpleNewsCard";
import {
  AppMainLayout,
  AppScreen,
} from "../../components/MainLayout/AppMainLayout";
import { AppSpinner } from "../../components/UI/AppSpinner/AppSpinner";
import {
  resetSearchNews,
  searchNews,
  setQuery,
  useAppDispatch,
  useAppSelector,
} from "../../store";
import { NotFoundView } from "../NotFoundView";
import "./ResultsView.scss";

const QUERY_PARAM_NAME = "q";

export function ResultsView() {
  // if the route contains the q in the query we immediately alter the query to match
  const [queryParams, setQueryParams] = useSearchParams();
  const queryParam = queryParams.get(QUERY_PARAM_NAME);

  // store
  const dispatch = useAppDispatch();
  const { query } = useAppSelector((state) => state.searchInput);
  const { totalResults, news, loading } = useAppSelector(
    (state) => state.searchNews
  );

  // on mount we first clear
  // on mount
  useEffect(() => {
    dispatch(resetSearchNews());
    // initial state and route
    if (queryParam) {
      dispatch(setQuery(queryParam));
    }
    // fetch
    if (query) dispatch(searchNews(query));
  }, []);

  // anytime state query changes we change routequery
  // and fetch news
  useEffect(() => {
    if (query && query.length > 0) {
      setQueryParams({ [QUERY_PARAM_NAME]: query });
      dispatch(searchNews(query));
    }
  }, [query]);

  const showNotFound =
    loading == false && (news == undefined || news.length == 0);

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
            {Array.isArray(news) ? (
              <div className="grid grid-cols-5 gap-6">
                {news.map((article: Article, index) => {
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
