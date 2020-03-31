import React, { Component } from "react";
import { Grid, Cell} from "react-mdl";
import MyAvatarPic from "./myAvatar.png";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return(
      <div style={{background: "#d4d47194"}}>
        <Grid style={{marginLeft: "1em", background: "#e0e0e0"}}>
          <Cell col={4}>
            <div style={{textAlign: "center"}}>
              <img
                src={MyAvatarPic}
                alt="My Avatar Pic"
                style={{height: "250px", marginTop: "2em"}}
              />
            </div>
            <h2 style={{paddingTop: "1em"}}>Armandus</h2>
            <h4 style={{color: "grey"}}>Programmer</h4>
            <hr style={{borderTop: "3px solid #833fb2", width: "50%"}}/>
            <p style={{textIndent: "2em"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <hr style={{borderTop: "3px solid #833fb2", width: "50%"}}/>
            <h5>Address</h5>
            <p style={{textIndent: "2em"}}>123 Nash Ln. 12345</p>
            <h5>Phone</h5>
            <p style={{textIndent: "2em"}}>449-123-456</p>
            <h5>E-mail</h5>
            <p style={{textIndent: "2em"}}>some-email@gmail.com</p>
            <h5>Web</h5>
            <p style={{textIndent: "2em"}}>mywebsite.com</p>
            <hr style={{borderTop: "3px solid #833fb2", width: "50%"}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear ={2000}
              endYear={2003}
              schoolName={"High-school"}
              schoolDescription={"Here's where I got my GED."}
            />

              <Education
                startYear ={2004}
                endYear={2008}
                schoolName={"La Concordia"}
                schoolDescription={"Here's where I got my Degree."}
              />

              <hr style={{borderTop: "3px solid #e22947"}}/>

            <h2>Experience</h2>
            <Experience
              startYear ={2009}
              endYear={2012}
              jobName={"McDonalds"}
              jobDescription={"This was my first job."}
            />

              <Experience
                startYear ={2013}
                endYear={2019}
                jobName={"Facebook"}
                jobDescription={"This is my dream job."}
              />

              <hr style={{borderTop: "3px solid #e22947"}}/>

            <h2>Skills</h2>
            <Skills
            skill={"Python"}
            progress={80}
            />

              <Skills
              skill={"React"}
              progress={50}
              />

                <Skills
                skill={"HTML/CSS"}
                progress={60}
                />

                  <Skills
                  skill={"JavaScript"}
                  progress={60}
                  />

          </Cell>
        </Grid>

      </div>
    )
  }
}

export default Resume;
