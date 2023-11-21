import React from "react";
import MultiVideoPlayer from "./VideoPlayer";
import "./styles.css";

const videoUrls = [
  "https://www.youtube.com/watch?v=mHg6K2nipGs",
  "https://www.youtube.com/watch?v=YL1Nv3zXFSI",
  "https://www.youtube.com/watch?v=9PULeoioHck",
];

const coverPhotos = [
  "https://i.pinimg.com/originals/3f/42/91/3f4291b362b46d4147ec2c147d47a6af.png",
  "https://i0.wp.com/animegalaxyofficial.com/wp-content/uploads/2023/08/jujutsu-kaisen-season-2-min.jpg?resize=750%2C422&ssl=1",
  "https://44.media.tumblr.com/e70dd98f7737d2a89556d381fd075e13/a525963bbcc73acf-f8/s540x810_f1/7e2798419b4219259fd309ecf8abdbeffcd21623.gif",
];

const App = () => {
  return (
    <div className="app">
      <div className="header">
        <h1>React Multi-Video Player Example</h1>
      </div>
      <div className="VideoPlayer">
        <MultiVideoPlayer videoUrls={videoUrls} coverPhotos={coverPhotos} />
      </div>
    </div>
  );
};

export default App;
