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
      <div className="w-full h-full" ref={page}>
        <div className="h-screen flex flex-col relative items-center px-10">
          <div className="mt-[10rem] relative">
            <div className="relative overflow-hidden h-full w-full">
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
        </div>
      </div>
    </>
  );
}
