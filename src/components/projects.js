import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardText, Button, CardMenu, IconButton } from "react-mdl";

class Projects extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeTab: 0
    };
  }

  toggleCategories() {
    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
        {/*Option 1*/}
        <Card className="card-item" shadow={5} style={{minWidth: "450" , margin: "auto;"}}>
          <CardTitle style={{color:"#fff", height: "176px", background: "url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center/cover"}} >React Project #1</CardTitle>
          <CardText>
            Some description here to fill this section...
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>Codepen</Button>
          </CardActions>
          <CardMenu style={{color: "#fff"}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        {/*Option 2*/}
        <Card className="card-item" shadow={5} style={{minWidth: "450" , margin: "auto;"}}>
          <CardTitle style={{color:"#fff", height: "176px", background: "url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center/cover"}} >React Project #2</CardTitle>
          <CardText>
            Some description here to fill this section...
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>Codepen</Button>
          </CardActions>
          <CardMenu style={{color: "#fff"}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        {/*Option 3*/}
        <Card className="card-item" shadow={5} style={{minWidth: "450" , margin: "auto;"}}>
          <CardTitle style={{color:"#fff", height: "176px", background: "url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center/cover"}} >React Project #3</CardTitle>
          <CardText>
            Some description here to fill this section...
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>Codepen</Button>
          </CardActions>
          <CardMenu style={{color: "#fff"}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        <Card className="card-item" shadow={5} style={{minWidth: "450" , margin: "auto;"}}>
          <CardTitle style={{color:"#fff", height: "176px", background: "url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center/cover"}} >React Project #4</CardTitle>
          <CardText>
            Some description here to fill this section...
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>Codepen</Button>
          </CardActions>
          <CardMenu style={{color: "#fff"}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        <Card className="card-item" shadow={5} style={{minWidth: "450" , margin: "auto;"}}>
          <CardTitle style={{color:"#fff", height: "176px", background: "url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center/cover"}} >React Project #5</CardTitle>
          <CardText>
            Some description here to fill this section...
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>Codepen</Button>
          </CardActions>
          <CardMenu style={{color: "#fff"}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      </div>
      )
    }else if (this.state.activeTab === 1) {
      return(
        <div><h1>This is the HTML/CSS tab</h1></div>
      )
    }else if (this.state.activeTab === 2) {
      return(
        <div><h1>This is the JavaScript tab</h1></div>
      )
    }else if (this.state.activeTab === 3) {
      return(
        <div><h1>This is the Python tab</h1></div>
      )
    }
}



  render() {
    return(
      <div className="category-tabs">
      {/*This first section will be on top and it will contain all our tabs*/}
      {/*The next line has a function that will assign our var "tabId" the index number of the tab user clicks on, and the ripple effect will select it*/}
      {/*Now, remember it's the function above in the constructor the one that'll display specific content for each tab*/}
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab:tabId})} ripple>
          <Tab>React</Tab>
          <Tab>HTML/CSS</Tab>
          <Tab>JavaScript</Tab>
          <Tab>Python</Tab>
        </Tabs>

{/*This grid will contain all the content on each of the above tabs when they're active*/}
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
      </div>
    )
  }
}

export default Projects;
