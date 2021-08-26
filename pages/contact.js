import { useEffect } from "react";

import SpacedText from "../components/SpacedText";
import ContactForm from "../components/ContactForm";

import { headerAnimation } from "../lib/animations";

const contact = () => {
  useEffect(() => {
    headerAnimation([".contact-ani"], 0.75, "circ.out");
  }, []);
  return (
    <div className="panel md:text-6xl md:w-10/12 w-full min-h-screen md:min-h-0 p-24 px-10 md:p-10">
      <SpacedText
        text="GET IN TOUCH"
        classes="text-4xl pb-5 mx-auto overflow-hidden"
        animateClass="contact-ani"
        alternateAnimation={true}
      />

      <ContactForm classes="contact-form md:w-6/12 w-full py-5" />
    </div>
  );
};

export default contact;
