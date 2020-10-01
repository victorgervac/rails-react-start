import React from "react";
import NavBar from "./components/navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import ThingsDemo from "./things/ThingsDemo";
import NoMatch from "./components/NoMatch";
import Register from "./components/Register";
function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/ThingsDemo" component={ThingsDemo} />
        <Route component={NoMatch} />
      </Switch>
    </>
  );
}

export default App;
