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
        <title>about</title>
        <meta name="description" content="about shiloh" />
        <meta name="keywords" content="shiloh, about, redemptive tech, Jesus, faith, christian developers" />
      </Head>
      <Navbar />

<Section
  key="aboutSection0"
  videoUrl="/true_freedom_optimized.mp4"
  text="about"
  buttonTwoText="say hello"
  buttonLink="#contact"
  buttonOneText="watch"
  videoId="W60vWdXR1sQ"
>
</Section>

      <ContactFormSection
      text="say hello"

      buttonText="contact us"
      />
    </>
  );
}
