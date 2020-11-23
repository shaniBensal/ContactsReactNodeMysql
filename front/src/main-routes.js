import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import MainApp from "./modules/Main/Main";
import ContactsMain from "./modules/ContactsApp/Contacts";
import NotesApp from "./modules/NotesApp/NotesApp";

const MainRoutes = () =>(
    <Router>
    <Switch>
          <Route exact path="/contacts">
            <ContactsMain />
          </Route>
          <Route exact path="/notes">
            <NotesApp />
          </Route>
          <Route exact path="/">
            <MainApp />
          </Route>
        </Switch>
    </Router>
);

export default MainRoutes;