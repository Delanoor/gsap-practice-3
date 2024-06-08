import { CSSTransition, SwitchTransition } from "react-transition-group";
import Layout from "../components/Layout";
import "../styles/globals.scss";
import { useRouter } from "next/router";
import gsap from "gsap";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const onPageEnter = (element) => {
    console.log("Enter", element);
    gsap.fromTo(
      element,
      {
        y: 50,
        autoAlpha: 0,
        ease: "power3.out",
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        ease: "power3.out",
      }
    );
  };

  const onPageExit = (element) => {
    console.log("Exit", element);
    gsap.fromTo(
      element,
      {
        y: 0,
        autoAlpha: 1,
        ease: "power3.out",
      },
      {
        y: -50,
        autoAlpha: 0,
        duration: 0.5,
        ease: "power3.intOut",
      }
    );
  };

  return (
    <SwitchTransition>
      <CSSTransition
        key={router.asPath}
        timeout={1500}
        in={true}
        onEnter={onPageEnter}
        onExit={onPageExit}
        mountOnEnter={true}
        unmountOnExit={true}
      >
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </CSSTransition>
    </SwitchTransition>
  );
}

export default MyApp;
