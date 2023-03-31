import React from 'react';
import { Element } from 'react-scroll'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import pic1 from "../media/Gallery/1.jpg"
import pic2 from "../media/Gallery/2.jpg"
import pic3 from "../media/Gallery/3.jpg"
import pic4 from "../media/Gallery/4.jpg"
import pic5 from "../media/Gallery/5.jpg"
import pic6 from "../media/Gallery/6.jpg"
import pic7 from "../media/Gallery/7.jpg"
import pic8 from "../media/Gallery/8.jpg"
import pic9 from "../media/Gallery/9.jpg"
import pic10 from "../media/Gallery/10.jpg"
import pic11 from "../media/Gallery/11.jpg"
import pic12 from "../media/Gallery/12.jpg"
import pic13 from "../media/Gallery/13.jpg"
import pic14 from "../media/Gallery/14.jpg"
import pic15 from "../media/Gallery/15.jpg"
import pic16 from "../media/Gallery/16.jpg"
import pic17 from "../media/Gallery/17.jpg"
import pic18 from "../media/Gallery/18.jpg"
import pic19 from "../media/Gallery/19.jpg"
import pic20 from "../media/Gallery/20.jpg"
import pic21 from "../media/Gallery/21.jpg"
import pic22 from "../media/Gallery/22.jpg"
import pic23 from "../media/Gallery/23.jpg"
import pic24 from "../media/Gallery/24.jpg"
import pic25 from "../media/Gallery/25.jpg"
import pic26 from "../media/Gallery/26.jpg"
import pic27 from "../media/Gallery/27.jpg"
import pic28 from "../media/Gallery/28.jpg"


const Media = () => {
  return (
	<Element 
		name="media" 
		class="
			py-12 lg:pt-20 xl:pt-32
	">
		<div 
			className="
				font-Merriweather 
				text-[4rem] lg:text-[5rem]
				mx-20 md:mx-32 lg:mx-48 xl:mx-64 
				mb-12 
				mt-16 
				text-navy
			"
		>
			Gallery
		</div>
		<div className="">
			
			<Carousel  autoPlay="true" centerMode="true" dynamicHeight="true" transitionTime="500" interval="4000" stopOnHover="true" centerSlidePercentage="50" height="60px" infiniteLoop="true" >
				<div >
					<a href={pic1}>
						<img src={pic1} alt="Gallery" className=""/>
					</a>
				</div>
				<div>
					<img src={pic2} alt="Gallery"/>
				</div>
				<div>
					<img src={pic3} alt="Gallery"/>
				</div>
				<div>
					<img src={pic4} alt="Gallery"/>
				</div>
				<div>
					<img src={pic5} alt="Gallery"/>
				</div>
				<div>
					<img src={pic6} alt="Gallery"/>
				</div>
				<div>
					<img src={pic7} alt="Gallery"/>
				</div>
				<div>
					<img src={pic8} alt="Gallery"/>
				</div>
				<div>
					<img src={pic9} alt="Gallery"/>
				</div>
				<div>
					<img src={pic10} alt="Gallery"/>
				</div>
				<div>
					<img src={pic11} alt="Gallery"/>
				</div>
				<div>
					<img src={pic12} alt="Gallery"/>
				</div>
				<div>
					<img src={pic13} alt="Gallery"/>
				</div>
				<div>
					<img src={pic14} alt="Gallery"/>
				</div>
				<div>
					<img src={pic15} alt="Gallery"/>
				</div>
				<div>
					<img src={pic16} alt="Gallery"/>
				</div>
				<div>
					<img src={pic17} alt="Gallery"/>
				</div>
				<div>
					<img src={pic18} alt="Gallery"/>
				</div>
				<div>
					<img src={pic19} alt="Gallery"/>
				</div>
				<div>
					<img src={pic20} alt="Gallery"/>
				</div>
				<div>
					<img src={pic21} alt="Gallery"/>
				</div>
				<div>
					<img src={pic22} alt="Gallery"/>
				</div>
				<div>
					<img src={pic23} alt="Gallery"/>
				</div>
				<div>
					<img src={pic24} alt="Gallery"/>
				</div>
				<div>
					<img src={pic25} alt="Gallery"/>
				</div>
				<div>
					<img src={pic26} alt="Gallery"/>
				</div>
				<div>
					<img src={pic27} alt="Gallery"/>
				</div>
				<div>
					<img src={pic28} alt="Gallery"/>
				</div>
				
				
			</Carousel>
		</div>
	</Element>
   
  );
};

export default Media;