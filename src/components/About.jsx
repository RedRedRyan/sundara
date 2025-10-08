import React from 'react'
import ChromaGrid from "../bits/ChromaGrid.jsx";
import ScrambledText from "../bits/ScrambledText.jsx";
import {teamList} from "../../constants/index.js";
import {useGSAP} from "@gsap/react";
import {SplitText} from "gsap/all";
import gsap from "gsap";

const About = () => {
	useGSAP(()=>{
		const storySplit = new SplitText('txt',{type:'chars,words'});

		gsap.from(storySplit.chars,{
			opacity: 0,
			yPercent: 100,
			duration: 1.5,
			ease: 'expo.out',
			stagger: 0.05,
			delay: 1,

		});
		gsap.timeline({
			scrollTrigger: {
				trigger: '#about',
				start: 'top top',
				end: 'bottom top',
				scrub: true,
			}
		})
			.to('.ray', {y: -300}, 0);

	})
    return (
        <section id="about">

			<div className='content'>

				<div className={'story-grid'}>

			<div className="md:col-span-6">
				<h1 className={'head'}>Mission</h1>
				<ScrambledText

					className="txt"

					radius={100}

					duration={1.2}

					speed={0.5}

					scrambleChars={".:"}

				>
					Empower communities through innovative,
					sustainable solar drying solutions that improve food preservation,
					reduce waste and contribute to economic growth through the efficient utilization of environment friendly
					technologies among small scale farmers.

				</ScrambledText>

			</div>

				<div className="md:col-span-6">
					<h1 className={'head'}>Vision</h1>
					<ScrambledText

						className="txt"

						radius={100}

						duration={1.2}

						speed={0.5}

						scrambleChars={".:"}

					>

						To revolutionize food preservation with solar energy
						so that communities will reduce waste and improve the quality of food
						with sustainable economic enhancement through innovative ,appropriate solar drying technologies.
					</ScrambledText>

				</div>
				</div>

				<div className="members">
					{teamList.map((member, index) => (

						<div className="team-card md:col-span-6" key={index}>
							<figure>

							</figure>
							<div className="card-body">
								<h2 className="card-title">{member.name}</h2>
								<p>{member.description}</p>
								<div className=" mt-5 flex-center">
									<a href={member.link} className="badge" target="_blank" rel="noopener noreferrer">
										View
									</a>
								</div>
							</div>
						</div>
					))}
				</div>

			</div>
		</section>
    )
}
export default About
