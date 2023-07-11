import React from 'react';
import { Music, MainVideo } from '../../edits';
import ReactPlayer from 'react-player';
import { Element } from 'react-scroll'
import { Carousel } from 'react-responsive-carousel';

import { PoleroidHeaders } from '../../edits';

const MusicRerendered = Music.map((item, index) => {
  
  const MusicLink = `https://open.spotify.com/embed/track/${item.Spotify.substr('https://open.spotify.com/track/'.length, item.Spotify.length)}utm_source=generator`;
  
  return (
    <React.Fragment key={index}>
      <div className='sm:bg-gray-100 sm:rounded-lg sm:border-16 sm:border-gray-100 '>
          
          <div className='text-3xl text-darkMid sm:pt-8 py-4 sm:my-0 my-4 sm:bg-transparent bg-Lighter'>
            {item.Name}
          </div>

          <div className='py-8'>

          
          <span className='px-4'>
          <a href={item.AppleMusic} className="
            bg-[#683838]
            border-black
            hover:bg-gray-200
            hover:border-black
            p-4
            font-Merriweather text-white hover:text-black
            border-4	
            lg:text-2xl
            rounded 
            
            cursor-pointer
            " target="_blank" rel="noreferrer"
          >
            <i class="apple icon"></i>
              Apple Music
            </a>
          </span>
          <span className='px-4'>
          <a href={item.Spotify} className="
            bg-[#683838]
            border-black
            hover:bg-gray-200
            hover:border-black
            p-4
            font-Merriweather text-white hover:text-black
            border-4	
            lg:text-2xl
            rounded 
            
            cursor-pointer
            " target="_blank" rel="noreferrer"
          >
          <i class="spotify icon"></i>
            Spotify
          
          </a>
          </span>
          </div>
          
          
          <div className='p-8'>       
            <iframe title={item.title} src={MusicLink} width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
        
        </div>
    </React.Fragment>
  );
});


class Videos extends React.Component {

  render () {
    return (
      <Element name="music" className="pt-1 sm:px-20 pd:px-32 lg:px-48 xl:px-64 bg-gradient-to-br from-lightMid to-mid pb-8">
        <div 
          className="
            font-Merriweather 
            text-[4rem] lg:text-[5rem]
            my-16 
            text-navy
          "
        >
       		<div //Polaroid
          	  className='flex justify-center -rotate-1'>
			    	<div className='bg-gradient-to-tr relative from-gray-100 to-gray-200'>
              <div // gray Button
                  className='rotate-45 h-8 w-8 border-2 border-solid border-x-gray-800 border-t-gray-800 border-b-gray-900 bg-gray-600 rounded-[50%] absolute left-1/2 top-[-15px]'>
                <div className=' h-4 w-[19px] ml-[3px] border-t-2 border-solid border-t-white-200 rounded-[50%]'></div>
              </div>
				  	  <img src={PoleroidHeaders[2]} alt="PoleroidHeaders" className="bg-gradient-to-tr from-white to-gray-100 p-2 w-80 h-80  object-cover"/>
				  	  <div className='font-ShadowsIntoLight text-mid text-[3rem] text-center'>
						    Music
				  	  </div>
			    	</div>
			  	</div>
       	</div>
        <Carousel showStatus={false} autoPlay="true" transitionTime="500" interval="5000" stopOnHover="true" infiniteLoop="true" >
        <div className='sm:bg-gray-100 sm:rounded-lg sm:border-16 sm:border-gray-100'>
          
          <div className='text-3xl sm:pt-8 py-4 sm:my-0 my-4 sm:bg-transparent bg-Lighter text-darkMid'>
            {MainVideo.Name}
          </div>

          <div className='py-8'>

          
          <span className='px-4'>
          <a href={MainVideo.AppleMusic} className="
            bg-[#683838]
            border-black
            hover:bg-gray-200
            hover:border-black
            p-4
            font-Merriweather text-white hover:text-black
            border-4	
            lg:text-2xl
            rounded 
            
            cursor-pointer
            " target="_blank" rel="noreferrer"
          >
            <i class="apple icon"></i>
              Apple Music
            </a>
          </span>
          <span className='px-4'>
          <a href={MainVideo.Spotify} className="
            bg-[#683838]
            border-black
            hover:bg-gray-200
            hover:border-black
            p-4
            font-Merriweather text-white hover:text-black
            border-4	
            lg:text-2xl
            rounded 
            
            cursor-pointer
            " target="_blank" rel="noreferrer"
          >
          <i class="spotify icon"></i>
            Spotify
          
          </a>
          </span>
          </div>
          <div className='p-8 pt-[32px] pb-16'>
            <ReactPlayer width="100%" url={MainVideo.MusicVideo}  />
          </div>
        
        </div>
          {MusicRerendered}
        </Carousel>
         
        
      </Element>
    );
  }
};

export default Videos;
