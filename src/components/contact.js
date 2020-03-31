import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent} from "react-mdl";
import MyAvatarPic from "./myAvatar.png"

class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Armandus Solís</h2>
            <img
              src={MyAvatarPic}
              alt="My Avatar"
              style={{height: "220px" }}
               />
              <p style={{width: "75%", margin:"auto", paddingTop: "1em"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">

            <List>
              <ListItem>
                <ListItemContent style={{fontSize: "40px", fontFamily: "Anton"}}>
                  <i className="fa fa-phone-square" aria-hidden="true"/>
                  449-123-456
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent style={{fontSize: "40px", fontFamily: "Anton"}}>
                  <i className="fa fa-envelope" aria-hidden="true"/>
                  someone@gmail.com
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent style={{fontSize: "40px", fontFamily: "Anton"}}>
                  <i className="fa fa-skype" aria-hidden="true"/>
                  someSkypeID
                </ListItemContent>
              </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
