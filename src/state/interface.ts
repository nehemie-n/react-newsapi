export interface Article {
  source: {
    id: null;
    name: "CBS Sports";
  };
  author: "David Cobb";
  title: "Georgia vs. LSU score: Live updates, college football scores, 2022 SEC Championship Game coverage - CBS Sports";
  description: "The reigning national champions added an SEC championship to their incredible run across the last two seasons";
  url: "https://www.cbssports.com/college-football/news/georgia-vs-lsu-score-takeaways-dawgs-lock-up-no-1-seed-in-playoff-capture-first-sec-title-since-2017/live/";
  urlToImage: "https://sportshub.cbsistatic.com/i/r/2022/12/04/af7367f9-340b-4d1d-b381-6ae6fc679c17/thumbnail/1200x675/3f701ef140b84978d752a3e916b1030b/getty-stetson-bennett-georgia-1.jpg";
  publishedAt: "2022-12-04T00:30:00Z";
  content: "ATLANTA -- No. 1 Georgia made its case to remain atop the College Football Playoff Rankings as the Bulldogs crushed No. 14 LSU 50-30 in the 2022 SEC Championship Game. The Dawgs improved to 13-0 for … [+1552 chars]";
}

export interface RecentNews {
  status: "ok";
  news: Article[];
}

export type Trending = Article[];