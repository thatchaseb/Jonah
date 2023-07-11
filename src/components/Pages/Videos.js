import React from 'react';
import ReactPlayer from 'react-player';
import { VideoLinks } from '../../edits';
import { Element } from 'react-scroll'
import { Carousel } from 'react-responsive-carousel';

import { PoleroidHeaders } from '../../edits';


const YoutubeSlide = ({ url, isSelected }) => (
    <ReactPlayer width="100%" url={url}  />
);
const customRenderItem = (item, props) => <item.type {...item.props} {...props} />;

const getVideoThumb = (videoId) => `https://img.youtube.com/vi/${videoId}/default.jpg`;

const getVideoId = (url) => url.substr('https://youtu.be/'.length, url.length);

const customRenderThumb = (children) =>
  children.map((item) => {
    const videoId = getVideoId(item.props.url);
    return <img alt="Thumbnail" src={getVideoThumb(videoId)} />;
  });

class Videos extends React.Component {

  render () {
    return (
      <Element name="Reels" className="pt-4 px-2 sm:px-20 md:px-32 lg:px-64 xl:px-[25rem] bg-gradient-to-tr from-lightMid to-mid pb-8">
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
							    className='rotate-45 h-8 w-8 border-2 border-solid border-x-gray-800 border-t-gray-800 border-b-gray-900 bg-gray-600 rounded-[50%] absolute left-1/2 top-[-15px]'>
						    <div className=' h-4 w-[19px] ml-[3px] border-t-2 border-solid border-t-white-200 rounded-[50%]'></div>
				  	  </div>
				  	  <img src={PoleroidHeaders[3]} alt="PoleroidHeaders" className="bg-gradient-to-tr from-white to-gray-100 p-2 w-80 h-80  object-cover"/>
				  	  <div className='font-ShadowsIntoLight text-mid text-[3rem] text-center'>
						    Videos
				  	  </div>
			    	</div>
			  	</div>
       	</div>
        <Carousel transitionTime="1000" infiniteLoop="true" autoplay={false} showStatus={false} showIndicators={false} renderItem={customRenderItem} renderThumbs={customRenderThumb}>
          <YoutubeSlide key="youtube-1" url={VideoLinks[0]} />
          <YoutubeSlide key="youtube-2" url={VideoLinks[1]} />
          <YoutubeSlide key="youtube-3" url={VideoLinks[2]} />
          <YoutubeSlide key="youtube-4" url={VideoLinks[3]} />
          <YoutubeSlide key="youtube-5" url={VideoLinks[4]} />
        </Carousel>
      </Element>
    );
  }
};

export default Videos;
