import React from "react";
import Navbar from "../Components/Layout/navbar.jsx";
import Section from "../Components/Layout/section.jsx";
import SubSection from "../Components/Layout/sub-section.jsx";
import ContactFormSection from "@/Components/Layout/ContactFormSection.jsx";
export default function Home() {
  return (
    <>
      <Navbar />
      <Section
        key="aboutSection0"
        videoUrl="https://vid.puffyan.us/latest_version?id=--khbXchTeE&itag=22"
        text="about"
        buttonTwoText="reach out"
        buttonOneText="watch"
        videoId="uu01xBw_BVE"
      />
      <SubSection
        h2Text="What is Shiloh?"
        p1Text="The year is 2023, a dystopian future, the world is ruled by a tyrannical technological empire controlled by none other than Satan himself. Christians live in fear of being caught and punished for their beliefs. However, hope is not lost. Shiloh is a rebel movement that believes technology can be used to break the chains of oppression and restore the world to God's design. Together with a team of devout Christian nerds, Shiloh sets out on a mission to take down Satan's tech empire and restore God's freedom to humanity. As we dive deeper into Satan's twisted technological infrastructure, we discover the shocking truth that technology controlled by Satan is being centralized for maximum top-down control. This system plans to prevent all humanity from having a true relationship with Jesus. The Shiloh community must use their faith and technological expertise to stop Satan's plans and restore humanities God given rights. We face numerous challenges and obstacles along the way, including the wrath of Satan's minions and betrayal from those we thought we could trust. Shiloh's battle against Satan's Tech Empire is a thrilling story of faith, technology, and the power of belief. It is a reminder that Christians can use technology as a tool for good and a call to arms for all those who believe in Christian freedom to rise up against the forces of oppression with spiritual means. "
      />
      <SubSection
      h2Text="Our Team"
      />
       <SubSection
      h2Text="Core Focus"
      p2Text="Shiloh's logo looks like a gift box, serving as a constant reminder of the gift Shiloh, our Messiah has given us and we are called to give to the world. Shiloh means His gift. In this way, we celebrate a culture of giving first, inspired by the biblical references of Genesis 49:10, Jeremiah 7:1-15, 26:6, Mark 11:15-17, and Luke 21:6.

        As we embark on our mission, Shiloh's values guide us in using technology for the betterment of humanity. We recognize that our talents and resources are gifts from God, and it is our responsibility to use them for His glory. The battle against Satan's Tech Empire is not just about reclaiming our freedom, but also about sharing the gift of faith and hope with those who have lost it in the darkness of oppression.
        
        With this in mind, Shiloh's team works tirelessly to develop decentralized technology that empowers individuals and communities to take control of their own lives and destinies. We seek to create a world where everyone has the opportunity to experience the true love and freedom of Jesus Christ, regardless of their circumstances.
        
        Shiloh's fight against the forces of evil is not just a battle for survival, but a mission to spread the good news of salvation and redemption. We will continue to persevere in the face of adversity, knowing that our victory will not only be a triumph for ourselves, but a gift to the world."
      />
       <SubSection
      h2Text="What We Do"
      />
      <ContactFormSection
      buttonOneText="contact us"
      />
    </>
  );
}
