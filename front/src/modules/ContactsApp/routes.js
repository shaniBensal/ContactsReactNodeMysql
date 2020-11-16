import React from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import Contacts from './containers/Contacts/ContactsApp';
import ContactDetails from './containers/ContactDetails/ContactDetails.js';
import ContactEdit from './containers/ContactEdit/ContactEdit.js';

export default function ContactRoutes() {
    let match = useRouteMatch();
    return (
      <Switch>
        <Route path={`${match.path}`} component={Contacts}></Route>
        <Route path={`${match.path}/contact/:id`} component={ContactDetails}></Route>
        <Route path={`${match.path}/contact/edit/:id`} component={ContactEdit}></Route>
      </Switch>
    );
  }