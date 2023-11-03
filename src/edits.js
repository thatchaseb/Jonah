///////////////////////////////////////////////////////////////////////
//                        Gallery Photos                             //
/*/////////////////////////////////////////////////////////////////////

  Crop them to be 300 pixels by 300 pixels
  Captitalization matters for both name and extention
  You only need to change the Name after ./components/media/

*///                               This Part \/
import AboutPic from "./components/media/AboutPic.jpg"
import GalleryPic from "./components/media/GalleryPic.jpg"
import MusicPic from "./components/media/MusicPic.jpg"
import VideoPic from "./components/media/VideoPic.jpg"
import ContactPic from "./components/media/ContactPic.jpg"


///////////////////////////////////////////////////////////////////////
//                        Gallery Photos                             //
/*/////////////////////////////////////////////////////////////////////

Each Photo must be added to the Gallery folder

Each Photo must have a "small" version that is 300 pixels by 300 pixels
  Use the site https://squoosh.app/ (click resize, uncheck "maintain aspect ratio",
  Change Fit method to contain, then change height and width to 300)

  Then Copy and paste the two lines into the area below
  make sure to change the Names

        This part                              And This Part after the /
          \/                                        \/

import pic1small from "./components/media/Gallery/1small.jpg"
import pic1 from "./components/media/Gallery/1.jpg"

*//////////////////////////////////////////////////////////////////////

import pic1small from "./components/media/Gallery/1small.jpg"
import pic1 from "./components/media/Gallery/1.jpg"
import pic2small from "./components/media/Gallery/2small.jpg"
import pic2 from "./components/media/Gallery/2.jpg"
import pic3small from "./components/media/Gallery/3small.jpg"
import pic3 from "./components/media/Gallery/3.jpg"
import pic4small from "./components/media/Gallery/4small.jpg"
import pic4 from "./components/media/Gallery/4.jpg"
import pic5small from "./components/media/Gallery/5small.jpg"
import pic5 from "./components/media/Gallery/5.jpg"
import pic6small from "./components/media/Gallery/6small.jpg"
import pic6 from "./components/media/Gallery/6.jpg"
import pic7small from "./components/media/Gallery/7small.jpg"
import pic7 from "./components/media/Gallery/7.jpg"
import pic8small from "./components/media/Gallery/8small.jpg"
import pic8 from "./components/media/Gallery/8.jpg"
import pic9small from "./components/media/Gallery/9small.jpg"
import pic9 from "./components/media/Gallery/9.jpg"
import pic10small from "./components/media/Gallery/10small.jpg"
import pic10 from "./components/media/Gallery/10.jpg"
import pic11small from "./components/media/Gallery/11small.jpg"
import pic11 from "./components/media/Gallery/11.jpg"
import pic12small from "./components/media/Gallery/12small.jpg"
import pic12 from "./components/media/Gallery/12.jpg"
import pic13small from "./components/media/Gallery/13small.jpg"
import pic13 from "./components/media/Gallery/13.jpg"

/////////////////////////////////////////
export const galleryPhotos = [///////////
/*///////////////////////////////////////

Almost there!
Copy and Paste these four lines into the area below

      Change the Name Here
          \/
  { 
    big: pic1,
    small: pic1small,
  },

*/////////////////////////////
//      Paste Below me!     //
//////////////////////////////
  { 
    big: pic1,
    small: pic1small,
  },
  { 
    big: pic2,
    small: pic2small,
  },
  { 
    big: pic3,
    small: pic3small,
  },
  { 
    big: pic4,
    small: pic4small,
  },
  { 
    big: pic5,
    small: pic5small,
  },
  { 
    big: pic6,
    small: pic6small,
  },
  { 
    big: pic7,
    small: pic7small,
  },
  { 
    big: pic8,
    small: pic8small,
  },
  { 
    big: pic9,
    small: pic9small,
  },
  { 
    big: pic10,
    small: pic10small,
  },
  { 
    big: pic11,
    small: pic11small,
  },
  { 
    big: pic12,
    small: pic12small,
  },
  { 
    big: pic13,
    small: pic13small,
  },
  
]
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////
//                        Video Links                                //
/*/////////////////////////////////////////////////////////////////////

Instructions:
  Just go to Youtube, click the share button then paste it into the area below 
  Make sure to put quotes around the link and add a comma after it!

  There must be 5 videos at all times!

*///////////////////////////////
export const VideoLinks = [/////
////////////////////////////////
//    Paste Below Me          //
////////////////////////////////

  "https://youtu.be/_1aULSPseOs",
  "https://youtu.be/eUaZ7TSoYOQ",
  "https://youtu.be/zXB8O5RJmXk",
  "https://youtu.be/Kq4dTvml7Lk",
  "https://youtu.be/72kaICwNmhM",



////////////////////////////////
]//    Paste Above Me         //
////////////////////////////////  

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////
//                        Social Media Links                         //
/*/////////////////////////////////////////////////////////////////////

Instructions:
  Just Edit the links in the quotations below!

*//////////////////////////////////////////////////////////////////////
export const SocialLinks = {///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
  
   YouTube: "https://www.youtube.com/@jonahtyharmon/featured",
   Instagram: "https://www.instagram.com/jonahtyharmon/", 
   TikTok: "https://www.tiktok.com/@jonahtyharmon?is_from_webapp=1&sender_device=pc", 
   Twitter: "https://twitter.com/jonahtyharmon",
  
  
}//////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////
//                        Song Section                               //
/*/////////////////////////////////////////////////////////////////////
  
Just Edit the links in the quotations below!

*//////////////////////////////////////////////////////////////////////


//-- Instructions:
//-- You can add or remove songs... just copy and paste the  { },  and then edit the quotes inside
//-- Make sure new { }, songs are inside the [ ] 

////////////////////////////
//       Main Video       //
////////////////////////////
export const MainVideo = {//
////////////////////////////

// Only this gets a Music Video 
  
    Name: "Roanoke",
    MusicVideo: "https://youtu.be/W8aZ28z5vPY",
    Spotify: "https://open.spotify.com/track/1LP18e6wTIdgWmZiwwN7bA?si=103f6b5dd8c9423f",
    AppleMusic: "https://music.apple.com/us/album/roanoke/1645560676?i=1645560677" 
  
  }
//----------------//

export const Music = [ 
  {
    Name: "Don't Spiral",
    Spotify: "https://open.spotify.com/album/48sKbWYNqg9sD5EXAAWeRz?si=qdLWS1fPSAOJ7xUPTjh9GQ",
    AppleMusic: "https://music.apple.com/us/album/dont-spiral/1711833777"
  },
  {
    Name: "Just Look at Me",
    Spotify: "https://open.spotify.com/track/6O6SrtA8UaEi8NOzhDwNJi?si=188b6f3cade94662",
    AppleMusic: "https://music.apple.com/us/album/just-look-at-me/1653272229?i=1653272230"
  },

]

///////////////////////////////////////////////////////////////////////
//                        Bio                                        //
/*/////////////////////////////////////////////////////////////////////
  
Just Edit the Bio text below!
Do not include your name it will be added automatically

*////////////////////////////////////////////
export const JonahBio = /////////////////////
/////////////////////////////////////////////
`

is from Lawrenceville, GA with a Bachelors of Arts in Theatre and a minor in Film Studies from Florida State University. He is an actor, musician, and filmmaker currently based in Tallahassee, FL.

`
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const PoleroidHeaders = [
  AboutPic,
  GalleryPic,
  MusicPic,
  VideoPic,
  ContactPic,
]
