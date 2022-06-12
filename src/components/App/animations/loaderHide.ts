import gsap from "gsap";

export async function loaderHide() {
  const title: HTMLElement | null = document.querySelector(".app__title");
  const loader: HTMLElement | null = document.querySelector(".loader__wrapper");

  if (!title || !loader) return;

  loader.classList.add("stop");

  const topTitle = title.getBoundingClientRect().top;
  const topLoader = loader.getBoundingClientRect().top;

  await gsap.to(".loader__wrapper > *", {
    duration: 1,
    ease: "expo.oout",
    stagger: 0.15,
    y: (topLoader - topTitle) * -1,
  });
}
