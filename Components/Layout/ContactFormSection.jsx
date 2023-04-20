import VideoButton from "/home/clyde/Code/shiloh/Components/Buttons/video-button.jsx";
import Link from "next/link";
import ContactThreeJsComponent from "../Elements/ContactThreeJsComponent.jsx";

const ContactFormSection = ({
  text,
  videoId,
  buttonOneText,
  buttonTwoText,
  buttonLink = "/", // add a default value,
}) => {

  return (
    <div className="relative z-10 h-screen w-screen">
      <div className="absolute inset-0 z-0">
      <ContactThreeJsComponent />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <div className="relative flex justify-center items-end w-full mb-20">
          <h1 className="text-6xl font-normal text-white">{text}</h1>
        </div>
        <div className="flex justify-start space-x-4">
          <VideoButton videoId={videoId} buttonOneText={buttonOneText} />
          <Link
            href={buttonLink}
            className="px-4 mt-8 mx-5 py-2 text-white underline border-white rounded hover:border-white transition duration-300 ease-in-out focus:outline-none"
          >
            {buttonTwoText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactFormSection;