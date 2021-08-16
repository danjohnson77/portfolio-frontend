import { useEffect } from "react";
import SpacedText from "../components/SpacedText";
import { headerAnimation } from "../lib/animations";
import { getAbout } from "../lib/api";
import Image from "next/image";

const about = ({ about }) => {
  useEffect(() => {
    headerAnimation([".about-ani"], 0.75, "circ.out");
  }, []);

  const { title, body, aboutImage } = about;
  const md = require("markdown-it")({ breaks: true });

  return (
    <div className="panel md:w-10/12">
      <div className="flex flex-col lg:flex-row h-full justify-between w-10/12">
        <div className="flex justify-center items-center py-10">
          <div className="overflow-hidden rounded-full w-48 h-48 relative">
            <Image src={aboutImage.url} layout="fill" objectFit="contain" />
          </div>
        </div>
        <div className="flex flex-col lg:w-9/12 lg:p-10">
          <SpacedText
            text={title.toUpperCase()}
            classes="py-5"
            animateClass="about-ani"
            alternateAnimation={true}
          />
          <div
            className="text-sm leading-7 tracking-widest font-subheading py-5"
            dangerouslySetInnerHTML={{ __html: md.render(body) }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const about = await getAbout();

  return { props: { about }, revalidate: 10 };
}

export default about;
