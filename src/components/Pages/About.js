import React from 'react';
import { Element } from 'react-scroll'

import RM from "../media/Resume.pdf"
import RMJPG from "../media/Resume.jpg"

import resumePic from "../media/ResumePicture.jpg"


const About = () => {
	return (
	<Element name="about" 
		className="
			mx-20 md:mx-32 lg:mx-48 xl:mx-64
			bg-no-repeat 
			bg-cover 
			relative 
			sm:bg-[left_top_-2rem] bg-[left_top_0rem]
		"
	>
		<div 
			className="
				flex 
				justify-between 
				my-8
			" 
		>
			<div class="font-Merriweather text-[4rem] mt-8 text-navy">
				About Sarah
			</div>
		</div>
			<div 
			className='	
				p-3
				text-xl
				text-navy
				text-justify 
				border-solid rounded
				bg-[#FFFFFFAF]
			'>
			
				<img src={resumePic} alt="Sara aluring" className="sm:float-left mr-8 border-solid border-navy  object-top object-cover w-72 overflow-hidden"/>
			
				<span className="font-bold text-2xl">Sarah Brackett</span> is currently an acting intern at Florida Repertory Theatre. She is an Atlanta native but has spent the last few years living in New York City with her husband, fellow actor, Chase. She graduated from Reinhardt University with a BFA in musical theatre in 2017. Since that time she has had the opportunity to work on some wonderful productions, including: The Importance of Being Earnest, And Then There Were None, Incident at our Lady of Perpetual Help, Ella Enchanted the Musical, Macbeth, and Elephant and Piggie: We’re in a Play! (Florida Repertory Theatre); Beauty and the Beast, Life Could be a Dream, Junie B. Jones the Musical, James and the Giant Peach (Round Barn Theatre); A Christmas Carol National Tour (The Nebraska Theatre Caravan); The Sirens (The Pennsylvania Renaissance Faire); and She Kills Monsters, Triassic Parq (Out of Box Theatre). Shout out to Matthew Corozine Studios and Tyler Knauf Studios for their incredible guidance and support. She wants to thank her family for their continued love and support.
			</div>
	
		
	</Element>
	);
};

export default About;