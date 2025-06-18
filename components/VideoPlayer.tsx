// components/VideoPlayer.tsx
import React from 'react';

const VideoPlayer = () => {
  return (
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        className="w-full h-full rounded"
        src="https://www.youtube.com/embed/jQN9Knedjdg?start=0&end=180&controls=1"
        title="小说试看视频"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
