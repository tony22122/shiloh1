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
        key="getInvolved0"
        videoUrl="https://vid.puffyan.us/latest_version?id=--khbXchTeE&itag=22"
        text="get involved"
        buttonLink="#contact"
        buttonTwoText="say hello"
        buttonOneText="watch" videoId="uu01xBw_BVE"
      />
      <Section
        key="getInvolved1"
        videoUrl="https://vid.puffyan.us/latest_version?id=--khbXchTeE&itag=22"
        text="Community"
        buttonLink="/"
        buttonTwoText="Join Us"
        buttonOneText="watch" videoId="uu01xBw_BVE"
      />
      <Section
        key="getInvolved2"
        videoUrl="https://vid.puffyan.us/latest_version?id=--khbXchTeE&itag=22"
        text="Intern"
        buttonLink="#contact"
        buttonTwoText="reach out"
        buttonOneText="watch" videoId="uu01xBw_BVE"
      />
      <Section
        key="getInvolved3"
        videoUrl="https://vid.puffyan.us/latest_version?id=--khbXchTeE&itag=22"
        text="Resources"
        buttonLink=""
        buttonTwoText=""
        buttonOneText="watch" videoId="uu01xBw_BVE"
      />
      <Section
        key="getInvolved2"
        videoUrl="https://vid.puffyan.us/latest_version?id=--khbXchTeE&itag=22"
        text="Newsletter"
        buttonLink=""
        buttonTwoText="Join Our Newsletter"
        buttonOneText="watch" videoId="uu01xBw_BVE"
      />


<ContactFormSection
text="say hello"
buttonText="contact us"
/>
      </>
  );
}
