import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { random } from "./random";
import { loadLanguage, useAppDispatch, useAppSelector } from "./store";
import { HomeView } from "./views/HomeView/HomeView";
import { ResultsView } from "./views/ResultsView/ResultsView";

/**
 *
 * @returns
 */
function App() {
  console.log(random + " app");
  /**
   * State listening
   */
  const language = useAppSelector((state) => state.language);
  const dispatch = useAppDispatch();
  /**
   * On mount load language
   */
  useEffect(() => {
    // dispatch(loadLanguage());
  }, []);
  /**
   * For every language change we reload the app
   */
  useEffect(() => {
    console.log("Changed language ", language);
  }, [language]);
  /**
   * Render
   */
  return (
    <div className="App">
      <Routes>
        <Route index element={<HomeView />} />
        <Route path="" element={<HomeView />} />
        <Route path="search" element={<ResultsView />} />
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </div>
  );
}

export default App;
