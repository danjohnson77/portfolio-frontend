import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import Layout from "../components/Layout";

import { SwitchTransition, Transition } from "react-transition-group";
import gsap from "gsap";

const MyApp = ({ Component, pageProps, router }) => {
  const enter = (node) => {
    gsap.from(node, {
      duration: 0.3,
      autoAlpha: 0,
      x: window.innerWidth,
      ease: "power1.out",
    });
  };

  const exit = (node) => {
    gsap.to(node, {
      duration: 0.2,
      autoAlpha: 0,

      ease: "power1.in",
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
          <Component {...pageProps} />
        </Transition>
      </SwitchTransition>
    </Layout>
  );
};

export default MyApp;
