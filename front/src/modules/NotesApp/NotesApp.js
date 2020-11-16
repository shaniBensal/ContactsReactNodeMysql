import React from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import Notes from './Notes/Notes';

export default function NotesApp() {
  let match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.path}`} component={Notes}></Route>
    </Switch>
  );
}