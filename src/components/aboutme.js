import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import "../App.css";


class AboutMe extends Component {
  render() {
    return(
      <div className="container-video">
        <h1 className="title-video">Here's a video about me</h1>
        <div className="video">
          <ReactPlayer width="800px" height= "300px" url="https://www.youtube.com/watch?v=U6vhnTahBKA" controls />
        </div>
      </div>
    )
  }
}

export default AboutMe;
