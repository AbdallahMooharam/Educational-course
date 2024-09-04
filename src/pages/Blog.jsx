import React from "react";
import { courses } from "../components/assets/data/dummydata";
import { AiTwotoneCalendar } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";

export const Blog = () => {
  return (
    <>
      <section className='courses'>
        <div className='w-4/5 m-auto'>
          <div className='heading text-center py-12'>
            <h1 className='text-3xl font-semibold text-black'>
              We Share <br />
              Our Thoughts On Design
            </h1>
            <span className='text-sm mt-2 block'>you don't have to struggle alone, you've got our assistance and help.</span>
          </div>
          <div className='grid grid-cols-3 gap-5 md:grid-cols-1'>
            {courses.slice(0, 3).map((item) => (
              <div className='box rounded-lg shadow-shadow1 bg-white' key={item.id}>
                <div className='images rounded-t-lg relative overflow-hidden h-40 w-full'>
                  <img src={item.cover} alt='' className='rounded-t-lg object-cover w-full h-full transition ease-in-out delay-150 cursor-pointer hover:scale-125 duration-300' />
                </div>
                <div className='text p-3'>
                  <span className='text-[12px] bg-backbg p-1 px-3 text-white rounded-[5px]'>Lifestyle</span>
                  <NavLink to='/single-blog'>
                    <h3 className='text-black my-4 font-medium h-10'>{item.title}</h3>
                  </NavLink>
                  <div className='user flex items-center justify-between'>
                    <div className='flex items-center'>
                      <img className='rounded-full w-7 h-7 object-cover shadow-shadow1' src='https://secure.gravatar.com/avatar/75ec18a5bf959aab895830be3a78cb34?s=50&d=mm&r=g' alt='' />
                      <span className='text-[14px] ml-2'> sunil</span>
                    </div>
                    <div className='flex items-center'>
                      <AiTwotoneCalendar />
                      <span className='text-[14px] ml-2'> Sep 16, 2021</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New "Contact Us" Section */}
      <section className='contact-us py-12 bg-gray-100'>
        <div className='w-4/5 m-auto text-center'>
          <h2 className='text-2xl font-semibold text-orange-500 mb-4'>Contact Us</h2>
          <div className='flex justify-center space-x-6'>
            <a href='https://www.facebook.com/yourpage' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:text-blue-800'>
              <FaFacebookF size={24} />
            </a>
            <a href='https://wa.me/yourphonenumber' target='_blank' rel='noopener noreferrer' className='text-green-600 hover:text-green-800'>
              <FaWhatsapp size={24} />
            </a>
            <a href='https://www.instagram.com/yourprofile' target='_blank' rel='noopener noreferrer' className='text-pink-600 hover:text-pink-800'>
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
