import { Route, Routes } from "react-router-dom";
import { HomeView } from "./views/HomeView/HomeView";
import { ResultsView } from "./views/ResultsView/ResultsView";

function App() {
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
