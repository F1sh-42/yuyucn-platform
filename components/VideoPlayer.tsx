// components/VideoPlayer.tsx
"use client";
import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";

const VideoPlayer = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video max-w-3xl w-full mx-auto">
      {/* 遮罩层，只有未播放时显示 */}
      {!playing && (
        <button
          onClick={() => setPlaying(true)}
          className="absolute inset-0 z-10 bg-black/70 flex items-center justify-center"
        >
          <span className="text-white text-xl">▶ 点击试看</span>
        </button>
      )}

      <ReactPlayer
        url="https://www.youtube.com/watch?v=YOUR_VIDEO_ID"
        playing={playing}
        controls={true} // 保留 YouTube 控件，防止嵌入失败
        width="100%"
        height="100%"
        config={{
          youtube: {
            playerVars: {
              modestbranding: 1, // 隐藏 logo
              rel: 0,            // 不显示相关视频
            }
          }
        }}
      />
    </div>
  );
};

export default VideoPlayer;
