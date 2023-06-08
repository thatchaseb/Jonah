 import React, { useRef } from 'react';

import { Element } from 'react-scroll';
import { PoleroidHeaders } from '../../edits';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_nh0jo9x', 'template_39aj15n', form.current, 'RCeqM3ZWKBuVE8nW7')
    .then((result) => {
        console.log(result.text);
        }, (error) => {console.log(error.text)}
    );
    form.current.reset();
  }

  const form = useRef();

  return (
    <Element name="contact" className="p-6 text-navy bg-gradient-to-tr from-lightMid to-mid">
    <div class="md:w-3/4 md:mx-auto">
    <div 
      class="
        font-Merriweather 
        text-[4rem] lg:text-[5rem] 
        mb-8 
        text-navy
      "
    >
          <div //Polaroid
          	  className='flex justify-center rotate-3'>
			    	<div className='bg-gradient-to-tr relative from-gray-100 to-gray-200'>
 	        	  <div // blue Button
							    className='rotate-45 h-8 w-8 border-2 border-solid border-x-blue-800 border-t-blue-800 border-b-blue-900 bg-blue-600 rounded-[50%] absolute left-1/2 top-[-15px]'>
						    <div className=' h-4 w-[19px] ml-[3px] border-t-2 border-solid border-t-white-200 rounded-[50%]'></div>
				  	  </div>
				  	  <img src={PoleroidHeaders[4]} alt="PoleroidHeaders" className="bg-gradient-to-tr from-white to-gray-100 p-2 w-80 h-80  object-cover"/>
				  	  <div className='font-ShadowsIntoLight text-mid text-[3rem] text-center'>
						    Contact Me
				  	  </div>
			    	</div>
			  	</div>
    </div>
    <form id="contact-form" ref={form} onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label htmlFor="first-name">First name</label>
          <input type="text" id="first-name" name="first-name" className="form-input border-2 border-navy px-3 py-2 rounded-md" required />
        </div>
        <div className="flex flex-col">
          <label htmlFor="last-name">Last name</label>
          <input type="text" id="last-name" name="last-name" className="form-input border-2 border-navy px-3 py-2 rounded-md" required />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" className="form-input border-2 border-navy px-3 py-2 rounded-md" required />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone">
            <div className="flex align-items">
              Phone
              <span className="ml-auto opacity-75">Optional</span>
            </div>
          </label>
          <input type="tel" id="phone" name="phone" className="form-input border-2 border-navy px-3 py-2 rounded-md" />
        </div>
        <div className="flex flex-col col-span-2">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" className="form-input border-2 border-navy px-3 py-2 rounded-md" required />
        </div>
        <div className="flex flex-col md:col-span-4 col-span-2">
          <label htmlFor="subject">
            <div className="flex align-items">
              Message
              <span className="ml-auto opacity-75">Max. 500 characters</span>
            </div>
          </label>
          <textarea maxLength="500" rows="10" type="text" id="message" name="message" className="form-input border-2 border-navy px-3 py-2 rounded-md" required />
        </div>
      </div>
      <div className="flex justify-end py-4">
        <button type="submit" 
          className="
            bg-navy 
            font-Merriweather
            text-white hover:text-navy
            font-bold 
            border-4 border-navy
            py-2 px-4 
            rounded 
            focus:ring 
            focus:ring-blue-300 
            hover:bg-gray-100
          "
        >
          Submit
        </button>
      </div>
    </form>
    </div>
  </Element>
  );
};

export default Contact;