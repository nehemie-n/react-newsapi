export interface Article {
  source: {
    id: null | string;
    name: string;
  };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface RecentNews {
  status: "ok";
  articles: Article[];
}

export type Trending = Article[];
