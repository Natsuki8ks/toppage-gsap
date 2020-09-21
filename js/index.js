
const tl = gsap.timeline({ default: { ease: 'power1.out' } });


tl.to('.text', { y: "-20%", duration: 1, stagger: 0.2, scale: 1.05 });
// ??

tl.to('.slider', { y: "-100%", duration: 1.5, delay: 0.4});

tl.to('.intro', { y: "-100%", duration: 1}, "-=1");
// 1 second faster

tl.to('nav', {opacity: 0.8}, {opacity: 1, duration: 1}, '-=1');