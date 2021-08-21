import { useEffect, useState } from "react";
import SpacedText from "../components/SpacedText";
import { headerAnimation } from "../lib/animations";
import { getAbout } from "../lib/api";
import Image from "next/image";

const about = ({ about }) => {
  const [current, setCurrent] = useState("story");

  useEffect(() => {
    headerAnimation([".about-ani"], 0.75, "circ.out");
  }, []);

  const { title, body, aboutImage, skillset } = about;
  const md = require("markdown-it")({ html: true, breaks: true });

  return (
    <div className="panel md:w-10/12">
      <div className="flex flex-col  h-full justify-between w-10/12">
        <SpacedText
          text={title.toUpperCase()}
          classes="pt-20 md:pt-10"
          animateClass="about-ani"
          alternateAnimation={true}
        />
        <div className="flex justify-between md:justify-around text-lg md:text-2xl font-subheading py-10">
          <span
            className={`cursor-pointer ${current === "story" && "text-glow"}`}
            onClick={() => setCurrent("story")}
          >
            MY STORY
          </span>
          <span>|</span>
          <span
            className={`cursor-pointer ${current === "skills" && "text-glow"}`}
            name="skills"
            onClick={() => setCurrent("skills")}
          >
            MY SKILLS
          </span>
        </div>

        {current === "story" && (
          <div className="flex flex-col justify-center items-center">
            <div className="overflow-hidden rounded-full w-48 h-48 relative">
              <Image src={aboutImage.url} layout="fill" objectFit="contain" />
            </div>
            <div
              className="text-sm leading-7 tracking-widest  py-5 about-body text-center md:text-left"
              dangerouslySetInnerHTML={{ __html: md.render(body) }}
            ></div>
          </div>
        )}
        {current === "skills" && (
          <div className="grid grid-cols-1 md:grid-cols-2 text-lg font-subheading w-full">
            {skillset.map((s, index) => {
              const { title, skills } = s;
              return (
                <div
                  key={index}
                  className="flex flex-col justify-center w-full p-5 items-center"
                >
                  <h2 className="text-2xl">{title}</h2>
                  <p>{skills}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const about = await getAbout();

  return { props: { about }, revalidate: 10 };
}

export default about;
