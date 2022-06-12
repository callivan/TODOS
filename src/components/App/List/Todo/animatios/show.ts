import gsap from "gsap";

export function showTodo() {
  gsap.to(".todo", {
    delay: 0.5,
    duration: 0.5,
    ease: "expo.out",
    x: 0,
    opacity: 1,
  });
}
