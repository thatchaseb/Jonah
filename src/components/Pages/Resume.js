import React from 'react';
import { Element } from 'react-scroll'

import RM from "../media/Resume.pdf"
import RMJPG from "../media/Resume.jpg"

import resumePic from "../media/ResumePicture.jpg"

const Resume = () => {
	return (
	<Element 
		name="resume" 
		className="
			bg-no-repeat bg-cover bg-resumeBackground 
			pb-8
			mb-0
			relative 
			sm:bg-[left_top_-2rem] bg-[left_top_0rem] 
			grid grid-cols-2
		"
	>
		<div>
			<div className="
				font-Merriweather 
				text-[3rem] lg:text-[4rem] 
				lg:ml-20 ml-4
				md:mt-28 
				text-white
				
			">
				<div>
					Resume
				</div>
				<div 
					className="
						drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]
				 		font-bold  
				 		text-3xl lg:text-5xl md:text-4xl 
				 	"
				 >
					<a  
						href={"https://www.facebook.com/sarah.williams.144734"} 
						style={{color:"#4267B2"}} 
						target="_blank" 
						rel="noreferrer"
					>	
						<i className="facebook icon" style={{color:"#4267B2"}}></i>
					</a>                 
					<a  
						href={"https://www.instagram.com/sarahbrackett1993/"} 
						style={{color:"#458eff"}} 
						target="_blank" 
						rel="noreferrer"
					>	
						<i className="instagram icon" style={{color:"#458eff"}}></i>
					</a>                
					<a  
						href={"https://www.youtube.com/@jitterbugdancer"} 
						style={{color:"#FF0000"}} 
						target="_blank" 
						rel="noreferrer"
					>					
						<i className="youtube icon" style={{color:"#FF0000"}}></i>
					</a>
				</div>
			</div>
		</div>
	<a 
		href={RM} 
		className="
			select-none 
			lg:mt-44 lg:mr-24 mt-32 mb-8 mr-6 

			border-8 border-sec-500 rounded-md 
			bg-black 
		" 
		target="_blank" 
		rel="noreferrer"
	>
		<img src={RMJPG} alt="About" className='select-none hover:opacity-75 hover:cursor-pointer duration-300 delay-50' />
	</a>
	<div>
		
	</div>
		<a href={RM} className="
			bg-gray-100 		hover:bg-navy
			font-Merriweather 
			text-navy				hover:text-gray-200 
			border-4	border-gray-100
			lg:text-2xl
			mb-12		mr-6 
			px-5		py-3 		
			rounded 
			hover:bg-main 
			cursor-pointer 
			transition		ease-out		duration-300		delay-50 
			md:w-72		lg:w-96 
			" target="_blank" rel="noreferrer">
			View and Download Resume
		</a>
		
	</Element>
	);
};

export default Resume;