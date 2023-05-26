import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import Atropos from 'atropos/react';


function Hero() {
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  const bookBtn = () => {
    document
      .querySelector("#hero")
      .scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.pageYOffset > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);
  return (
    <>
    <div style={{ position: "relative", zIndex: "1" }}>
    <div className="background-gradient-purple ">
    <section id="home" className="hero-section">
    <div className="container">
     <div class="page-padding">
     <div class="container-large">
     <div class="z-2">
     <div class="padding-top padding-xxhuge">
     <div data-w-id="3bb5572c-3e07-5c21-c5dd-de29319af96d" class="nav-animation-trigger">
     </div>
     <div class="text-align-center">
     <div class="margin-bottom margin-small">
     <div class="display-fluid-h1">We Design,Develop & Promote</div></div></div>
     <div class="max-width-large align-center">
     <div class="margin-bottom margin-small">
     <h1 class="text-size-xlarge-text-weight-medium">Create personalized &amp; interactive product demos that close deals.</h1></div></div>
     <a href="#" class="button is--gold is--modal-trigger w-button">Get Started</a></div></div></div>
     <div class="container">
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
</div> 
     </div></div>
      </section>
      </div>
</div>

     <div className="middle-image">
     
     <Atropos className="atropos"
     style={{ zIndex: "0" }}
     activeOffset={40}
     shadowScale={1.05}
     onEnter={() => console.log('Enter')}
     onLeave={() => console.log('Leave')}
     onRotate={(x, y) => console.log('Rotate', x, y)}
        
      >
     <img className=" horizon"
  src="https://horizon-ui.com/static/media/main-hero-image.c18f68e8fec5f9091e4c.png" 
  style={{ maxWidth: '1200px', height: '600px' }}/>
   </Atropos>
    </div>
    <div className="middle-container">
    <div className="mini">
      <h2 className="h2h">Our Services</h2>
       <p className="pr">High-impact design & <br/>Development Services</p>
       <a data-w-id="f112e12f-5371-83e5-d9d3-1049f578da80" href="#" class="button-primary small hide-on-mb w-button">Get in touch </a>
   </div>
    </div>
    
    </>


   );
  }

export default Hero;