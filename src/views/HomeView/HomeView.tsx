import { useEffect, useState } from "react";
import { AppCategories } from "../../components/AppCategories";
import { AppSpace } from "../../components/AppSpace";
import {
  AppMainLayout,
  AppScreen
} from "../../components/MainLayout/AppMainLayout";
import { AppSearch } from "../../components/UI/AppSearch/AppSearch";
import { random } from "../../random";
import { fetchTrending, resetQuery, useAppDispatch } from "../../store";
import "./HomeView.scss";
import { HomeViewResults } from "./HomeViewResults";

export function HomeView() {
  console.log(random + " home");

  const [showSearch, setShowSearch] = useState<boolean>(false);

  // search state
  const dispatch = useAppDispatch();

  // on mount we fetch trending
  // and reset search
  // on page render
  useEffect(() => {
    console.log("Rendered Home ", random());
    dispatch(resetQuery()); // you can't change state directly in render
    dispatch(fetchTrending());
  }, []);

  // document title @todo: useTitle
  document.title = `#What's Up? Home of news! ${random}`;

  // on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 450) {
      setShowSearch(true);
    }
    if (window.scrollY < 440) {
      setShowSearch(false);
    }
  });

  return (
    <AppMainLayout showSearch={showSearch}>
      {/*  */}
      <AppScreen>
        <div className="HomeView_Hero">
          {/*  */}
          <div className="HomeView_Hero_T">
            <AppSpace size={5} direction="col">
              <h3>Heeey, do you know</h3>
              <h1>#What's Up?</h1>
              {/* <h1>{query}</h1> */}
            </AppSpace>
          </div>
          {/*  */}
          <div className="mx-auto max-w-screen-lg">
            <AppCategories />
          </div>
          {/*  */}
          <div className="py-6">
            {}
            <AppSearch></AppSearch>
          </div>
          {/*  */}
        </div>
        {/*  */}
        <HomeViewResults />
        {/*  */}
      </AppScreen>
    </AppMainLayout>
  );
}
