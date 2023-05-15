import React from 'react';
import { Element } from 'react-scroll'
import { SocialLinks, JonahBio } from '../../edits';
import tiktok from '../media/TikTok.png'

import Headshot from '../media/Gallery/4.jpg'

import RM from "../media/Resume.pdf"
import RMJPG from "../media/Resume.jpg"

const Resume = () => {
	return (
	<Element 
		name="resume" 
		className="
			bg-no-repeat bg-cover bg-gradient-to-br from-lightMid to-mid
			object-right
			pb-1
			mb-0
			
			pt-20
		"
	>
		<div>
			<div className="
				sm:mx-20
				text-white
			">
				<div // Polaroid 
				className='flex
				justify-center'>
					<div className='rotate-2  bg-gradient-to-tr from-gray-100 to-gray-200'>

						<div // Blue Button
							className='rotate-45 h-8 w-8 border-2 border-solid border-x-blue-800 border-t-blue-800 border-b-blue-900 bg-blue-600 rounded-[50%] absolute left-1/2 top-[-15px]'>
							<div className=' h-4 w-[19px] ml-[3px] border-t-2 border-solid border-t-white-200 rounded-[50%]'></div>
						</div>
						
						<img src={Headshot} alt="Headshot" className="bg-gradient-to-tr from-white to-gray-100 p-2 w-80 h-80  object-cover"/>
						<div className='font-ShadowsIntoLight text-mid text-[3rem] text-center'>
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
					<a 
						href={SocialLinks.TikTok} 
						style={{color:"#FF0000"}} 
						target="_blank" 
						rel="noreferrer">
							<img className='w-8 m-1' alt='TikTok' src={tiktok}/>
					</a>
				</div>
				<div className='
					text-[1.5rem] lg:text-3xl relative rotate-1 md:mx-20 lg:mx-64 lg:my-32 mx-4
					my-12 p-8 bg-slate-100 text-Darker border-4 border-solid border-t-slate-200 border-l-slate-200 border-b-slate-300 border-r-slate-300
				'>
					<div // Green Button
						 className='rotate-45 h-8 w-8 border-2 border-solid border-x-green-800 border-t-green-800 border-b-green-900 bg-green-600 rounded-[50%] absolute left-1/2 top-[-15px]'>
						<div className=' h-4 w-[19px] ml-[3px] border-t-2 border-solid border-t-white-200 rounded-[50%]'></div>
					</div>

					<span className='text-black text-3xl lg:text-[2.5rem] pr-1' >Jonah Harmon</span> {JonahBio}
				</div>
				
			</div>
		</div>
		<div className='flex justify-center relitive'>
			
		<a 
			href={RM} 
			className="
				select-none 
				flex 
				justify-center
				w-3/4
				border-8 border-sec-500 rounded-md 
				bg-black 
				mb-16
				relative
				
			" 
			target="_blank" 
			rel="noreferrer"
		>
				<div // Yellow Button
						className='rotate-45 h-8 w-8 border-2 border-solid border-x-yellow-800 border-t-yellow-800 border-b-yellow-900 bg-yellow-600 rounded-[50%] absolute left-[10%] z-10 top-[-20px]'>
					<div className=' h-4 w-[19px] ml-[3px] border-t-2 border-solid border-t-white-200 rounded-[50%]'></div>
				</div>

				<div // yellow Button
						className='rotate-45 h-8 w-8 border-2 border-solid border-x-yellow-800 border-t-yellow-800 border-b-yellow-900 bg-yellow-600 rounded-[50%] absolute right-[15%] z-10 top-[-18px]'>
					<div className=' h-4 w-[19px] ml-[3px] border-t-2 border-solid border-t-white-200 rounded-[50%]'></div>
				</div>

			<img 
			src={RMJPG} 
			alt="About" 
			className='
				select-none 
				hover:opacity-75 
				hover:cursor-pointer 
				duration-300 
				delay-50
				w-full
				' 
			/>
		</a>
	</div>
		
	<div className='flex justify-center'>
		<a href={RM} className="
			bg-gray-100 		
			font-Merriweather 
			text-navy				hover:text-mid 
			border-4	border-gray-100
			lg:text-2xl
			mb-32

			px-5		py-3 		
			rounded 
			hover:bg-lightMid 
			cursor-pointer 
			transition		ease-out		duration-300		delay-50 
			md:w-72		lg:w-96 
			" target="_blank" rel="noreferrer">
			View and Download Resume
		</a>
	</div>
		
	</Element>
	);
};

export default Resume;