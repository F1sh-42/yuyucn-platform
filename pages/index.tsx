"use client";
import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";

const VideoPlayer = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative w-full aspect-video bg-black">
      {!playing && (
        <button
          onClick={() => setPlaying(true)}
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 z-10"
        >
          <span className="text-white text-2xl">▶ 点击播放试看内容</span>
        </button>
      )}
      <ReactPlayer
        url="https://www.youtube.com/watch?v=YOUR_VIDEO_ID"
        playing={playing}
        controls={false}
        width="100%"
        height="100%"
        style={{ pointerEvents: playing ? "auto" : "none" }}
      />
    </div>
  );
};

export default VideoPlayer;
