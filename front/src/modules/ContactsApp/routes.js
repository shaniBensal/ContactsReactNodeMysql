import React from "react";
import { useRouteMatch, Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Contacts from "./containers/Contacts/ContactsApp";
import ContactDetails from "./containers/ContactDetails/ContactDetails.js";
import ContactEdit from "./containers/ContactEdit/ContactEdit.js";

export default function ContactRoutes() {
  let match = useRouteMatch();
  return (
    <Router>
      <Switch>
        <Route exact path={`${match.path}`}>
          <Contacts />
        </Route>
        <Route exact path={`${match.path}/contact/:id`}>
          <ContactDetails />
        </Route>
        <Route exact path={`${match.path}/edit/:id`}>
          <ContactEdit />
        </Route>
      </Switch>
    </Router>
  );
}
