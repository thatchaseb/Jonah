import React from 'react';
import ReactPlayer from 'react-player';
import { VideoLinks } from '../../edits';
import { Element } from 'react-scroll'
import { Carousel } from 'react-responsive-carousel';



const YoutubeSlide = ({ url, isSelected }: { url: string; isSelected?: boolean }) => (
    <ReactPlayer width="100%" url={url}  />
);
const customRenderItem = (item, props) => <item.type {...item.props} {...props} />;

const getVideoThumb = (videoId) => `https://img.youtube.com/vi/${videoId}/default.jpg`;

const getVideoId = (url) => url.substr('https://www.youtube.com/embed/'.length, url.length);

const customRenderThumb = (children) =>
        children.map((item) => {
            const videoId = getVideoId(item.props.url);
            return <img alt="Thumbnail" src={getVideoThumb(videoId)} />;
        });

class Videos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            video1:  {
              "title": "Video Url 1",
              "url": VideoLinks.TheatreReel,
              "id": 1
            },
            video2: {
              "title": "Video Url 2",
              "url": VideoLinks.FightReel,
              "id": 2
            },
            video3: {
              "title": "Video Url 3",
              "url": VideoLinks.FilmReel,
              "id": 3
            },
           
        };
    }
    
    render () {
        return (
            <Element name="Reels" className="pt-12 px-20 pd:px-32 lg:px-48 xl:px-64 bg-gradient-to-tr from-lightMid to-mid pb-12">
                <div 
                    className="
                        font-Merriweather 
                        text-[4rem] lg:text-[5rem]
                        my-16 
                        text-navy
                    "
                >
                    Media
                </div>
                <Carousel autoplay={false} showStatus={false} showIndicators={false} renderItem={customRenderItem} renderThumbs={customRenderThumb}>
                    <YoutubeSlide key="youtube-1" url={this.state.video1.url} />
                    <YoutubeSlide key="youtube-2" url={this.state.video2.url} />
                    <YoutubeSlide key="youtube-3" url={this.state.video3.url} />
                </Carousel>
            </Element>
        );
    }
};

export default Videos;
