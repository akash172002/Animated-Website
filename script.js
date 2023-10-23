//LOCOMOTIVE JS FOR SMOOTH SCROLLING

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

//GSAP ANIMATIOn
gsap.from(".nlink", {
  stagger: 0.2,
  y: 10,
  duration: 1,
  ease: Power3,
  opacity: 0,
});

Shery.textAnimate("#headings h1" /* Element to target.*/, {
  style: 2,
  y: 10,
  delay: 0.3,
  duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

gsap.from(".anim2", {
  y: 30,
  stagger: 0.3,
  opacity: 0,
  ease: Expo,
  duration: 1,
});

Shery.imageEffect("#imageText img", {
  style: 3,
  config: {
    uFrequencyX: { value: 14.88, range: [0, 100] },
    uFrequencyY: { value: 15.7, range: [0, 100] },
    uFrequencyZ: { value: 61.98, range: [0, 100] },
    geoVertex: { range: [1, 64], value: 35.36 },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.75 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.5, range: [1, 5] },
    scrollType: { value: 0 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
});

Shery.imageEffect(".imgeff img", {
  style: 5,
  config: {
    a: { value: 2, range: [0, 30] },
    b: { value: -0.49, range: [-1, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.8333860647046711 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.03, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 17.14 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
    uFrequencyX: { value: 15.7, range: [0, 100] },
    uFrequencyY: { value: 18.18, range: [0, 100] },
    uFrequencyZ: { value: 23.14, range: [0, 100] },
  },
});

gsap.from("#imagetext img", {
  y: "70",
  opacity: 0,
  duration: 2,
  ease: Expo,
});

Shery.imageEffect("#bimg", {
  style: 5,
  config: {
    a: { value: 0.5, range: [0, 30] },
    b: { value: -0.98, range: [-1, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 2.1868359945355924 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.13, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: false },
    onMouse: { value: 0 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2], _gsap: { id: 30 } },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },

  gooey: true,
});

document.querySelector("#future button").addEventListener("mouseover", () =>
  gsap.to("#future video", {
    opacity: 1,
    duration: 1,
    ease: Power4,
  })
);

document.querySelector("#future button").addEventListener("mouseleave", () =>
  gsap.to("#future video", {
    opacity: 0,
    duration: 1,
    ease: Power4,
  })
);
