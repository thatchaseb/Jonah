import React, {Suspense} from 'react';
import { Element } from 'react-scroll'
import {useImage} from 'react-image'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { galleryPhotos } from '../../edits';


const Media = () => {
  const renderedPhotos = galleryPhotos.map((item, index) => {

    return (
      <React.Fragment key={index}>
        <div>
					<a href={item} className="w-auto h-80">
						<Suspense>
							<img src={item} alt="Gallery" className='h-80 w-80 object-cover'/>
						</Suspense>
					</a>
        </div>
      </React.Fragment>
    );
  });

  return (
	<Element 
		name="media" 
		class="
			py-12 lg:pt-20 xl:pt-32
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
			Gallery
		</div>
		<div className="">
			
			<Carousel  autoPlay="true" centerMode="true" dynamicHeight="true" transitionTime="500" interval="4000" stopOnHover="true" centerSlidePercentage="50" height="60px" infiniteLoop="true" >
				
				{renderedPhotos}	
			</Carousel>
		</div>
	</Element>
   
  );
};

export default Media;