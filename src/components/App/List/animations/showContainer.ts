import gsap from "gsap";

export function showContainer() {
  gsap.to(".todos", { duration: 1, ease: "expo.out", opacity: 1 });
}
