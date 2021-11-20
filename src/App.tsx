import React from "react";
import Layout from "./components/Layout";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Persons from "./pages/Persons";
import Blurb from "./pages/Blurb";
import Person from "./pages/Person";
import AddPersonPage from "./pages/AddPerson";
import Test from "./Test";

function App() {
  return (
    <Router>
      <div>
        <Layout>
          <Switch>
            <Route path="/persons" exact>
              <Persons />
            </Route>
            <Route path="/persons/view/:id">
              <Person />
            </Route>
            <Route path="/persons/new">
              <AddPersonPage />
            </Route>
            <Route path="/blurb">
              <Blurb />
            </Route>


            <Route path="/test">
              <Test />
            </Route>
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
