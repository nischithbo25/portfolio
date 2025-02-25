import React from "react";
import Section1 from "./Section1";
import NavBar from "./navBar";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";

function Main() {
  return (
    <div data-bs-spy="scroll" data-bs-target="#nav-bar">
      <NavBar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </div>
  );
}

export default Main;
