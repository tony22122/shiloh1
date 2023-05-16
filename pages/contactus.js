import React from "react";
import Navbar from "../components/Layout/navbar.jsx";
import dynamic from "next/dynamic";

const ContactFormSection = dynamic(() =>
  import("../components/Layout/ContactFormSection.jsx")
);


export default function Home() {
  return (
    <>
      <Navbar />
      <ContactFormSection
      text="say hello"

      buttonText="contact us"
      />
      </>
  );
}
