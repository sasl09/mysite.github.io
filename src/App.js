import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
  render() {


    return (
      <div >
        <Layout fixedHeader>
            <Header style={{background: "linear-gradient(to top, #1CB5E0, #000046)"}} className="header-color" title=<Link className="header-text" to="/">Home</Link>>
                <Navigation>
                    <Link to="/resume">Resume</Link>
                    <Link to="/aboutme">About Me</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact Me</Link>
                </Navigation>
            </Header>
            <Drawer title="Quick Menu">
                <Navigation>
                    <Link to="/resume">Resume</Link>
                    <Link to="/aboutme">About Me</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact Me</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Main />
            </Content>
        </Layout>
    </div>
    );
  }
}

export default App;
