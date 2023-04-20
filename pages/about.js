import React from "react";
import Navbar from "../Components/Layout/navbar.jsx";
import Section from "../Components/Layout/section.jsx";
import SubSection from "../Components/Layout/sub-section.jsx";
import ContactFormSection from "@/Components/Layout/ContactFormSection.jsx";
export default function Home() {
  return (
    <>
      <Navbar />
      <Section
        key="aboutSection0"
        videoUrl="https://vid.puffyan.us/latest_version?id=--khbXchTeE&itag=22"
        text="about"
        buttonTwoText="reach out"
        buttonOneText="watch"
        videoId="uu01xBw_BVE"
      />
      <Section
        key="aboutSection1"
        videoUrl="https://vid.puffyan.us/latest_version?id=--khbXchTeE&itag=22"
        text="core team"
        buttonOneText="watch"
        videoId="uu01xBw_BVE"
      />
      <Section
        key="aboutSection3"
        videoUrl="https://vid.puffyan.us/latest_version?id=--khbXchTeE&itag=22"
        text="what we do"
        buttonOneText="watch"
        videoId="uu01xBw_BVE"
      />

      <ContactFormSection
      text="say hello"

      buttonOneText="contact us"
      />
    </>
  );
}
