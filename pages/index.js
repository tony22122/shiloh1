import React from "react";
import Navbar from "../components/layouts/navbar.jsx";
import dynamic from "next/dynamic";

const Section = dynamic(() => import("../components/layouts/section.jsx"));
const ContactFormSection = dynamic(() =>
  import("../components/layouts/ContactFormSection.jsx")
);

export default function Home() {
  return (
    <>
      <Navbar />
      <Section
        key="section0"
        videoUrl="/optimized-shiloh-main-banner.mp4"
        text="redemptive tech in Jesus' name"
        buttonTwoText="learn more"
        buttonOneText="watch" videoId="R0QFTSLC1Gg"
        buttonLink="/about"
      />
      <Section
        key="section1"
        videoUrl="https://vid.puffyan.us/latest_version?id=tQG6jYy9xto&itag=22&local=true"
        text="about"
        buttonOneText="watch" 
        buttonTwoText="learn more"
        buttonLink="/about"
      />
      <Section
        key="section2"
        videoUrl="https://vid.puffyan.us/latest_version?id=fVgq6j-krzU&itag=22"
        text="get involved"
        buttonOneText="watch" 
        buttonTwoText="learn more"
        buttonLink="/getinvolved"
      />
      <Section
        key="section3"
        videoUrl="https://vid.puffyan.us/latest_version?id=LBNDfxjEYlA&itag=22"
        text="projects"
        buttonOneText="watch" 
        buttonTwoText="learn more"
        buttonLink="/projects"
      />
      <Section
        key="section4"
        videoUrl="https://vid.puffyan.us/latest_version?id=J33nDgS3uUY&itag=22"
        text="hire us"
        buttonOneText="watch" 
        buttonTwoText="learn more"
        buttonLink="/contactus"
      />
      <ContactFormSection
      text="contact us"
      buttonText="contact us"
      buttonLink="https://www.videoask.com/f8fah1r34"
      />
      </>
  );
}
