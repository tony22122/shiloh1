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
  key="aboutSection0"
  videoUrl="https://vid.puffyan.us/latest_version?id=--khbXchTeE&itag=22"
  text="about"
  buttonTwoText="say hello"
  buttonLink="#contact"
  buttonOneText="watch"
  videoId="uu01xBw_BVE"
>
</Section>
      <Section
        key="aboutSection1"
        videoUrl="https://vid.puffyan.us/latest_version?id=--khbXchTeE&itag=22"
        text="core team"
        buttonOneText="watch"
        buttonLink=""
        videoId="uu01xBw_BVE"
      />
      <Section
        key="aboutSection3"
        videoUrl="https://vid.puffyan.us/latest_version?id=--khbXchTeE&itag=22"
        text="what we do"
        buttonOneText="watch"
        buttonLink=""
        videoId="uu01xBw_BVE"
      />

      <ContactFormSection
      text="say hello"

      buttonText="contact us"
      />
    </>
  );
}
