import React from "react";
import aboutImg from "../components/assets/images/about.jpg";
import aboutEdit from "../components/assets/images/AbouEdit.png";
import aboutImgBanner from "../components/assets/images/about-banner.jpg";
import imgs from "../components/assets/images/join1.png";
import { FaBookDead, FaUser } from "react-icons/fa";
import {
  AiOutlineCheck,
  AiOutlineHome,
  AiFillHome,
  AiFillCheckCircle,
} from "react-icons/ai";
import { Link} from "react-router-dom";
import { Container } from "@mui/material";

export const About = () => {
  return (
    <>
    <Container maxWidth="xl" className="font-[sans-serif]">
      <section className="about py-16">
        <div className="container">
          <div className="heading text-center py-12">
            <h1 className="text-3xl font-semibold text-black">
              What do students say about
              <span class="text-orange-500"> UniHome </span> ?
            </h1>
            <span className="text-sm mt-2 block">
              We help you stimulate your ambition and achieve your goals in an
              effective and motivating way and make you stand out among others
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5 mt-5">
  <AboutCard
    color="bg-[#ff911a]"
    icon={<FaUser size={50} />}
    title="Student :- Kermina Milad"
    desc="Thank you UniHome , Thanks to your help, I was able to achieve my goals and get a special job. Success is guaranteed with you "
  />
  <AboutCard
    color="bg-[rgb(59,130,300)]"
    icon={<FaUser size={50} />}
    title="Student :- Kermina Milad"
    desc="Thank you UniHome , Thanks to your help, I was able to achieve my goals and get a special job. Success is guaranteed with you "
  />
  <AboutCard
    color="bg-[#ff911a]"
    icon={<FaUser size={50} />}
    title="Student :- Kermina Milad"
    desc="Thank you UniHome , Thanks to your help, I was able to achieve my goals and get a special job. Success is guaranteed with you "
  />
  <AboutCard
    color="bg-[rgb(59,130,300)]"
    icon={<FaUser size={50} />}
    title="Student :- Kermina Milad"
    desc="Thank you UniHome , Thanks to your help, I was able to achieve my goals and get a special job. Success is guaranteed with you "
  />
</div>
        </div>
      </section>
      <AboutContent />
      </Container>
    </>
    
  );
};
export const AboutCard = (props) => {
  return (
    <div
      className={`box shadow-md p-5 py-8 rounded-md text-white ${props.color} cursor-pointer transition ease-in-out delay-150 hover:-translate-y-4 duration-300 `}
    >
      <div className="icon">{props.icon}</div>
      <div className="text mt-5">
        <h4 className="text-lg md:text-base sm:text-sm font-semibold my-3">
          {props.title}
        </h4>
        <p className="text-sm md:text-xs sm:text-[10px]">{props.desc}</p>
      </div>
    </div>
  );
};

export const AboutContent = () => {
  return (
    <section className="mb-16 mt-4">
      <div className="container flex md:flex-col">
        <div className="left w-1/3 md:mr-0 relative md:hidden">
          <img src={aboutEdit} alt="aboutImg" className=" rounded-xl" />
          {/*<img src={aboutImgBanner} alt='aboutImg' className='rounded-xl absolute -bottom-14 -left-24 h-56 md:left-80' />*
          <div className="img-group ml-24 mt-3">
            <img src={imgs} alt="" />
            <span className="text-[14px]">
              Join over <label className="text-black text-sm">4,000+</label>{" "}
              students
            </span>
          </div>*/}
        </div>
        <div className="md:w-full right w-2/3 md:w-full md:mt-16 mt-4">
  <div className="heading w-4/5 md:w-full">
    <h1 className="text-3xl md:text-2xl sm:text-xl font-semibold text-black">
      Why <span className="text-orange-500">UniHome</span> ?
    </h1>
    <span className="text-sm md:text-xs sm:text-xxs mt-2 block leading-6">
      We help you stimulate your ambition and achieve your goals in an
      effective and motivating way and make you stand out among others.
    </span>
    <ul className="my-4">
      <li className="text-sm md:text-xs sm:text-xxs flex flex-wrap gap-3">
        <AiFillCheckCircle
          className="text-orange-500 text-2xl md:text-base sm:text-sm"
        />
        <h2 className="text-lg md:text-md sm:text-sm font-bold text-dark">
          Untraditional Interactive Explanation!
        </h2>
        <p className="ml-9 text-sm md:text-xs sm:text-xxs">
          We provide an interactive and fun learning experience that differs
          from the traditional learning routine.
        </p>
      </li>
      <li className="text-sm md:text-xs sm:text-xxs flex flex-wrap gap-3 my-3">
        <AiFillCheckCircle
          className="text-orange-500 text-2xl md:text-base sm:text-sm"
        />
        <h2 className="text-lg md:text-md sm:text-sm font-bold text-dark">
          Experienced and qualified professors
        </h2>
        <p className="ml-9 text-sm md:text-xs sm:text-xxs">
          Our team includes distinguished professors and experts in their
          fields, ensuring the delivery of high-quality content.
        </p>
      </li>
      <li className="text-sm md:text-xs sm:text-xxs flex flex-wrap gap-3 my-3">
        <AiFillCheckCircle
          className="text-orange-500 text-2xl md:text-base sm:text-sm"
        />
        <h2 className="text-lg md:text-sm sm:text-sm font-bold text-dark">
          Interact with professors directly
        </h2>
        <p className="ml-9 text-sm md:text-xs sm:text-xxs">
          It provides teachers with all their needs, such as the electronic
          whiteboard, to add explanations, files and folders specific to each
          lesson and each subject, to add any enrichments or attachments to the
          subject, etc.
        </p>
      </li>
      <li className="text-sm md:text-xs sm:text-xxs flex flex-wrap gap-3 my-3">
        <AiFillCheckCircle
          className="text-orange-500 text-2xl md:text-base sm:text-sm"
        />
        <h2 className="text-lg md:text-sm sm:text-sm font-bold text-dark">
          questions & answers special section
        </h2>
        <p className="ml-9 text-sm md:text-xs sm:text-xxs">
          It helps parents know the student’s level and how to develop it and
          talk to teachers about their level.
        </p>
      </li>
    </ul>
            <Link to="/register/student">
            <button className="px-5 py-2 border border-gray-300 rounded-md text-sm bg-orange-500 text-white">
              Apply Now
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
