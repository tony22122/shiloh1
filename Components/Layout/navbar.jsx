import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "./nav-item"; 

const MENU_LIST = [
  { text: "about", href: "/about" },
  { text: "get involved", href: "/getinvolved" },
  { text: "projects", href: "/projects" },
  { text: "hire us", href: "/hireus" },
  { text: "contact us", href: "/contactus" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        <Link href={"/"}>
        <div className="flex items-center"><Image src="/shilohlogowhite.png" alt="Description of the image" width={50} height={50} />
          <h1 className="logo px-5">shiloh</h1></div>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
