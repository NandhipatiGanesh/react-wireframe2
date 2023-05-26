import { useState } from "react";

export  function Yesware(){
  return(
    <img
    src="https://assets.website-files.com/63f8ca18cae25871c18fd72d/641359577368eebff4999993_yesware-brix-agency-client.svg" 
    alt="Yesware - BRIX Agency Client"
    />
  )

}
export  function Upside(){
  return(
    <img src="https://assets.website-files.com/63f8ca18cae25871c18fd72d/64135957f81459097860231e_upside-brix-agency-client.svg" 
    alt="Upside - BRIX Agency Client"
    />
  )

}

export  function Paradox(){
  return(
    <img src="https://assets.website-files.com/63f8ca18cae25871c18fd72d/64135957db7f1b01a572a7e1_paradox-brix-agency-client.svg"
     alt="Paradox - BRIX Agency Client"
     />
  )

}
export  function CertifID(){
  return(
    <img src="https://assets.website-files.com/63f8ca18cae25871c18fd72d/64135957abdff7992eabd97f_certifid-brix-agency-client.svg" 
    alt="CertifID - BRIX Agency Client"/>
  )

}
export function  Gqueues(){
  return(
    <img src="https://assets.website-files.com/63f8ca18cae25871c18fd72d/6413595796c301139ced0aef_gqueues-brix-agency-client.svg"
    alt="Gqueues"
    />
  )
}

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div id="testimonials" class="section bg-neutral-200 wf-section">
      <div class="container-default w-container">
         <div data-w-id="e3c483bb-d55a-b490-4b50-175c950dd54a"  class="inner-container _620px center text-center mg-bottom-40px">
           <h2 class="subtitle">Testimonials</h2>
              <p class="heading-size-h2">Don’t take our word for it</p>
                <p id="para-p2">Take a look at what our amazing clients have to say about us, and the great impact BRIX Agency has done on their businesses.</p></div>
      
      
    <div className="container2">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
        <Yesware />
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
        <Upside />
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
        <Paradox />
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          <CertifID />
        </button>
        <button
          className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(5)}
        >
          <Gqueues />
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
             <div class="testimonials-tab-mask w-tab-content">
               <div data-w-tab="Tab 1" class="w-tab-pane w--tab-active" id="w-tabs-0-data-w-pane-0" role="tabpanel" aria-labelledby="w-tabs-0-data-w-tab-0">
                 <div class="card testimonials-tabs">
                 <div class="testmonials-tabs-left-content">
                   <div class="testimonial-heading">“Our conversion rate from website visit to trial has increased from 2.3% to 5.1%”</div>
                    <div class="testimonials-tabs-numbers-wrapper">
                      <div class="testimonial-tab-number-wrapper">
                        <div class="testimonial-tab-stats-number">2.1<span class="color-accent yesware">X</span></div>

                         <div class="testimonial-stats-description">Conversion&nbsp;Rate</div></div>
                           <div class="testimonial-tab-number-wrapper">
                            <div class="testimonial-tab-stats-number">67<span class="color-accent yesware">%</span></div>
                             <div class="testimonial-stats-description">Increase in Website Speed</div></div></div>
                              <div class="divider testimonial-tab"></div>
                               <div class="testimonial-tab-customer-wrapper">
                                <div class="testimonial-tab-customer-info">
                                 <div class="testimonial-tab-customer-image-wrapper">
                                   <img width="58" loading="eager" 
                                     src="https://assets.website-files.com/63f8ca18cae25871c18fd72d/641362c06a930e74e707b819_ian-adams-brix-agency-client.jpg" 
                                        alt="Ian Adams - BRIX Agency Client" class="testimonial-tab-customer-image"/></div>

                                      <div class="testimonials-tab-avatar-name-text">
                                      <div class="testimonials-tab-avatar-name">Ian Adams</div>
                                      <div class="testimonials-tab-avatar-role">VP of Sales &amp; Marketing at Yesware</div></div></div>
                                        <div class="testimonial-tab-logo-wrapper">
                                        <img loading="eager"
                                         src="https://assets.website-files.com/63f8ca18cae25871c18fd72d/64135d14487c90385229eceb_yesware-brix-agency-client.svg" 
                                         alt="Yesware - BRIX Agency Client"/></div></div></div>

                                          <div class="testmonials-tabs-right-content yesware">
                                          <div class="position-absolute image-gallery-btn-wrapper">
                                            <a href="/portfolio/yesware" class="btn-gallery w-inline-block" 
>

                                          <div class="position-absolute btn-gallery-wrapper">
                                          <div class="line-rounded-icons"></div></div></a></div>
                                          <img loading="lazy" 
                                            src="https://assets.website-files.com/63f8ca18cae25871c18fd72d/6413635bc595d5152fdbc60e_yesware-testimonial-for-brix-agency.png" 
                                             alt="Yesware Testimonial for BRIX Agency" 
                                              class="testimonial-tabs-image"/></div></div></div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
             <div data-w-tab="Tab 2" class="w-tab-pane" id="w-tabs-0-data-w-pane-1" role="tabpanel" aria-labelledby="w-tabs-0-data-w-tab-1">
                <div class="card testimonials-tabs">
                  <div class="testmonials-tabs-left-content">
                    <div class="icon-wrapper tabs-quote-icon">
                      <img loading="eager"
 src="https://assets.website-files.com/63f8ca18cae25871c18fd72d/6413665d75360607d0cd8b0b_upside-quote-icon.svg" 
 alt="Quote"
                        /></div>
                          <div class="testimonial-heading">BRIX Agency expertise has been invaluable to us”</div>
                          <div class="testimonials-tabs-numbers-wrapper">
                          <div class="testimonial-tab-number-wrapper">
                          <div class="testimonial-tab-stats-number">120<span class="color-accent upside">+</span></div>
                          <div class="testimonial-stats-description">pages developed</div></div>
                          <div class="testimonial-tab-number-wrapper">
                          <div class="testimonial-tab-stats-number">3<span class="color-accent upside">+</span></div>
                          <div class="testimonial-stats-description">years of collaboration</div></div></div><div class="divider testimonial-tab"></div>
                          <div class="testimonial-tab-customer-wrapper">
                          <div class="testimonial-tab-customer-info">
                          <div class="testimonial-tab-customer-image-wrapper">
                          <img width="58" loading="eager" 
                             src="https://assets.website-files.com/63f8ca18cae25871c18fd72d/641362c1abdff744c9ac8c1c_alexcia-chambers-brix-agency-client.jpg"
                                   alt="Alexcia Chambers - BRIX Agency Client" 
                                class="testimonial-tab-customer-image"/></div>

                              <div class="testimonials-tab-avatar-name-text">
                              <div class="testimonials-tab-avatar-name">Alexcia Chambers</div>
                              <div class="testimonials-tab-avatar-role">Head of Corporate Marketing</div></div></div>

                              <div class="testimonial-tab-logo-wrapper">
                               <img loading="eager" 
                                  src="https://assets.website-files.com/63f8ca18cae25871c18fd72d/64135d14487c900ee629ecea_upside-brix-agency-client.svg" 
                                  alt="Upside - BRIX Agency Client"
                                 /></div></div></div>
                                  <div class="testmonials-tabs-right-content upside">
                                    <div class="position-absolute image-gallery-btn-wrapper">
                                    <a href="/portfolio/upside" class="btn-gallery w-inline-block" >
                                    <div class="position-absolute btn-gallery-wrapper">
                                    <div class="line-rounded-icons"></div></div></a></div>

                                 <img loading="lazy"
                                 src="https://assets.website-files.com/63f8ca18cae25871c18fd72d/6413635b96c301ffe0edc0bf_upside-testimonial-for-brix-agency.png" 
                                 alt="Upside Testimonial for BRIX Agency"
                                    class="testimonial-tabs-image upside-image"
                              /></div></div></div>


        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
            <div data-w-tab="Tab 3" class="w-tab-pane" id="w-tabs-0-data-w-pane-2" role="tabpanel" aria-labelledby="w-tabs-0-data-w-tab-2"><div class="card testimonials-tabs">
              <div class="testmonials-tabs-left-content">
               <div class="icon-wrapper tabs-quote-icon">
                 <img loading="eager"
                   src="https://assets.website-files.com/63f8ca18cae25871c18fd72d/6413665c40a2418dd635575e_paradox-quote-icon.svg"
                    alt="Quote"
                    /></div>
                  <div class="testimonial-heading mg-bottom-0">BRIX Agency has been crucial for our digital strategy and success. We’re so grateful to have such a trusted partner!”</div>
                    <div class="divider testimonial-tab"></div>
                     <div class="testimonial-tab-customer-wrapper">
                      <div class="testimonial-tab-customer-info">
                        <div class="testimonial-tab-customer-image-wrapper">
                          <img width="58" loading="eager"
                             src="https://assets.website-files.com/63f8ca18cae25871c18fd72d/641362c1a48954fc5149cd11_maddie-moe-brix-agency-client.jpg" 
                               alt="Maddie Moe - BRIX Agency Client"
                                class="testimonial-tab-customer-image"/></div>

                                    <div class="testimonials-tab-avatar-name-text">
                                      <div class="testimonials-tab-avatar-name">Maddie Moe</div>
                                        <div class="testimonials-tab-avatar-role">Marketing Designer at Paradox</div></div></div>
                                          <div class="testimonial-tab-logo-wrapper">
                                           <img loading="eager" 
                                            src="https://assets.website-files.com/63f8ca18cae25871c18fd72d/64135d134840d02748bef378_paradox-brix-agency-client.svg" 
                                            alt="Paradox - BRIX Agency Client"/></div></div></div>


                                             <div class="testmonials-tabs-right-content paradox">
                                               <div class="position-absolute image-gallery-btn-wrapper">
                                                  <a href="/portfolio/paradox" class="btn-gallery w-inline-block">
                                                    <div class="position-absolute btn-gallery-wrapper">
                                                       <div class="line-rounded-icons"></div></div></a></div>
                                                        <img loading="lazy" 
                                                          src="https://assets.website-files.com/63f8ca18cae25871c18fd72d/6413635b87ee575ad4c93c9e_paradox-testimonial-for-brix-agency.png" 
                                                          alt="Paradox Testimonial for BRIX Agency" class="testimonial-tabs-image"/></div></div></div>
        </div>
        <div
          className={toggleState === 4 ? " content active-content" : "content"}
        >
              <div data-w-tab="Tab 5" class="w-tab-pane" id="w-tabs-0-data-w-pane-4" role="tabpanel" aria-labelledby="w-tabs-0-data-w-tab-4">
                <div class="card testimonials-tabs">
                   <div class="testmonials-tabs-left-content">
                      <div class="testimonial-heading">“So far our new user signups have nearly doubled since launching the new website, so this project was well worth the investment”</div>
                        <div class="testimonials-tabs-numbers-wrapper">
                           <div class="testimonial-tab-number-wrapper">
                              <div class="testimonial-tab-stats-number">2<span class="color-accent gqueues">X</span></div>
                                  <div class="testimonial-stats-description">User signups</div></div>
                                    <div class="testimonial-tab-number-wrapper">
                                      <div class="testimonial-tab-stats-number">67<span class="color-accent gqueues">%</span></div>
                                         <div class="testimonial-stats-description">Increase in Website Speed</div>
                                             </div></div>
                                              <div class="divider testimonial-tab"></div>
                                                <div class="testimonial-tab-customer-wrapper">
                                                  <div class="testimonial-tab-customer-info">
                                                   <div class="testimonial-tab-customer-image-wrapper">
                                                     <img width="58" loading="eager" 
                                                          src="https://assets.website-files.com/63f8ca18cae25871c18fd72d/641362c0bb66b440170ae7f0_cameron-henneke-brix-agency-client.jpg" 
                                                              alt="Cameron Henneke - BRIX Agency Client" class="testimonial-tab-customer-image"/></div>
                                                                <div class="testimonials-tab-avatar-name-text">
                                                                 <div class="testimonials-tab-avatar-name">Cameron Henneke</div>
                                                                   <div class="testimonials-tab-avatar-role">Founder &amp; CEO at GQueues</div></div></div>
                                                                      <div class="testimonial-tab-logo-wrapper">
                                                                       <img loading="eager"
                                                                         src="https://assets.website-files.com/63f8ca18cae25871c18fd72d/64135d133347ad0b7660de6f_gqueues-brix-agency-client.svg" 
                                                                            alt="GQueues - BRIX Agency Client"/></div></div></div>
                                                                            <div data-w-id="b5b681b1-0a9c-3298-c7c7-e5c8e99d120a" class="testmonials-tabs-right-content gqueues">
                                                                               <div class="position-absolute image-gallery-btn-wrapper">
                                                                                 <a href="/portfolio/gqueues" class="btn-gallery w-inline-block" >
                                                                                    <div class="position-absolute btn-gallery-wrapper">
                                                                                      <div class="line-rounded-icons"></div></div></a></div>
                                                                                        <img loading="lazy" 
                                                                                            src="https://assets.website-files.com/63f8ca18cae25871c18fd72d/6413635b64e984ed8147d1b2_gqueues-testimonial-for-brix-agency.png"
                                                                                               alt="GQueues Testimonial for BRIX Agency" class="testimonial-tabs-image"/></div></div></div></div></div>
        
         <div
          className={toggleState === 5 ? " content active-content" : "content"}
        >
          <div>
            <div className=" btn-row">
          <a data-w-id="7bcdbf1a-1b34-b525-a8bf-9f0c09928107" href="https://brixagency.com/contact?utm_source=BRIX%20Agency&amp;utm_medium=Website&amp;utm_campaign=Homepage" class="button-primary w-button">Get in touch </a>
<a href="/portfolio" data-w-id="b9d7a469-9af7-d259-8418-46505f604c13" class="button-secondary w-button">Browse our portfolio </a></div></div>
    </div>
    </div>
    </div>
    </div>
    </div>    
   
  );
}

export default Tabs;