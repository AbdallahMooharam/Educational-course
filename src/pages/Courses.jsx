import React from "react";
import Slider from "react-slick";
import { courses } from "../components/assets/data/dummydata";
import { FaBook } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";


// Custom arrow components
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-next" onClick={onClick}>
      <span className="text-2xl">&#x276F;</span> 
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-prev" onClick={onClick}>
      <span className="text-2xl">&#x276E;</span> 
    </div>
  );
};

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />
};

export const Courses = () => {
  return (
    <section className="courses bg-[#F3F4F8] py-16">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="heading mb-16 text-center">
          <h1 className="text-3xl font-semibold text-black">
            Find The Right <br />
            Online Course For You
          </h1>
          <span className="text-sm mt-2 block">
            you don't have to struggle alone, you've got our assistance and help.
          </span>
        </div>
        <div className="slider-container relative">
          <Slider {...settings}>
            {courses.map((item) => (
              <Link to="video" key={item.id}>
                <div className="box rounded-lg shadow-lg bg-white overflow-hidden">
                  <div className="images relative overflow-hidden h-40">
                    <img
                      src={item.cover}
                      alt=""
                      className="object-cover w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-110"
                    />
                    <div className="categ flex gap-2 absolute top-2 left-2">
                      <span className="text-xs bg-blue-700 p-1 px-2 text-white rounded-md shadow-md">
                        Finance
                      </span>
                      <span className="text-xs bg-pink-700 p-1 px-2 text-white rounded-md shadow-md">
                        Lifestyle
                      </span>
                    </div>
                  </div>
                  <div className="text p-3">
                    <div className="flex justify-between items-center text-sm mb-2">
                      <div className="flex items-center">
                        <FaBook />
                        <span className="ml-2">10 lessons</span>
                      </div>
                      <div className="flex items-center">
                        <AiFillStar className="text-orange-500" />
                        <span className="ml-2">4.50 (2)</span>
                      </div>
                    </div>
                    <h3 className="text-black font-medium mb-2">{item.title}</h3>
                    <div className="user flex items-center text-sm">
                      <img
                        className="w-8 h-8 rounded-full"
                        src="https://secure.gravatar.com/avatar/75ec18a5bf959aab895830be3a78cb34?s=50&d=mm&r=g"
                        alt=""
                      />
                      <span className="ml-2">Sunil</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-200 p-3 text-sm">
                    <span className="text-primary">Free</span>
                    <NavLink to="/" className="flex items-center">
                      Know Details <HiOutlineArrowNarrowRight className="ml-1" />
                    </NavLink>
                  </div>
                </div>
              </Link>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
