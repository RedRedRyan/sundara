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

					Empowering  farmers with solar cabinet dryers
					reducing food losses, and increase incomes, by harnessing sustainable, eco-friendly technology.

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

						A future where solar energy transforms food preservation
						helping communities reduce waste, enjoy healthier food,
						and grow stronger economies.

					</ScrambledText>

				</div>
				</div>

				<div className="members">
					{teamList.map((member, index) => (

						<div className="team-card md:col-span-6" key={index}>
							<figure>
								<img src={member.image} alt={member.name} />
							</figure>
							<div className="card-body">
								<h2 className="card-title">{member.name}</h2>
								<p>{member.description}</p>
								<div className=" mt-5 flex-center">
									<a href={member.link} className="btn-link" target="_blank" rel="noopener noreferrer">
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
