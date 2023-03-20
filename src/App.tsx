// I M P O R T S
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navigation/NavBar";
import Home from "./components/Home/Home";
import MenuMobile from "./components/Navigation/MenuMobile";
import SearchResults from "./components/Search/SearchResults";
import TrendingResults from "./components/Trending/TrendingResults";
import RandomResults from "./components/Random/RandomResults";
import Favorites from "./components/Favorites/Favorites";
import NotFound from "./components/404/NotFound";
import { TransitionProvider } from "./components/PageTransition/TransitionContext";
import TransitionComponent from "./components/PageTransition/Transitions";

function App() {
  return (
    <div className="min-h-screen px-2 pb-2 bg-favly-light sm:px-4 sm:pb-4 lg:px-12 xl:px-[10vw]">
      <NavBar />
      <MenuMobile />
      <TransitionProvider>
        <Routes>
          <Route
            path="/"
            element={
              <TransitionComponent>
                <Home />
              </TransitionComponent>
            }
          />
          <Route
            path="/search"
            element={
              <TransitionComponent>
                <SearchResults />
              </TransitionComponent>
            }
          />
          <Route
            path="/trending"
            element={
              <TransitionComponent>
                <TrendingResults />
              </TransitionComponent>
            }
          />
          <Route
            path="/random"
            element={
              <TransitionComponent>
                <RandomResults />
              </TransitionComponent>
            }
          />
          <Route
            path="/favorites"
            element={
              <TransitionComponent>
                <Favorites />
              </TransitionComponent>
            }
          />
          <Route
            path="*"
            element={
              <TransitionComponent>
                <NotFound />
              </TransitionComponent>
            }
          />
        </Routes>
      </TransitionProvider>
    </div>
  );
}

export default App;
