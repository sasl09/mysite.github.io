import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import MyPic from "./MePicPortfolio.jfif";

class LandingPage extends Component {
  render() {
    return(
      <div style={{width: "100", margin: "auto"}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src={MyPic}
            alt ="MyPic"
            className="my-pic"
            />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

            <hr/>

          <p>HTML/CSS | JavaScript | Python | React |</p>

        <div className="social-links">

          {/* linkedin icon*/}
          <a href="http://linkedin.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* facebook icon*/}
          <a href="http://facebook.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-facebook-square" aria-hidden="true" />
          </a>

          {/* github icon*/}
          <a href="http://github.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* youtube icon*/}
          <a href="http://youtube.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-youtube-square" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default LandingPage;
