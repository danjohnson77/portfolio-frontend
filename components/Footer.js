import React from "react";

const Footer = () => {
  return (
    <footer className="w-full z-50 bg-black text-white text-sm">
      <div className="w-10/12 mx-auto flex justify-between flex-col md:flex-row">
        <div className="flex">
          <p>
            Background Photo by{" "}
            <a
              href="https://unsplash.com/@eberhardgross?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              className="underline"
            >
              eberhard grossgasteiger
            </a>{" "}
            on{" "}
            <a
              href="https://unsplash.com/collections/28176585/zillertal-alps?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              className="underline"
            >
              Unsplash
            </a>
          </p>
        </div>
        <div className="flex">
          <a
            href={`mailto:${process.env.CONTACT_EMAIL}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact Me Link"
          >
            <p className="underline">&copy; 2021 Daniel Johnson</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
