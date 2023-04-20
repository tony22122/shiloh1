import React from "react";
import Navbar from "../Components/Layout/navbar.jsx";
import dynamic from "next/dynamic";

const ContactFormSection = dynamic(() =>
  import("../Components/Layout/ContactFormSection.jsx")
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
