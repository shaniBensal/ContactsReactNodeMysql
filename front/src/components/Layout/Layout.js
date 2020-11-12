import React from "react";
import Navbar from "../nav-bar/NavBar";

const layout = (props) => (
  <section>
    <header>
      <Navbar />
    </header>
    <main className="pt-3">{props.children}</main>
  </section>
);
export default layout;
