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
          <span className="text-white text-2xl">▶ 点击播放</span>
        </button>
      )}
      <ReactPlayer
        url="https://www.youtube.com/watch?v=YOUR_VIDEO_ID" // 替换成你的视频 ID
        playing={playing}
        controls={false}
        width="100%"
        height="100%"
        config={{
          youtube: {
            playerVars: {
              modestbranding: 1, // 隐藏 YouTube logo
              rel: 0,             // 不显示推荐视频
              showinfo: 0,        // （可选）隐藏标题信息
            }
          }
        } as any} // 👈 防止 TypeScript 报错
        style={{ pointerEvents: playing ? "auto" : "none" }}
      />
    </div>
  );
};

export default VideoPlayer;
