import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function second() {
  const page = useRef();
  const tl = useRef(); // timeline

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline().from("[data-animate='up']", {
        y: "100%",
        stagger: 0.2,
        delay: 1,
      });
    }, page);

    return () => ctx.revert();
  }, []);
  return (
    <>
      <div className="w-full min-h-screen bg-[#e0e5eb]" ref={page}>
        <div className="h-full flex flex-col items-center px-10 border">
          <div className="mt-[5rem] h-full py-10">
            {/* title */}
            <div className="relative overflow-hidden w-full h-[4rem]">
              <div data-animate="up" className="text-[3rem] absolute">
                PAGE TWO
              </div>
            </div>
            <div className="relative overflow-hidden h-[3rem] mt-[1rem]">
              <p data-animate="up" className="aboslute">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Architecto sed asperiores harum nulla ipsum quo perspiciatis
                rerum officiis praesentium impedit sunt fuga minima voluptatem
                sint culpa soluta magnam fugiat, hic nihil natus. Illum placeat
                reprehenderit rerum totam dolorem consequatur nemo ex eligendi
                exercitationem. Tempore est eum doloremque sunt rerum explicabo?
              </p>
            </div>
          </div>
          {/* neumorphism */}
          <div className="relative mt-10 h-[1rem]">
            <div
              className="border h-[20rem] w-[20rem] 
            rounded-[1rem] 
            shadow-[0.3rem_0.3rem_0.6rem_rgba(163,177,198,0.6),-0.3rem_-0.3rem_0.6rem_#ffffff]
            hover:shadow-[inset_0.3rem_0.3rem_0.6rem_rgba(163,177,198,0.6),inset_-0.3rem_-0.3rem_0.6rem_#ffffff]
            transition-shadow duration-700 ease-in-out
            "
            />
            <div
              className="mt-[3rem] border h-[200px] w-[200px] 
            rounded-[1rem]
            neumorphism"
            />
          </div>
        </div>
      </div>
    </>
  );
}
