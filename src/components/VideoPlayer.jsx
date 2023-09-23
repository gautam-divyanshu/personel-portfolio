import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ videoURL }) => {
  return (
    <div className="video-player">
      <ReactPlayer
        url={videoURL}
        width="100%"
        height="100%"
        muted={true} // Mute the video
        controls={true} // Remove controls
        playing={false}
        loop={true}
      />
    </div>
  );
};

export default VideoPlayer;
