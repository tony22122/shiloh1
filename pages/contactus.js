import React from "react";
import Navbar from "../Components/Layout/navbar.jsx";
import Section from "../Components/Layout/section.jsx"

export default function Home() {
  return (
    <>
      <Navbar />
      <Section
        key="contactSection0"
        videoUrl="https://vid.puffyan.us/latest_version?id=--khbXchTeE&itag=22"
        text="contact us"
        buttonTwoText="learn more"
        buttonOneText="watch" videoId="uu01xBw_BVE"
      />
      </>
  );
}
