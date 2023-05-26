import agency from "./agency.png";
import ui from "./ui-ux-design.png";
import web  from "./web-design.png";
import development from "./web-development.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";


import { useEffect, useRef } from "react";

export const Parallax = () => {
  const containerRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const sections = gsap.utils.toArray(".panel");
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".container1",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + containerRef.current.offsetWidth,
      },
    });
  }, []);

  return (
      <>
      <div ref={containerRef} className="container1">
      
        <section className=" panel ">
        <div  class="horizontal-wrapper-content">
        <div class="horizontal-item-content">
<h3 class="horizontal-item-heading">Web Design</h3>
<p class="horizontal-item-text">We design websites that look amazing, convey the right brand message and are highly oriented for conversion.</p>
<a data-w-id="9b2430ec-f749-4843-8b3d-24d15879fbb1" href="#" class="arrow-link small w-button">Learn more </a></div>
<div class="horizontal-item-image-wrapper bg-light-red">
<img src="https://assets.website-files.com/63f8ca18cae25871c18fd72d/64062922a09751a1098ce054_web-design-agency.png" loading="eager" alt="Web Design Agency" class="horizontal-item-image" /></div>
       </div>
        </section>
        <section className="panel ">
        <div  class="horizontal-wrapper-content">
        <div class="horizontal-item-content">
<h3 class="horizontal-item-heading">Web Development</h3>
<p class="horizontal-item-text">We develop fast, perfectly responsive, and SEO-optimized websites built with the best development practices of 2023.</p>
<a data-w-id="df44fcd8-160e-8fd9-95b5-6d669533aa5a" href="#" class="arrow-link small w-button">Learn more </a></div>
<div class="horizontal-item-image-wrapper bg-light-blue">
<img src="https://assets.website-files.com/63f8ca18cae25871c18fd72d/6414a7979cc623601c053b0c_web-development-agency.png" loading="eager" alt="Web Development Agency" class="horizontal-item-image" /></div>
        </div>
        </section>
        <section className=" panel ">
        <div  class="horizontal-wrapper-content">
        <div class="horizontal-item-content">
<h3 class="horizontal-item-heading">UI/UX Design</h3>
<p class="horizontal-item-text">We design intuitive web &amp; mobile apps focused on driving user engagement and increasing users retention.</p>
<a data-w-id="0f767243-7589-3c42-97b8-98656a6715c7" href="#" class="arrow-link small w-button">Learn more </a></div>

<div class="horizontal-item-image-wrapper center-image bg-light-yellow">
<img src="https://assets.website-files.com/63f8ca18cae25871c18fd72d/6414ba53ec407864f180cfe0_ui-ux-design-agency.png" loading="eager" alt="UI/UX Design Agency" class="horizontal-item-image" /></div>
        </div>
        </section>
       
        <section className="panel">
        <div  class="horizontal-wrapper-content">
        <div class="horizontal-item-content">
<h3 class="horizontal-item-heading">Brand Design</h3>
<p class="horizontal-item-text">We transform businesses into world-class brands by going through a well thought brand identity design process.</p>
<a data-w-id="f21e61bb-81d1-df41-606c-efa393909df2" href="#" class="arrow-link small w-button">Learn more </a></div>

<div class="horizontal-item-image-wrapper center-image bg-light-green">
<img src="https://assets.website-files.com/63f8ca18cae25871c18fd72d/64062930acab8e66b2e103de_brand-design-agency.png" loading="eager" alt="Brand Design Agency" class="horizontal-item-image" /></div>
        </div>
        </section>
        <section className="panel">
        <div  class="horizontal-wrapper-content">
        <div class="horizontal-item-content">
<h3 class="horizontal-item-heading">Conversion Optimization</h3>
<p class="horizontal-item-text">We help you A/B test your website core landing pages to boost your conversion rates and get more leads.</p>
<a data-w-id="132deaa6-cec6-eb18-6f1d-09a5716fdcd3" href="#" class="arrow-link small w-button">Learn more</a></div>

<div class="horizontal-item-image-wrapper bg-light-purple">
<img src="https://assets.website-files.com/63f8ca18cae25871c18fd72d/6414a9110b22bf8cbfe6a1dc_conversion-optimization-agency.png" loading="eager" alt="Conversion Optimization Agency" class="horizontal-item-image"/></div>
        </div>
        </section>
        <section className="panel">
        <div  class="horizontal-wrapper-content">
        <div class="horizontal-item-content">
<h3 class="horizontal-item-heading">Automation</h3>
<p class="horizontal-item-text">We help your business gain leverage and efficiency through automation using simple, yet powerful NoCode tools.</p>
<a data-w-id="25e52700-82e0-3151-2276-69b78ac6d75c" href="#" class="arrow-link small w-button">Learn more </a></div>
<div class="horizontal-item-image-wrapper center-image bg-light-blue">
<img src="https://assets.website-files.com/63f8ca18cae25871c18fd72d/6406293061194968c31ebec3_automation-agency.png" loading="eager" alt="Automation Agency" class="horizontal-item-image"/></div>
       </div>
        </section>
      </div>

  </>
  )
};
export default Parallax;