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
          <Route path="/contacts">
            <ContactsMain />
          </Route>
          <Route path="/notes">
            <NotesApp />
          </Route>
          <Route path="/">
            <MainApp />
          </Route>
        </Switch>
    </Router>
);

export default MainRoutes;