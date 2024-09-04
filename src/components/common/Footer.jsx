import React from "react";
import logImg from "../assets/images/logo-black.png";
import { BsApple, BsGooglePlay } from "react-icons/bs";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      {/* App Section */}
        <div className='left flex-1 p-4 md:p-8'>
          <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight'>
            Start learning by <br /> Downloading Apps.
          </h1>
        </div>
        <div className='right flex flex-wrap items-center justify-center gap-4 p-4 md:p-6 bg-[#FF7C54] rounded-lg'>
          <div className='box flex gap-2 items-center px-4 py-2 border text-white border-gray-50 hover:bg-white hover:text-black shadow-shadow1 rounded-sm'>
            <BsApple size={20} />
            <label className='text-sm'>App Store</label>
          </div>
          <div className='box flex gap-2 items-center px-4 py-2 bg-white text-black shadow-shadow1 rounded-sm'>
            <BsGooglePlay size={20} />
            <label className='text-sm'>Play Store</label>
          </div>
        </div>

      {/* Footer Section */}
      <footer className='bg-[#F3F4F8] py-6 md:py-10'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {/* Logo Section */}
            <div className='logo'>
              <img src={logImg} alt='logo' className='h-8 md:h-10' />
              <span className='text-sm mt-2 block'>
                Great lesson ideas and lesson plans for ESL teachers! Educators can customize lesson plans to best.
              </span>
            </div>

            {/* Company Links */}
            <div>
              <h4 className='text-black text-lg font-semibold mb-4'>Company</h4>
              <NavLink to='#' className='block text-sm mb-2 text-gray-700 hover:text-orange-600'>
                Contact
              </NavLink>
              <NavLink to='#' className='block text-sm mb-2 text-gray-700 hover:text-orange-600'>
                Portfolio
              </NavLink>
              <NavLink to='#' className='block text-sm mb-2 text-gray-700 hover:text-orange-600'>
                Blog
              </NavLink>
              <NavLink to='#' className='block text-sm mb-2 text-gray-700 hover:text-orange-600'>
                Our team
              </NavLink>
              <NavLink to='#' className='block text-sm mb-2 text-gray-700 hover:text-orange-600'>
                Get in Touch
              </NavLink>
              <NavLink to='#' className='block text-sm mb-2 text-gray-700 hover:text-orange-600'>
                FAQ
              </NavLink>
              <NavLink to='#' className='block text-sm mb-2 text-gray-700 hover:text-orange-600'>
                Latest news
              </NavLink>
            </div>

            {/* Platform Links */}
            <div>
              <h4 className='text-black text-lg font-semibold mb-4'>Platform</h4>
              <NavLink to='#' className='block text-sm mb-2 text-gray-700 hover:text-orange-600'>
                Shop
              </NavLink>
              <NavLink to='#' className='block text-sm mb-2 text-gray-700 hover:text-orange-600'>
                Pricing
              </NavLink>
              <NavLink to='#' className='block text-sm mb-2 text-gray-700 hover:text-orange-600'>
                Blog
              </NavLink>
              <NavLink to='#' className='block text-sm mb-2 text-gray-700 hover:text-orange-600'>
                Landing
              </NavLink>
            </div>

            {/* Subscribe Links */}
            <div>
              <h4 className='text-black text-lg font-semibold mb-4'>Subscribe</h4>
              <NavLink to='#' className='block text-sm mb-2 text-gray-700 hover:text-orange-600'>
                About us
              </NavLink>
              <NavLink to='#' className='block text-sm mb-2 text-gray-700 hover:text-orange-600'>
                Contact
              </NavLink>
              <NavLink to='#' className='block text-sm mb-2 text-gray-700 hover:text-orange-600'>
                Reviews
              </NavLink>
              <NavLink to='#' className='block text-sm mb-2 text-gray-700 hover:text-orange-600'>
                Services
              </NavLink>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
