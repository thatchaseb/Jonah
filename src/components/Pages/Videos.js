import React from 'react';
import ReactPlayer from 'react-player';
import { VideoLinks } from '../../edits';
import { Element } from 'react-scroll'
import { Carousel } from 'react-responsive-carousel';

import { PoleroidHeaders } from '../../edits';

const renderedVideos = VideoLinks.map((item, index) => {

  return (
    <React.Fragment key={index}>
      <ReactPlayer width="100%" url={item}  />
    </React.Fragment>
  );
});


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
      <Element name="Reels" className="pt-12 px-20 pd:px-32 lg:px-48 xl:px-64 bg-gradient-to-tr from-lightMid to-mid pb-32">
        <div 
          className="
            font-Merriweather 
            text-[4rem] lg:text-[5rem]
            my-16 
            text-navy
          "
        >
       		<div //Polaroid
          	  className='flex justify-center -rotate-2'>
			    	<div className='bg-gradient-to-tr relative from-gray-100 to-gray-200'>
 	        	  <div // red Button
							    className='rotate-45 h-8 w-8 border-2 border-solid border-x-red-800 border-t-red-800 border-b-red-900 bg-red-600 rounded-[50%] absolute left-1/2 top-[-15px]'>
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
        </Carousel>
      </Element>
    );
  }
};

export default Videos;
