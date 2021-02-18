import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./page/HomePage";
import PostDetails from "./page/PostDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/post/:id" component={PostDetails} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
