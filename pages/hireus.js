import React from "react";
import Navbar from "../components/Layout/navbar.jsx";
import dynamic from "next/dynamic";

const Section = dynamic(() => import("../components/Layout/section.jsx"));
const ContactFormSection = dynamic(() =>
  import("../components/Layout/ContactFormSection.jsx")
);

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
