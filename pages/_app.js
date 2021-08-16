import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import Layout from "../components/Layout";

import { SwitchTransition, Transition } from "react-transition-group";
import gsap from "gsap";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

const MyApp = ({ Component, pageProps, router }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };
    const handleComplete = () => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  const enter = (node) => {
    gsap.from(node, {
      duration: 0.3,
      autoAlpha: 0,
      x: window.innerWidth,
      ease: "circ.out",
    });
  };

  const exit = (node) => {
    gsap.to(node, {
      duration: 0.2,
      autoAlpha: 0,

      ease: "circ.in",
    });
  };
  return (
    <Layout>
      <SwitchTransition>
        <Transition
          key={router.pathname}
          timeout={500}
          in={true}
          onEnter={enter}
          onExit={exit}
          mountOnEnter={true}
          unmountOnExit={true}
        >
          {loading ? <Loading /> : <Component {...pageProps} />}
        </Transition>
      </SwitchTransition>
    </Layout>
  );
};

export default MyApp;
