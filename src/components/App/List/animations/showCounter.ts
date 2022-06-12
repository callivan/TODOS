import gsap from "gsap";

export function showCounter() {
  gsap.to(".todos__left-counter", {
    delay: 1,
    duration: 1,
    ease: "expo.out",
    x: 0,
    opacity: 1,
  });
}
