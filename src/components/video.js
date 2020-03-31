import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import "../App.css";


class Video extends Component() {
  render(){
    return (
      <div className="video">
        <ReactPlayer url="https://www.youtube.com/watch?v=U6vhnTahBKA" playing controls />
      </div>
    );
  }
}

export default Video;
