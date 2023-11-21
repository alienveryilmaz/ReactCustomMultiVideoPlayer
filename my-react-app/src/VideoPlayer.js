import React, { useState } from "react";
import ReactPlayer from "react-player";

const MultiVideoPlayer = ({ videoUrls, coverPhotos }) => {
  const [playing, setPlaying] = useState(Array(videoUrls.length).fill(false));

  const handlePlay = (index) => {
    const newPlayingState = [...playing];
    newPlayingState[index] = true;
    setPlaying(newPlayingState);
  };

  const videoWidth = "500px";
  const videoHeight = "300px";

  return (
    <div className="multi-video-player">
      {videoUrls.map((url, index) => (
        <div
          key={index}
          className="video-player-wrapper"
          onClick={() => handlePlay(index)}
          style={{ width: videoWidth, height: videoHeight }}
        >
          {!playing[index] ? (
            <img
              src={coverPhotos[index]}
              alt={`Cover for video ${index + 1}`}
              style={{ width: "100%", height: "100%" }}
            />
          ) : (
            <ReactPlayer
              url={url}
              controls={true}
              width={videoWidth}
              height={videoHeight}
              playing={true}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default MultiVideoPlayer;
