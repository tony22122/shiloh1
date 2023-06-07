import React from "react";
import Head from "next/head";
import Navbar from "../components/layouts/navbar.jsx";
import dynamic from "next/dynamic";

const ContactFormSection = dynamic(() =>
  import("../components/layouts/ContactFormSection.jsx")
);


export default function Home() {
  return (
    <>
    <Head>
        <title>contact us</title>
        <meta name="description" content="contact shiloh" />
        <meta name="keywords" content="shiloh, contact, redemptive tech, Jesus, faith, christian developers" />
      </Head>
      <Navbar />
      <ContactFormSection
      text="say hello"

      buttonText="contact us"
      />
      </>
  );
}
