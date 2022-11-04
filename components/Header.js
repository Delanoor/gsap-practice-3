import { useRouter } from "next/router";
import Link from "next/link";
import React, { useState } from "react";
import { useEffect } from "react";
import Menu from "./Menu";

export default function Header() {
  // for menu button
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu",
  });

  // for disabled button
  const [disabled, setDisabled] = useState(false);

  // for page changes
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = () => {
      setState({ clicked: false, menuName: "Menu" });
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  });

  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close",
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu",
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close",
      });
    }
  };

  // Determine if the menu button should be disabled
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <header className="h-[100px]">
      <div className="w-full max-w-[1280px] mx-auto">
        <div className="px-12">
          <div className="inner-header relative z-10 h-[100px] flex justify-between items-center">
            <div className="logo font-[700] text-[#191919]">
              <Link className="text-[1.7rem]" href={"/"}>
                JS
              </Link>
            </div>
            <div className="menu">
              <button
                className={`${
                  state.clicked ? "text-[#fff]" : "text-[#191919]"
                } hidden md:block bg-none text-[1.1rem] `}
                disabled={disabled}
                onClick={handleMenu}
              >
                {state.menuName}
              </button>
              <button
                className="md:hidden "
                disabled={disabled}
                onClick={handleMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  // stroke="currentColor"
                  className={`${
                    state.clicked ? "stroke-[#fff]" : "stroke-[#191919]"
                  } w-8 h-8`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Menu state={state} />
    </header>
  );
}
