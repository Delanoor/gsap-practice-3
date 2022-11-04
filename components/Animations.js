import gsap from "gsap";
import { useRef } from "react";

export const staggerReveal = (node1, node2) => {
  gsap.from([node1, node2], {
    height: "0%",

    duration: 0.8,

    // transformOrigin: "right top",
    // transformOrigin: "top top",
    // skew: 2,
    ease: "power3.inOut",
    stagger: {
      amount: 0.1,
    },
  });
};

export const flatten = (node1, node2) => {
  gsap.to(
    [node1, node2],
    // {
    //   borderRadius: "50%",
    // },
    {
      delay: 1.3,
      // width: "150%",
      duration: 0.8,
      top: "-50%",

      borderRadius: "0",
      ease: "power3.Out",
    }
  );
};

export const staggerText = (node1, node2, node3) => {
  gsap.from([node1, node2, node3], {
    duration: 0.8,
    y: "100%",
    delay: 0.2,
    ease: "power3.inOut",
    stagger: {
      amount: 0.3,
    },
  });
};

export const staggerTextUp = (node1, node2, node3) => {
  gsap.to([node1, node2, node3], {
    duration: 0.8,
    y: "100%",
    delay: 1.2,
    ease: "power3.inOut",
    stagger: {
      amount: 0.3,
    },
  });
};

export const fadeInUp = (node) => {
  gsap.from(node, {
    y: 60,
    duration: 1,
    delay: 0.2,
    opacity: 0,
    ease: "power3.inOut",
  });
};

export const handleAlbum = (albumImage, target) => {
  gsap.to(target, {
    duration: 0,
    background: `url(${albumImage.src}) center center`,
  });
  gsap.to(target, {
    duration: 0.4,
    opacity: 1,
    ease: "power3.inOut",
  });
  gsap.from(target, {
    duration: 0.4,
    transformOrigin: "right top",
  });
};

export const handleAlbumReturn = (target) => {
  gsap.to(target, {
    duration: 0.4,
    opacity: 0,
  });
};

export const handleMenuHover = (e) => {
  gsap.to(e.target, {
    duration: 0.3,
    y: 3,
    skewX: 4,
    ease: "power3.inOut",
  });
};

export const handleMenuHoverExit = (e) => {
  gsap.to(e.target, {
    duration: 0.3,
    y: -3,
    skewX: 0,
    ease: "power3.inOut",
  });
};
