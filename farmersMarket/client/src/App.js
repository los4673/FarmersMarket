import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard"
import SalesPage from "./pages/SalesPage";
import NoMatch from "./pages/NoMatch";
import SignIn from "./pages/SignIn"
import Nav from "./components/Nav";
import Footer from "./components/Footer";


const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/farmers" component={Dashboard} />
        <Route exact path="/farmers/:id" component={SalesPage} />
        <Route exact path="/SignIn" compontent={SignIn}/>
        <Route component={NoMatch} />
      </Switch>
      <Footer></Footer>
    </div>
  </Router>
);

export default App;
