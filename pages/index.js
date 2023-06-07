import React from "react";
import Head from "next/head";
import Navbar from "../components/layouts/navbar.jsx";
import dynamic from "next/dynamic";

const Section = dynamic(() => import("../components/layouts/section.jsx"));
const ContactFormSection = dynamic(() =>
  import("../components/layouts/ContactFormSection.jsx")
);

export default function Home() {
  return (
    <>
      <Head>
        <title>shiloh code</title>
        <meta name="description" content="shiloh is accelerating redemptive technology in Jesus' name." />
        <meta name="keywords" content="shiloh, redemptive tech, Jesus, faith, christian developers" />
      </Head>
      <Navbar />
      <Section
        key="section0"
        videoUrl="/optimized-shiloh-main-banner.mp4"
        text="redemptive tech in Jesus' name"
        buttonTwoText="learn more"
        buttonOneText="watch"
        videoId="R0QFTSLC1Gg"
        buttonLink="/about"
        headingLevel={1}
      />
      <Section
        key="section1"
        videoUrl="/true_freedom_optimized.mp4"
        text="about"
        buttonOneText="watch"
        buttonTwoText="learn more"
        videoId="W60vWdXR1sQ"
        buttonLink="/about"
        headingLevel={2}
      />
      <Section
        key="section2"
        videoUrl="/higher_ground_optimized.mp4"
        text="get involved"
        buttonOneText="watch"
        buttonTwoText="learn more"
        videoId="j16NyCutsOo"
        buttonLink="/getinvolved"
        headingLevel={2}
      />
      <ContactFormSection
        text="contact us"
        buttonText="contact us"
        buttonLink="https://www.videoask.com/f8fah1r34"
      />
    </>
  );
}
