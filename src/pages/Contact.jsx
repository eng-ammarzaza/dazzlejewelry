import { useEffect, useLayoutEffect } from "react";
import ContactForm from "../ui/ContactForm";

function Contact() {
  useEffect(() => {
    document.title = "Dazzle: Contact us";
    return function () {
      document.title = "Dazzle";
    };
  }, []);
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bm">
      <p className="font-cinzel md:text-3xl text-xl mt-2 border-b border-brand-500 pb-2">
        Contact Us
      </p>
      <ContactForm />
    </div>
  );
}

export default Contact;
