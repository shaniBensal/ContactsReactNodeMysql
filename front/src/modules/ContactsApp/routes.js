import React from "react";
import {
  useRouteMatch,
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import Contacts from "./containers/Contacts/ContactsApp";
import ContactDetails from "./containers/ContactDetails/ContactDetails.js";
import ContactEdit from "./containers/ContactEdit/ContactEdit.js";

export default function ContactRoutes() {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <Contacts />
      </Route>
      <Route exact path={`${path}/contact/:id`}>
        <ContactDetails />
      </Route>
      <Route exact path={`${path}/edit/:id`}>
        <ContactEdit />
      </Route>
      <Route exact path={`${path}/new`}>
        <ContactEdit />
      </Route>
    </Switch>
  );
}
