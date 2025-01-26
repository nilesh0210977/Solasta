import React, { useEffect, useState } from "react";
import "./WindowsGrid.css";

const VideoScroller = ({ onAnimationEnd }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const randomVideo = Math.floor(Math.random() * 9); // Adjust based on number of videos
      setSelectedVideo(randomVideo);

      setTimeout(() => {
        onAnimationEnd();
      }, 2000); // Delay to enlarge video before transition
    }, 4000); // Scrolling duration

    return () => clearTimeout(timer);
  }, [onAnimationEnd]);

  return (
    <div className="video-scroller">
      {Array.from({ length: 9 }).map((_, index) => (
        <div
          key={index}
          className={`video-container ${
            selectedVideo === index ? "enlarged" : ""
          }`}
        >
          <video
            src={`https://path/to/video${index + 1}.mp4`} // Replace with video URLs
            autoPlay
            muted
            loop
          />
        </div>
      ))}
    </div>
  );
};

export default VideoScroller;
