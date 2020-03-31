import React from "react";
import { Switch, Route, IndexRedirect } from "react-router";
import LandingPage from "./landingpage";
import AboutMe from "./aboutme";
import Contact from "./contact";
import Projects from "./projects";
import Resume from "./resume";


const Main = () => (
  <Switch>
    <IndexRedirect to="/landingpage" />
    <Route path="/landingpage" component={LandingPage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
  </Switch>
)

export default Main;
