"use client";
import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";

const VideoPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const [playedSeconds, setPlayedSeconds] = useState(0);

  const MAX_PREVIEW_DURATION = 180; // 3分钟试看

  const handleProgress = (progress: { playedSeconds: number }) => {
    setPlayedSeconds(progress.playedSeconds);
    if (progress.playedSeconds >= MAX_PREVIEW_DURATION) {
      setPlaying(false); // 到达试看时间后暂停
    }
  };

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
        url="https://www.youtube.com/watch?v=jQN9Knedjdg"
        playing={playing}
        controls={false}
        onProgress={handleProgress}
        width="100%"
        height="100%"
        config={{
          youtube: {
            playerVars: {
              modestbranding: 1, // 尽量隐藏 logo
              rel: 0,             // 不显示相关视频
            },
          },
        }}
        style={{ pointerEvents: playing ? "auto" : "none" }}
      />
      {playedSeconds >= MAX_PREVIEW_DURATION && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-90 z-20">
          <span className="text-white text-xl">试看结束，请解锁完整内容</span>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
