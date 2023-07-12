import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { VideoLinks } from '../../edits';
import { Element } from 'react-scroll'

import { PoleroidHeaders } from '../../edits';


const Videos = () => {

  const [activeVideo, setActiveVideo] = useState(0);

  const onThumbClick = (index) => {
    setActiveVideo(index);
  };

    return (
      <Element name="Reels" className="pt-4 px-4 sm:px-16  bg-gradient-to-tr from-lightMid to-mid pb-8">
        <div 
          className="
            font-Merriweather 
            text-[4rem] lg:text-[5rem]
            mt-4 
            mb-16
            text-navy
          "
        >
       		<div //Polaroid
          	  className='flex justify-center -rotate-2'>
			    	<div className='bg-gradient-to-tr relative from-gray-100 to-gray-200'>
 	        	  <div // gray Button
							    className='rotate-45 h-8 w-8 border-2 border-solid border-x-gray-800 border-t-gray-800 border-b-gray-900 bg-gray-800 rounded-[50%] absolute left-1/2 top-[-15px]'>
						    <div className=' h-4 w-[19px] ml-[3px] border-t-2 border-solid border-t-white-200 rounded-[50%]'></div>
				  	  </div>
				  	  <img src={PoleroidHeaders[3]} alt="PoleroidHeaders" className="bg-gradient-to-tr from-white to-gray-100 p-2 w-80 h-80  object-cover"/>
				  	  <div className='font-ShadowsIntoLight text-mid text-[3rem] text-center'>
						    Videos 
  	          </div>
			    	</div>
			  	</div>
       	</div>
        <div className='py-8'>
          <span><ReactPlayer className="border-white border-solid border-4 sm:hidden mx-auto" width="320px" height="180px" url={VideoLinks[activeVideo]}/></span>
          <span><ReactPlayer className="border-white border-solid border-8 md:hidden sm:block hidden mx-auto" width="480px" height="270px" url={VideoLinks[activeVideo]}/></span>
          <span><ReactPlayer className="border-white border-solid border-8 lg:hidden md:block hidden mx-auto" width="640px" height="360px" url={VideoLinks[activeVideo]}/></span>
          <span><ReactPlayer className="border-white border-solid border-8 lg:block hidden mx-auto" width="880px" height="495px" url={VideoLinks[activeVideo]}/></span>
        </div>
        <div className="grid grid-cols-5 gap-4 pb-8">
        <img className='w-[140px] h-[60px] sm:h-[80px] object-cover cursor-pointer border-4 hover:border-Darker border-white border-solid rounded-lg' onClick={() => onThumbClick(0)} alt="Thumbnail" src={`https://img.youtube.com/vi/${VideoLinks[0].substr('https://youtu.be/'.length, VideoLinks[0].length)}/default.jpg`} />
        <img className='w-[140px] h-[60px] sm:h-[80px] object-cover cursor-pointer border-4 hover:border-Darker border-white border-solid rounded-lg' onClick={() => onThumbClick(1)} alt="Thumbnail" src={`https://img.youtube.com/vi/${VideoLinks[1].substr('https://youtu.be/'.length, VideoLinks[1].length)}/default.jpg`} />
        <img className='w-[140px] h-[60px] sm:h-[80px] object-cover cursor-pointer border-4 hover:border-Darker border-white border-solid rounded-lg' onClick={() => onThumbClick(2)} alt="Thumbnail" src={`https://img.youtube.com/vi/${VideoLinks[2].substr('https://youtu.be/'.length, VideoLinks[2].length)}/default.jpg`} />
        <img className='w-[140px] h-[60px] sm:h-[80px] object-cover cursor-pointer border-4 hover:border-Darker border-white border-solid rounded-lg' onClick={() => onThumbClick(3)} alt="Thumbnail" src={`https://img.youtube.com/vi/${VideoLinks[3].substr('https://youtu.be/'.length, VideoLinks[3].length)}/default.jpg`} />
        <img className='w-[140px] h-[60px] sm:h-[80px] object-cover cursor-pointer border-4 hover:border-Darker border-white border-solid rounded-lg' onClick={() => onThumbClick(4)} alt="Thumbnail" src={`https://img.youtube.com/vi/${VideoLinks[4].substr('https://youtu.be/'.length, VideoLinks[4].length)}/default.jpg`} />

        </div>

        
      </Element>
    );
  }

export default Videos;
