import React from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";



const Hero = () => {

 
 useGSAP(() => {

	const heroSplit = new SplitText(".title", {
	 type: "chars, words",
	});
	
	const paragraphSplit = new SplitText(".subtitle", {
	 type: "lines",
	});
	
	// Apply text-gradient class once before animating
	heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));
	

	gsap.from(heroSplit.words, {
	 xPercent: 100,
	 duration: 1.8,
	 ease: "bounce.in",
	 stagger: 0.06,
	});
	
	gsap.from(paragraphSplit.lines, {
	 opacity: 0,
	 yPercent: 100,
	 duration: 1.8,
	 ease: "expo.out",
	 stagger: 0.06,
	 delay: 1,
	});
	
	gsap.timeline({
		scrollTrigger: {
		  trigger: "#hero",
		  start: "top top",
		  end: "bottom top",
		  scrub: true,
		},
	  })
	  .to(".hero-sun", {
		y: 0,
		rotation: 180,
		ease: "none"
	  }, 0)
		gsap.to(".hero-sun", {y:-100})





	
 }, []);
  return (
	<section id = 'hero'>
		
		<h1>Sundara <br/> Africa</h1>
		<img 
		src='/images/sunny.png'
		alt="hero-sun"
		className='hero-sun'/>
		<div className='body'>
			<div className='content'>
				
				<div className='space-y-5 hidden md:block'>
					<p> Solar Cabinet Dryer</p>
					<p className='subtitle'>
						Thermo controlled vents <br/> and humidity sensors
					</p>
				</div>
			</div>
		</div>
	</section>
  )
}

export default Hero