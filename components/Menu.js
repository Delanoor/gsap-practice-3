import Link from "next/link";
import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

import {
  staggerReveal,
  staggerText,
  fadeInUp,
  handleAlbum,
  handleAlbumReturn,
  handleMenuHover,
  handleMenuHoverExit,
  flatten,
  staggerTextUp,
} from "./Animations";

import image1 from "../public/images/gsap02_1.jpg";
import image2 from "../public/images/gsap02_2.jpg";
import image3 from "../public/images/gsap02_3.jpg";
import image4 from "../public/images/gsap02_4.jpg";
import image5 from "../public/images/gsap02_5.jpg";

const albums = [
  { name: "Chicago", image: image1 },
  { name: "NY", image: image2 },
  { name: "Seoul", image: image3 },
  { name: "Album4", image: image4 },
  { name: "Album5", image: image5 },
];

function Menu({ state }) {
  // vars for dom nodes
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef(null);
  let imageBackground = useRef(null);
  let lines = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);

  const tl = useRef();

  useEffect(() => {
    if (state.clicked === false) {
      // close menu

      // most inner bg layer first

      gsap.to([revealMenu, revealMenuBackground], {
        duration: 0.8,
        height: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 0.07,
        },
      });

      gsap.to(menu, {
        duration: 1,
        css: {
          display: "none",
        },
      });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // open menu
      gsap.to(menu, {
        duration: 0,
        css: {
          display: "block",
        },
      });
      gsap.to([revealMenuBackground, revealMenu], {
        duration: 0,
        opacity: 1,
        height: "100%",
      });
      staggerReveal([revealMenuBackground, revealMenu]);

      fadeInUp(info);
      staggerText([line1, line2, line3]);
    }
  }, [state]);

  return (
    <div
      ref={(el) => (menu = el)}
      className="hamburger-menu z-[9] top-0 left-0 right-0 bottom-0 fixed h-full w-full hidden"
    >
      <div
        ref={(el) => (revealMenuBackground = el)}
        className="menu-secondary-background-color top-0 left-0 right-0 bottom-0 fixed h-full w-full bg-[#121212] z-[-1]"
      />
      <div
        ref={(el) => (revealMenu = el)}
        className="menu-layer relative bg-[#e20001] h-full overflow-hidden"
      >
        <div
          ref={(el) => (imageBackground = el)}
          className="menu-photo-background animate-cameraPan bg-no-repeat bg-cover top-0 left-0 right-0 bottom-0 absolute h-full w-full opacity-0"
        ></div>
        <div className="mx-auto w-full h-full max-w-[1280px]">
          <div className="md:px-[48px] relative">
            <div className="menu-links flex flex-col md:flex-row justify-between items-center relative top-[200px]">
              <nav className="block w-full">
                <ul ref={(el) => (lines = el)} className="p-0 m-0">
                  <li className="text-[6rem] font-[700] h-[135px] max-w-[400px] relative overflow-hidden">
                    <Link
                      ref={(el) => (line1 = el)}
                      onMouseEnter={(e) => handleMenuHover(e)}
                      onMouseOut={(e) => handleMenuHoverExit(e)}
                      className="absolute text-white hover:text-black"
                      href={"/second"}
                    >
                      Second
                    </Link>
                  </li>
                  <li className="text-[6rem] font-[700] h-[135px] w-[700px] relative overflow-hidden">
                    <Link
                      ref={(el) => (line2 = el)}
                      onMouseEnter={(e) => handleMenuHover(e)}
                      onMouseOut={(e) => handleMenuHoverExit(e)}
                      className="absolute text-white hover:text-black"
                      href={"/third"}
                    >
                      Third
                    </Link>
                  </li>
                  <li className="text-[6rem] font-[700] h-[135px] w-[700px] relative overflow-hidden">
                    <Link
                      ref={(el) => (line3 = el)}
                      onMouseEnter={(e) => handleMenuHover(e)}
                      onMouseOut={(e) => handleMenuHoverExit(e)}
                      className="absolute text-white hover:text-black"
                      href={"/fourth"}
                    >
                      Fourth
                    </Link>
                  </li>
                </ul>
              </nav>
              {/* <div
                ref={(el) => (info = el)}
                className="info text-white border w-[300px]"
              > */}
              <div ref={(el) => (info = el)} className="info text-white w-full">
                <h3 className="text-[1.2rem] my-[8px]">Join Us with</h3>
                <p className="mx-auto text-[0.8rem]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  sed nam illum repellat ab consequuntur quo veniam inventore
                  quidem necessitatibus!
                </p>
              </div>
              <div className="locations absolute bottom-[-80px] text-white mt-4 text-[0.8rem] font-[600]">
                Recent Albums:
                {albums.map((el) => (
                  <span
                    key={el.name}
                    className="font-[400] cursor-pointer first:ml-16 mx-8 duration-300 ease-in-out left-16 hover:py-2 hover:px-6 rounded-[4px] hover:bg-black"
                    onMouseEnter={() => handleAlbum(el.image, imageBackground)}
                    onMouseLeave={() => handleAlbumReturn(imageBackground)}
                  >
                    {el.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
