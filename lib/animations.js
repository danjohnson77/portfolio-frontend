import gsap from "gsap";

export const headerAnimation = (animationClasses, duration, ease) => {
  let classString = "";
  let classStringAlt = "";

  animationClasses.forEach((c, index) => {
    classStringAlt = `${classStringAlt}${c}-alt${
      index < animationClasses.length - 1 ? ", " : ""
    }`;
  });

  animationClasses.forEach((c, index) => {
    classString = `${classString}${index !== 0 ? ", " : ""}${c}`;
  });

  gsap.from(classString, {
    duration,
    y: -100,
    autoAlpha: 0,
    ease,
  });
  gsap.from(classStringAlt, {
    duration,
    y: 100,
    autoAlpha: 0,
    ease,
  });
};
