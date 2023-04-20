import React from "react";
import Navbar from "../Components/Layout/navbar.jsx";
import Section from "../Components/Layout/section.jsx"
import ContactFormSection from "@/Components/Layout/ContactFormSection.jsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <Section
        key="projects0"
        videoUrl="https://vid.puffyan.us/latest_version?id=--khbXchTeE&itag=22"
        text="projects"
        buttonLink="#contact"
        buttonTwoText="say hello"
        buttonOneText="watch" videoId="uu01xBw_BVE"
      />
       <ContactFormSection
      text="say hello"

      buttonText="contact us"
      />
      </>
  );
}
