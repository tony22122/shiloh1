import React from "react";
import Navbar from "../components/layouts/navbar.jsx";
import SubSection from "../components/layouts/sub-section.jsx"
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
        key="getInvolved0"
        videoUrl="/higher_ground_optimized.mp4"
        text="get involved"
        buttonLink="#contact"
        buttonTwoText="say hello"
        buttonOneText="watch" videoId="j16NyCutsOo"
      />
<ContactFormSection
text="say hello"
buttonText="contact us"
/>
      </>
  );
}
