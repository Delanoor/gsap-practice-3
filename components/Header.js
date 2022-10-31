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
      <div className="container">
        <div className="wrapper">
          <div className="inner-header relative z-10 h-[100px] flex justify-between items-center">
            <div className="logo font-[700] text-[#191919]">
              <Link className="text-[1rem]" href={"/"}>
                Delanoor
              </Link>
            </div>
            <div className="menu">
              <button
                className="bg-none text-[0.9rem] text-[#191919]"
                disabled={disabled}
                onClick={handleMenu}
              >
                Menu
              </button>
            </div>
          </div>
        </div>
      </div>
      <Menu state={state} />
    </header>
  );
}
