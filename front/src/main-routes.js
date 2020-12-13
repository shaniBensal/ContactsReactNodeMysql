import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainApp from "./modules/Main/Main";
import ContactsMain from "./modules/ContactsApp/Contacts";
import NotesApp from "./modules/NotesApp/NotesApp";

const MainRoutes = () => (
  <Switch>
    <Route path="/contacts">
      <ContactsMain />
    </Route>
    <Route exact path="/notes">
      <NotesApp />
    </Route>
    <Route exact path="/">
      <MainApp />
    </Route>
  </Switch>
);

export default MainRoutes;
