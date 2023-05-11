import "./styles.css";
import React from "react";
import VideoJS from "./video";

export default function App() {
  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: "muted",
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: "rtmp://play.wymedia.com.cn/im01/main",
        type: "rtmp/mp4"
      }
    ]
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    player.on("waiting", () => {
      console.log("player is waiting");
    });

    player.on("dispose", () => {
      console.log("player will dispose");
    });
  };

  return (
    <>
      <div>Rest of app here...</div>

      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />

      <div>Rest of app here...</div>
    </>
  );
}
