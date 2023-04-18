import React, { useEffect, useRef, useState } from "react";
import VideoButton from "/home/clyde/Code/shiloh/Components/Buttons/video-button.jsx";
const Section = ({ videoUrl, text, videoId, buttonOneText, buttonTwoText }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsPlaying(true);
          videoRef.current.play();
        } else {
          setIsPlaying(false);
          videoRef.current.pause();
        }
      });
    }, options);

    observer.observe(videoRef.current);

    return () => {
      observer.unobserve(videoRef.current);
    };
  }, []);

  return (
    <div className="relative z-10 h-screen w-screen">
      <video
        className="absolute h-screen w-screen object-cover blur-sm"
        src={videoUrl}
        ref={videoRef}
        muted
        loop
        autoPlay={isPlaying}
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <div className="relative flex justify-center items-end w-full mb-20">
          <h1 className="text-6xl font-normal text-white">{text}</h1>
        </div>
        <div className="flex justify-start space-x-4">
          <VideoButton videoId={videoId} buttonOneText={buttonOneText}/>
          <button className="px-4 mt-8 mx-5 py-2 text-white underline border-white rounded hover:border-white transition duration-300 ease-in-out focus:outline-none">
            {buttonTwoText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section;
