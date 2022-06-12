import gsap from "gsap";

export function showControls() {
  gsap.to(".controls > *", {
    delay: 1,
    duration: 1,
    stagger: 0.15,
    ease: "expo.out",
    x: 0,
    opacity: 1,
  });
}
