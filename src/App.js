import React, { useEffect } from "react";
import { loadGames } from "./actions/gamesAction";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";

//Components and Pages
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyle";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav />
      <GlobalStyles />
      <Route path={["/game/:id", "/"]} exact component={Home} />
    </div>
  );
}

export default App;
