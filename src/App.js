import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false, //This is where I am having problems
      isDesktop2 : false
    };

    this.updateScreenSize = this.updateScreenSize.bind(this);
  }

  componentDidMount() {
    this.updateScreenSize();
    window.addEventListener("resize", this.updateScreenSize);
  }


  componentWillUnmount() {
    window.removeEventListener("resize", this.updateScreenSize);
  }


  updateScreenSize() {
    this.setState({ isDesktop: window.innerWidth > 1024 });
    this.setState({ isDesktop2: window.innerWidth > 525 });
  }


  render() {
    const isDesktop = this.state.isDesktop;
    const isDesktop2 = this.state.isDesktop2;

    return (
      <div>
        {isDesktop ? (
          <div >
            <Layout>
                <Header style={{background: "linear-gradient(to top, #1CB5E0, #000046)"}} className="header-color" title=<Link className="header-text" to="/">Home</Link> scroll>
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
      ) : isDesktop2 ? (
          <div >
            <Layout fixedHeader>
                <Header style={{background: "linear-gradient(to top, #1CB5E0, #000046)"}} className="header-color" title=<Link className="header-text" to="/">Home</Link> scroll>
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
      ) : (
          <div >
            <Layout >
                <Header style={{background: "linear-gradient(to top, #1CB5E0, #000046)"}} className="header-color" title=<Link className="header-text" to="/">Home</Link> scroll>
                    <Navigation>
                        <Link to="/resume">Resume</Link>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact Me</Link>
                    </Navigation>
                </Header>
                <Drawer style={{background: "#dac934", color: "black"}}  title="Quick Menu">
                    <Navigation>
                        <Link className="header-text" style={{color: "blue", fontWeight: "bold"}} to="/">Home</Link>
                        <Link style={{color: "blue", fontWeight: "bold"}} to="/resume">Resume</Link>
                        <Link style={{color: "blue", fontWeight: "bold"}} to="/aboutme">About Me</Link>
                        <Link style={{color: "blue", fontWeight: "bold"}} to="/projects">Projects</Link>
                        <Link style={{color: "blue", fontWeight: "bold"}} to="/contact">Contact Me</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />
                    <Main />
                </Content>
            </Layout>
        </div>
      )}
      </div>
    );
  }
}



export default App;
