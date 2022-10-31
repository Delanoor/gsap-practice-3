import Link from "next/link";
import React from "react";
import Menu from "./Menu";

export default function Header() {
  return (
    <header className="h-[100px]">
      <div className="container">
        <div className="wrapper">
          <div className="inner-header relative z-10 h-[100px] flex justify-between items-center">
            <div className="logo font-[700] text-[#191919]">
              <Link href={"/"}>JNS</Link>
            </div>
            <div className="menu">
              <button className="bg-none text-[0.8rem] text-[#191919]">
                Menu
              </button>
            </div>
          </div>
        </div>
      </div>
      <Menu />
    </header>
  );
}
