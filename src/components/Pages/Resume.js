import React from 'react';
import { Element } from 'react-scroll'
import { SocialLinks, JonahBio } from '../../edits';

import Headshot from '../media/Gallery/4.jpg'

import RM from "../media/Resume.pdf"
import RMJPG from "../media/Resume.jpg"
import TikTokIcon from "../media/TikTok.png"
import resumePic from "../media/ResumePicture.jpg"

const Resume = () => {
	return (
	<Element 
		name="resume" 
		className="
			bg-no-repeat bg-cover bg-gradient-to-tr from-lightMid to-mid
			object-right
			pb-8
			mb-0
			
			sm:bg-[left_top_-2rem] bg-[left_top_0rem] 
			pt-20
		"
	>
		<div>
			<div className="
				mx-20
				text-white
			">
				<div className='flex
				justify-center'>
					<div className='bg-gradient-to-tr from-gray-100 to-gray-200'>
						<img src={Headshot} alt="Headshot" className="bg-gradient-to-tr from-white to-gray-100 p-2 w-60 h-60  object-cover"/>
						<div className='font-ShadowsIntoLight text-mid text-[2rem] text-center'>
							About Me
						</div>
					</div>

				</div>
				<div 
					className="
						drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]
				 		font-bold  
				 		text-3xl lg:text-5xl md:text-4xl 
						flex justify-center mt-8
				 	"
				 >
					
					<a  
						href={SocialLinks.Twitter} 
						style={{color:"#00acee"}} 
						target="_blank" 
						rel="noreferrer"
					>	
						<i className="twitter icon" style={{color:"#00acee"}}></i>
					</a>                 
					<a  
						href={SocialLinks.Instagram} 
						style={{color:"#458eff"}} 
						target="_blank" 
						rel="noreferrer"
					>	
						<i className="instagram icon" style={{color:"#458eff"}}></i>
					</a>                
					<a  
						href={SocialLinks.YouTube} 
						style={{color:"#FF0000"}} 
						target="_blank" 
						rel="noreferrer"
					>					
						<i className="youtube icon" style={{color:"#FF0000"}}></i>
					</a>
				</div>
				<div className='
					text-[1.5rem] lg:text-[2.5rem]
					mt-12 
				'>
					{JonahBio}
				</div>
				
			</div>
		</div>
	<a 
		href={RM} 
		className="
			select-none 
			mx-10
			lg:mr-24 
			md:mt-28 mt-12 
			mb-8 mr-6 

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