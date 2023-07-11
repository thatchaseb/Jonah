import React, {Suspense} from 'react';
import { Element } from 'react-scroll'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useMediaQuery } from 'react-responsive';

import { galleryPhotos } from '../../edits';
import { PoleroidHeaders } from '../../edits';


const Media = () => {

	const buttons = [
		<React.Fragment>
			<div // gray Button
				  className='rotate-45 h-8 w-8 border-2 border-solid border-x-gray-800 border-t-gray-800 border-b-gray-900 bg-gray-600 rounded-[50%] absolute left-1/2 top-[-15px]'>
				<div className=' h-4 w-[19px] ml-[3px] border-t-2 border-solid border-t-white-200 rounded-[50%]'></div>
			 </div>
		</React.Fragment>,
		<React.Fragment>
			<div // gray Button
					className='rotate-45 h-8 w-8 border-2 border-solid border-x-gray-800 border-t-gray-800 border-b-gray-900 bg-gray-600 rounded-[50%] absolute left-1/2 top-[-15px]'>
				<div className=' h-4 w-[19px] ml-[3px] border-t-2 border-solid border-t-white-200 rounded-[50%]'></div>
			</div>
		</React.Fragment>,
		<React.Fragment>
			<div // gray Button
					className='rotate-45 h-8 w-8 border-2 border-solid border-x-gray-800 border-t-gray-800 border-b-gray-900 bg-gray-600 rounded-[50%] absolute left-1/2 top-[-15px]'>
				<div className=' h-4 w-[19px] ml-[3px] border-t-2 border-solid border-t-white-200 rounded-[50%]'></div>
			</div>
		</React.Fragment>,
		<React.Fragment>
			<div // gray Button
					className='rotate-45 h-8 w-8 border-2 border-solid border-x-gray-800 border-t-gray-800 border-b-gray-900 bg-gray-600 rounded-[50%] absolute left-1/2 top-[-15px]'>
				<div className=' h-4 w-[19px] ml-[3px] border-t-2 border-solid border-t-white-200 rounded-[50%]'></div>
			</div>
		</React.Fragment>,
	]
	
	const rotations = [
		"-rotate-3",
		"-rotate-2",
		"-rotate-1",
		"rotate-1",
		"rotate-2",
		"rotate-3",
	]

  const renderedPhotos = galleryPhotos.map((item, index) => {
		const polaroidClass = `flex justify-center ${rotations[Math.floor(Math.random() * 4)]}`

    return (
      <React.Fragment key={index}>
        <div className="my-16 lg:w-[500px] md:w-[350px] w-[300px] lg:h-[500px] md:h-[350px] h-[300px] mx-auto">
					<a href={item.big} target="_blank" rel="noreferrer">
					<Suspense>
					<div //Polaroid
          	  className={polaroidClass} >
			    	<div className='bg-gradient-to-tr relative from-gray-100 to-gray-200'>
								{buttons[Math.floor(Math.random() * 4)]}
				  	  <img src={item.small} alt="Headshot" className="bg-gradient-to-tr from-white to-gray-100 p-2 lg:w-[500px] md:w-[350px] w-[300px] lg:h-[500px] md:h-[350px] h-[300px] object-cover"/>
			    	</div>
			  	</div>
						
							
						</Suspense>
					</a>
        </div>
      </React.Fragment>
    );
  });

	const isMobile = useMediaQuery({ query: `(max-width: 625px)` });


  return (
	<Element 
		name="media" 
		class="
			pb-1
			pt-8
			bg-gradient-to-br from-lightMid to-mid
	">
		<div 
			className="
				font-Merriweather 
				text-[4rem] lg:text-[5rem]
				mx-20 md:mx-32 lg:mx-48 xl:mx-64 
				mb-12 
				text-navy
			"
		>
			<div //Polaroid
          	  className='flex justify-center rotate-2'>
			    	<div className='bg-gradient-to-tr relative from-gray-100 to-gray-200'>
 	        	  <div // yellow Button
							    className='rotate-45 h-8 w-8 border-2 border-solid border-x-gray-800 border-t-gray-800 border-b-gray-900 bg-gray-600 rounded-[50%] absolute left-1/2 top-[-15px]'>
						    <div className=' h-4 w-[19px] ml-[3px] border-t-2 border-solid border-t-white-200 rounded-[50%]'></div>
				  	  </div>
				  	  <img src={PoleroidHeaders[1]} alt="Headshot" className="bg-gradient-to-tr from-white to-gray-100 p-2 w-80 h-80  object-cover"/>
				  	  <div className='font-ShadowsIntoLight text-mid text-[3rem] text-center'>
						    Gallery
				  	  </div>
			    	</div>
			  	</div>
		</div>
		<div className="">
			
			<Carousel  autoPlay="true" centerMode={!isMobile} transitionTime="500" interval="4000" stopOnHover="true" centerSlidePercentage="50" infiniteLoop="true" >
				
				{renderedPhotos}	
			</Carousel>
		</div>
	</Element>
   
  );
};

export default Media;