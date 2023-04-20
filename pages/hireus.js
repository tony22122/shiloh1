import React from "react";
import Navbar from "../Components/Layout/navbar.jsx";
import Section from "../Components/Layout/section.jsx"
import ContactFormSection from "@/Components/Layout/ContactFormSection.jsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <Section
        key="hireUs0"
        videoUrl="https://vid.puffyan.us/latest_version?id=--khbXchTeE&itag=22"
        text="hire us"
        buttonLink="#contact"
        buttonTwoText="contact us"
        buttonOneText="watch" videoId="uu01xBw_BVE"
      />
      <ContactFormSection
      text="say hello"

      buttonText="contact us"
      />
      </>
  );
}
