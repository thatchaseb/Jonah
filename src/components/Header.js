import React from 'react';
import { Link, Events, animateScroll as scroll, scroller } from 'react-scroll'


class Header extends React.Component {

  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);

    this.state = {
        menuOpen: false,
    };
  }

  componentDidMount() {

    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });

  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollToTopM() {
    if (this.state.menuOpen === false) {this.setState({ menuOpen: true })} else {this.setState({ menuOpen: false })}
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 2000,

      smooth: 'easeInOutQuart',
      offset: 500
    })
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  handleMenuClick = () => {
     if (this.state.menuOpen === false) {this.setState({ menuOpen: true })} else {this.setState({ menuOpen: false })} 
  }


  render() {
    return (
      <div>
        <div class="select-none fixed w-screen z-20">
          <div class="p-4 bg-white flex justify-between">
            <div class="lg:grid grid-cols-2">
              <Link className="text-mid hover:text-gray-600 cursor-pointer lg:ml-2 text-3xl font-Merriweather lg:text-4xl font-bold"  to="home" smooth={true} duration={800}>
                Jonah Harmon
              </Link>
            </div>
            <div className="hidden delay-75 md:flex font-Merriweather text-mid justify-evenly text-lg cursor-pointer">
              <Link className=" delay-75 mx-2 mt-1 px-2  hover:text-gray-600 cursor-pointer transition ease-out duration-300" to="home" smooth={true} duration={800} >Home</Link>
              <Link className=" delay-75 mx-2 mt-1 px-2  hover:text-gray-600 cursor-pointer transition ease-out duration-300" to="about" offset={-55} smooth={true} duration={800} >About</Link>
              <Link className=" delay-75 mx-2 mt-1 px-2  hover:text-gray-600 cursor-pointer transition ease-out duration-300" to="resume" offset={-75} smooth={true} duration={800} >Resume</Link>
              <Link className="delay-75 mx-2 mt-1 px-2  hover:text-gray-600 cursor-pointer transition ease-out duration-300" to="media"  offset={-140} smooth={true} duration={800} >Gallery</Link>
              <Link className="delay-75 mx-2 mt-1 px-2  hover:text-gray-600 cursor-pointer transition ease-out duration-300" to="Reels"  offset={-45} smooth={true} duration={800} >Videos</Link>
              <Link className="delay-75 mx-2 mt-1 px-2  hover:text-gray-600 cursor-pointer transition ease-out duration-300" to="music"  offset={-40} smooth={true} duration={800} >Music</Link>
              <Link className="mx-2 delay-75 mt-1 px-2 cursor-pointer hover:text-gray-600 transition ease-out duration-300" to="contact"  offset={-65} smooth={true} duration={800} >Contact</Link>
            </div>

            <div className="block md:hidden mr-6 " onClick={this.handleMenuClick.bind()}>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
              </svg>
            </div>


          </div>
        </div>

        <div style={{display: `${this.state.menuOpen ? 'block' : 'none'}`}} class="fixed w-48 z-20 bg-gray-100  border-2 rounded-lg right-4 top-28 ">
          <div class=" mx-1 my-1">
            <div class="text-center mb-4 text-darkMid hover:text-gray-100 w-full hover:bg-mid rounded py-2 cursor-pointer transition delay-75  ease-out duration-300">
              <Link onClick={this.handleMenuClick.bind()} className="pb-[16px] hover:text-gray-100 px-8 border-b-2 border-darkMid w-full mx-2 lg:mt-3 mt-4" to="home"  smooth={true} duration={800} >Home</Link>
            </div>
            <div class="text-center mb-4 text-darkMid hover:text-gray-100 w-full hover:bg-mid rounded py-2 cursor-pointer transition delay-75  ease-out duration-300">
              <Link onClick={this.handleMenuClick.bind()} className="pb-[16px] hover:text-gray-100 px-8 border-b-2 border-darkMid w-full mx-2 lg:mt-3 mt-4" to="about" offset={-35} smooth={true} duration={800} >About</Link>
            </div>
            <div class="text-center mb-4 text-darkMid hover:text-gray-100 w-full hover:bg-mid rounded py-2 cursor-pointer transition delay-75  ease-out duration-300">
              <Link onClick={this.handleMenuClick.bind()} className="pb-[16px] hover:text-gray-100 px-8 border-b-2 border-darkMid w-full mx-2 lg:mt-3 mt-4" to="resume" offset={-75} smooth={true} duration={800} >Resume</Link>
            </div>
            <div class="text-center mb-4 text-darkMid hover:text-gray-100 w-full hover:bg-mid rounded py-2 cursor-pointer transition delay-75  ease-out duration-300">
              <Link onClick={this.handleMenuClick.bind()} className="pb-[16px] hover:text-gray-100 px-8 border-b-2 border-darkMid w-full mx-2 lg:mt-3 mt-4" to="media" offset={-100} smooth={true} duration={800} >Gallery</Link>
            </div>
            <div class="text-center mb-4 text-darkMid hover:text-gray-100 w-full hover:bg-mid rounded py-2 cursor-pointer transition delay-75  ease-out duration-300">
              <Link onClick={this.handleMenuClick.bind()} className="pb-[16px] hover:text-gray-100 px-8 border-b-2 border-darkMid w-full mx-2 lg:mt-3 mt-4" to="Reels"  offset={-15} smooth={true} duration={800} >Videos</Link>
            </div>
            <div class="text-center mb-4 text-darkMid hover:text-gray-100 w-full hover:bg-mid rounded py-2 cursor-pointer transition delay-75  ease-out duration-300">
              <Link onClick={this.handleMenuClick.bind()} className="pb-[16px] hover:text-gray-100 px-8 border-b-2 border-darkMid w-full mx-2 lg:mt-3 mt-4" to="music" offset={-30} smooth={true} duration={800} >Music</Link>
            </div>
              <div class="text-center text-darkMid hover:text-gray-100 w-full hover:bg-mid rounded py-2 cursor-pointer transition delay-75  ease-out duration-300">
              <Link onClick={this.handleMenuClick.bind()} className="px-8 hover:text-gray-100 w-full mx-2 lg:mt-3 mt-4" to="contact"  offset={-65} smooth={true} duration={800} >Contact</Link>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default Header;
