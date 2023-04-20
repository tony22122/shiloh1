import React from "react";
import Navbar from "../Components/Layout/navbar.jsx";
import Section from "../Components/Layout/section.jsx"
import ContactFormSection from "@/Components/Layout/ContactFormSection.jsx";

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
