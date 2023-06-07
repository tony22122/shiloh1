import React, { useEffect, useRef, useState } from "react";
import VideoButton from "../buttons/video-button.jsx";
import Link from "next/link";

const Section = ({
  videoUrl,
  text,
  videoId,
  buttonOneText,
  buttonTwoText,
  buttonLink = "/",
  headingLevel = 1,
}) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

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
          if (!isMobile) {
            videoRef.current?.play();
          }
        } else {
          setIsPlaying(false);
          videoRef.current?.pause();
        }
      });
    }, options);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  let isMobile = false;
  if (typeof window !== "undefined") {
    isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  }

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setHasInteracted(true);
    }
  };

  const Heading = headingLevel === 1 ? "h1" : "h2";

  return (
    <div className="relative z-10 h-screen w-screen">
      {isMobile ? (
        <div
          className="absolute h-screen w-screen object-cover blur-sm"
          style={{
            backgroundImage: `url(${videoUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(4px)",
          }}
        />
      ) : (
        <video
          className="absolute h-screen w-screen object-cover blur-sm"
          src={videoUrl}
          ref={videoRef}
          muted
          loop
          autoPlay={!isMobile || (isMobile && isPlaying && hasInteracted)}
          preload="metadata"
        />
      )}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <div className="relative flex justify-center items-end w-full mb-20">
          <Heading className={`text-6xl font-normal text-white ${isMobile ? 'text-4xl md:text-5xl mx-4 px-2' : ''}`}>{text}</Heading>
        </div>
        <div className="flex justify-start space-x-4">
          {isMobile && !hasInteracted ? (
            <button
              onClick={handlePlayVideo}
              className="px-4 mt-8 mx-5 py-2 text-white"
            >
              {buttonOneText}
            </button>
          ) : (
            <VideoButton videoId={videoId} buttonOneText={buttonOneText} />
          )}
          {buttonLink && (
            <Link
              href={buttonLink}
              id="ButtonLink"
              className="px-4 mt-8 mx-5 py-2 text-white"
            >
              {buttonTwoText}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Section;
