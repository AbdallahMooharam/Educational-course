import React from "react";
import heroImg from "../components/assets/images/cropped_image.png";
import { About } from "./About";
import { Courses } from "./Courses";
import { Instructor } from "./Instructor";
import { Blog } from "./Blog";
import heroImg2 from "../components/assets/images/herobg.png";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <HomeContent />
      <About />
      <Courses />
      <Instructor />
      <Blog />
    </>
  );
};
export const HomeContent = () => {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${heroImg2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "88vh",
        }}
      >
        <div class="absolute inset-0 bg-white/50 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div class="relative mx-auto max-w-screen-xl px-4 py-32 md:px-4 sm:py-12 lg:flex lg:h-screen lg:items-center lg:px-8 md:flex md:flex-col md:h-screen">
          <div class="w-1/2 xl:w-1/2 p-6 md:w-full">
            <h1 class="text-3xl font-extrabold sm:text-2xl text-gray-800">
              <strong class=" font-extrabold text-orange-600">
                {" "}
                Discover{" "}
              </strong>
              your path to language mastery with
              <strong class="font-extrabold text-orange-600"> UniHome. </strong>
            </h1>

            <p class="mt-4 max-w-lg sm:text-xl/relaxed  text-gray-700">
              "From beginners to advanced learners, our interactive lessons and
              expert instructors will help you achieve fluency in no time."
            </p>

            <div class="mt-8 flex flex-wrap gap-4 text-center">
              <div class="relative inline-block w-full">
                <select
                  class="block w-full rounded bg-orange-600 text-center px-12 py-3 text-sm font-medium text-white shadow hover:bg-orange-700 focus:outline-none focus:ring active:bg-orange-500 sm:w-auto"
                  onChange={(e) => {
                    const selectedValue = e.target.value;
                    if (selectedValue) {
                      window.location.href = selectedValue;
                    }
                  }}
                >
                  <option value="" className="bg-white text-orange-500">
                    Get Started
                  </option>
                  <option
                    value="/register/teacher"
                    className="bg-white text-orange-500"
                  >
                    As a Teacher
                  </option>
                  <option
                    value="/register/student"
                    className="bg-white text-orange-500"
                  >
                    As a Student
                  </option>
                </select>
              </div>

              <Link
                to="/about"
                class="block w-full rounded bg-white text-orange-700 px-12 py-3 text-sm font-medium text--600 shadow hover:text-gray-700 focus:outline-none focus:ring active:text-orange-500 sm:w-auto"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div class="w-1/2 xl:w-1/2 p-6 hidden md:hidden lg:block xl:block">
            <img
              src={heroImg}
              alt=""
              class="h-50 w-50 object-contain absolute top-1/2 -translate-y-1/2 translate-x-10"
            />
          </div>
        </div>
      </section>
    </>
  );
};
