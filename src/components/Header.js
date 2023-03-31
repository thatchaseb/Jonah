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
          <div class="p-4 bg-gray-100 flex justify-between">
            <div class="lg:grid grid-cols-2">
              <a to="/"onClick={this.scrollToTop}  className="text-navy hover:text-gray-600 cursor-pointer lg:ml-2 text-3xl font-Merriweather lg:text-4xl font-bold">
                Sarah Brackett
              </a>
            </div>
            <div className="hidden delay-75 md:flex font-Merriweather text-navy justify-evenly text-lg cursor-pointer">
              <a to="/" onClick={this.scrollToTop} className="mx-2 mt-1 px-2  hover:text-gray-600 transition ease-out duration-300">Home</a>              
              <Link className=" delay-75 mx-2 mt-1 px-2  hover:text-gray-600 cursor-pointer transition ease-out duration-300" to="about" offset={-85} smooth={true} duration={800} >About</Link>
              <Link className="delay-75 mx-2 mt-1 px-2  hover:text-gray-600 cursor-pointer transition ease-out duration-300" to="media"  offset={30} smooth={true} duration={800} >Gallery</Link>
              <Link className="delay-75 mx-2 mt-1 px-2  hover:text-gray-600 cursor-pointer transition ease-out duration-300" to="Reels"  offset={-105} smooth={true} duration={800} >Media</Link>
              <Link className="delay-75 mx-2 mt-1 px-2  hover:text-gray-600 cursor-pointer transition ease-out duration-300" to="resume"  offset={-60} smooth={true} duration={800} >Resume</Link>
              <Link className="mx-2 delay-75 mt-1 px-2 cursor-pointer hover:text-gray-600 transition ease-out duration-300" to="contact"  offset={-65} smooth={true} duration={800} >Contact</Link>
            </div>

            <div className="block md:hidden mr-6 " onClick={this.handleMenuClick.bind()}>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
              </svg>
            </div>


          </div>
        </div>

        <div style={{display: `${this.state.menuOpen ? 'block' : 'none'}`}} class="fixed w-48 z-20 bg-navy  border-2 rounded-lg right-4 top-28 ">
          <div class=" mx-1 my-1">
            <div class="text-center mb-4 text-gray-200 w-full hover:bg-white rounded py-2 hover:text-navy cursor-pointer transition delay-75  ease-out duration-300">
              <Link onClick={this.handleMenuClick.bind()} className="pb-[16px] px-8 border-b-2 border-white w-full mx-2 lg:mt-3 mt-4 px-2 hover:text-navy" to="home" offset={-65} smooth={true} duration={800} >Home</Link>
            </div>
             <div class="text-center mb-4 text-gray-200 w-full hover:bg-white rounded py-2 hover:text-navy cursor-pointer transition delay-75  ease-out duration-300">
              <Link onClick={this.handleMenuClick.bind()} className="pb-[16px] px-8 border-b-2 border-white w-full mx-2 lg:mt-3 mt-4 px-2 hover:text-navy" to="about" offset={-85} smooth={true} duration={800} >About</Link>
            </div>
            <div class="text-center mb-4 text-gray-200 w-full hover:bg-white rounded py-2 hover:text-navy cursor-pointer transition delay-75  ease-out duration-300">
              <Link onClick={this.handleMenuClick.bind()} className="pb-[16px] px-8 border-b-2 border-white w-full mx-2 lg:mt-3 mt-4 px-2 hover:text-navy" to="media" offset={-30} smooth={true} duration={800} >Gallery</Link>
            </div>
            <div class="text-center mb-4 text-gray-200 w-full hover:bg-white rounded py-2 hover:text-navy cursor-pointer transition delay-75  ease-out duration-300">
              <Link onClick={this.handleMenuClick.bind()} className="pb-[16px] px-8 border-b-2 border-white w-full mx-2 lg:mt-3 mt-4 px-2 hover:text-navy" to="Reels"  offset={-105} smooth={true} duration={800} >Media</Link>
            </div>
              <div class="text-center mb-4 text-gray-200 w-full hover:bg-white rounded py-2 hover:text-navy cursor-pointer transition delay-75  ease-out duration-300">
              <Link onClick={this.handleMenuClick.bind()} className="pb-[16px] px-8 border-b-2 border-white w-full mx-2 lg:mt-3 mt-4 px-2 hover:text-navy" to="resume"  offset={-60} smooth={true} duration={800} >Resume</Link>
            </div>
              <div class="text-center text-gray-200 w-full hover:bg-white rounded py-2 hover:text-navy cursor-pointer transition delay-75  ease-out duration-300">
              <Link onClick={this.handleMenuClick.bind()} className="px-8 w-full mx-2 lg:mt-3 mt-4 px-2 hover:text-navy" to="contact"  offset={-65} smooth={true} duration={800} >Contact</Link>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default Header;
