import { useState } from "react";
import { Article } from "../../api";
import { SimpleNewsCard } from "../../components/Cards/SimpleNewsCard/SimpleNewsCard";
import { AppSpinner } from "../../components/UI/AppSpinner/AppSpinner";
import { useAppSelector } from "../../store";

export function HomeViewResults() {
  const { loading, news } = useAppSelector((state) => state.trendingNews);

  console.log("Loaded Results ");

  return (
    <div>
      {/*  */}
      {/* Simple news results */}
      {Array.isArray(news) && news.length > 0 ? (
        <div className="grid grid-cols-5 gap-6">
          {news.map((article: Article, index) => {
            return (
              <SimpleNewsCard
                key={article.url}
                article={article}
              ></SimpleNewsCard>
            );
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
    </div>
  );
}
