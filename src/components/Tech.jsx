

import {SplitText} from "gsap/all";
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

const Tech = () => {
    const main = useRef();
    const smoother = useRef();

    const scrollTo = () => {
        smoother.current.scrollTo('.box-c', true, 'center center');
    };
    useGSAP(() => {
        const titleSplit = SplitText.create('#about h2', {
            type: 'words'
        })



        const scrollTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#tech',
                start: 'top center'
            },

        })



            .from(titleSplit.words, {
                opacity: 0, duration: 1, yPercent: 100, ease: 'expo.out', stagger: 0.02
            })
            .from('.top-grid div, .bottom-grid div', {
                opacity: 0, duration: 1, ease: 'power1.inOut', stagger: 0.04,
            }, '-=0.5')

        scrollTimeline.fromTo('.tec',  {y:0,x:0},{y:-200,x:200})
        gsap.timeline({
            trigger: "#tech",
            start: "top top",
            end: "bottom top",
            scrub: true,
        })
            .to(".tech-sun", {
                y: -200,
                rotation: 180,
                ease: "none"
            },0)

    })
    return (
        <div id="tech">

            <div className="mb-16 md:px-0 px-5">
                <div className="content">
                    <div className="md:col-span-8">
                        <p className="badge">Technology</p>
                        <h2>
                            Powered by the sun <span className="text-white">-</span>
                            monitored from your phone.
                        </h2>
                    </div>

                    <div className="sub-content">
                        <p>Ready to Transform Your Harvest?<br/>Robust engineering with smart software to make premium drying simple and accessible.
                        </p>

                        <div>
                            <p className="md:text-3xl text-xl font-bold">
                                <span>4.5</span>/5
                            </p>
                            <p className="text-sm text-white-100">
                                More than +12000 customers
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="top-grid">
                <div className="md:col-span-3">
                    <div  className="noisy" />
                    <img src="/images/sack-rice.jpg" alt="grid-img-1" />
                </div>

                <div className="md:col-span-6">
                    <div  className="temp" />

                </div>

                <div className="md:col-span-3">
                    <div  className="noisy" />
                    <img src="/images/white-rice.jpg" alt="grid-img-5" />
                </div>
            </div>

            <div className="bottom-grid">
                <div id='tempy' className="md:col-span-2">
                    <div  className="noisy" />
                    <img src="/images/abt4.png" alt="grid-img-3" />
                </div>

                <div className="md:col-span-8">
                    <div  className="noisy" />
                    <img src="/images/temp-check.png" alt="grid-img-4" />
                </div>
                <div  id='tempy' className="md:col-span-2">
                    <div  className="noisy" />
                    <img src="/images/abt4.png" alt="grid-img-4" />
                </div>
            </div>

        </div>
    )
}
export default Tech
