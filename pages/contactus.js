import React from "react";
import Navbar from "../components/layouts/navbar.jsx";
import dynamic from "next/dynamic";

const ContactFormSection = dynamic(() =>
  import("../components/layouts/ContactFormSection.jsx")
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
