import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

const VideoButton = ({ link, buttonOneText }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <button className="px-20 mt-8 mx-5 py-2 text-white border border-blue-500 rounded hover:border-white transition duration-300 ease-in-out focus:outline-none" onClick={openModal}>
        {buttonOneText}
      </button>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={link}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default VideoButton;