
import React from "react";
import Navbar from "../Components/Layout/navbar.jsx";
import Section from "../Components/Layout/section.jsx"

export default function Home() {
  return (
    <>
      <Navbar />
      <Section
        key="section0"
        videoUrl="https://vid.puffyan.us/latest_version?id=--khbXchTeE&itag=22"
        text="redemptive tech in Jesus' name"
        buttonTwoText="learn more"
        buttonOneText="watch" videoId="uu01xBw_BVE"
      />
      <Section
        key="section1"
        videoUrl="https://vid.puffyan.us/latest_version?id=tQG6jYy9xto&itag=22&local=true"
        text="about"
        buttonOneText="watch" 
        buttonTwoText="learn more"
      />
      <Section
        key="section2"
        videoUrl="https://vid.puffyan.us/latest_version?id=fVgq6j-krzU&itag=22"
        text="get involved"
        buttonOneText="watch" 
        buttonTwoText="learn more"
      />
      <Section
        key="section3"
        videoUrl="https://vid.puffyan.us/latest_version?id=LBNDfxjEYlA&itag=22"
        text="projects"
        buttonOneText="watch" 
        buttonTwoText="learn more"
      />
      <Section
        key="section4"
        videoUrl="https://vid.puffyan.us/latest_version?id=J33nDgS3uUY&itag=22"
        text="hire us"
        buttonOneText="watch" 
        buttonTwoText="learn more"
      />
      <Section
        key="section5"
        videoUrl="https://vid.puffyan.us/latest_version?id=mAg8UyDt_sw&itag=22"
        text="contact us"
        buttonOneText="watch" 
        buttonTwoText="learn more"
      />
      </>
  );
}
