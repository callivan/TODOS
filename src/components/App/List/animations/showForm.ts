import gsap from "gsap";

export function showForm() {
  gsap.to(".todos__input", {
    delay: .8,
    duration: 1,
    ease: "expo.out",
    x: 0,
    opacity: 1,
  });
  gsap.to(".todos__btn", {
    delay: .8,
    duration: 1,
    ease: "expo.out",
    x: 0,
    opacity: 1,
  });
}
