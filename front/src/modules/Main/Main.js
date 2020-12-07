import React, { Component } from "react";
import AppCard from "./components/AppCard/AppCard";
import appList from "../../data/AppList";

export default class MainApp extends Component {
  state = {
    user: null,
    apps: appList,
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row pb-3">
            <div className="w-100 justify-content-center d-flex align-items-center">
              <h3>All you need to orgnize in one place!</h3>
            </div>
          </div>
          <div className="row d-flex align-items-center justify-content-center">
            <ul className="d-flex align-items-center pl-0 justify-content-around w-100">
              {this.state.apps.map((app) => (
                <li key={app.id} className="list-item pr-2">
                  <AppCard card={app}></AppCard>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
