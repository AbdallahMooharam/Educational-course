import React, { useEffect, useState } from "react";
import logoPlayerVideo from "../components/assets/images/pngwing.com.png";
import coverVideoCard from "../components/assets/images/UNI_LOGO-removebg-preview.png";
import { AiTwotoneCalendar } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import axios from "axios";

export const Usage = () => {
  useEffect(() => {
    getData();
  }, []);
  const [videosData, setVideoData] = useState([]);
  const [backgroundCardVideo, setBackgroundCardVideo] = useState(false);
  const [videoInfo, setVideoInfo] = useState({});
  function showVideoCard() {
    setBackgroundCardVideo(true);
  }
  function hideVideoCard() {
    setBackgroundCardVideo(false);
  }
  async function getData() {
    let response = await axios.get("https://unih0me.com/api/usages");
    let videos = response.data.data.usages;
    setVideoData(videos);
  }
  function hundleVideoCard(items) {
    showVideoCard();
    let cleanLink = items.youtube_link.replace("&themeRefresh=1", "");
    const embedLink = cleanLink.replace("watch?v=", "embed/");
    setVideoInfo({ ...items, youtube_link: embedLink });
  }

  return (
    <>
      <section className="courses position-relative">
        <div className="w-4/5 m-auto">
          <div className="heading text-center py-12">
            <h1 className="text-3xl font-semibold text-black">
              We Share <br />
              Our Thoughts On Design
            </h1>
            <span className="text-sm mt-2 block">
              you don't have to struggle alone, you've got our assistance and
              help.
            </span>
          </div>
          <div className="grid grid-cols-3 gap-5 md:grid-cols-1">
            {videosData.map((item, i) => (
              <>
                <div key={i} className="box rounded-lg shadow-shadow1 bg-white">
                  <div className="images rounded-t-lg relative overflow-hidden h-40 w-ful position-relative">
                    <img
                      src={coverVideoCard}
                      alt=""
                      className="rounded-t-lg object-cover w-full h-full transition ease-in-out delay-150 cursor-pointer hover:scale-125 duration-300"
                    />
                    <div
                      onClick={() => {
                        hundleVideoCard(item);
                      }}
                      className="logoPlayerVideo cursor-pointer">
                      <img
                        className=" logoPlayerimg  trans"
                        width={70}
                        src={logoPlayerVideo}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="text p-3">
                    <NavLink to="/single-session">
                      <h3 className="text-black my-4 font-medium h-10">
                        {item.title}
                      </h3>
                    </NavLink>
                  </div>
                </div>
              </>
            ))}
            <div
              onClick={hideVideoCard}
              style={
                backgroundCardVideo == true
                  ? { backgroundColor: "#00000063", display: "block" }
                  : { display: "none" }
              }
              className="backgroundVideo  position-absolute  top-0 end-0 right-0 left-0 w-100 h-100 ">
              <div className="video position-absolute  top-0 end-0 right-0 left-0 w-100 h-100 d-flex justify-content-center align-items-center">
                {backgroundCardVideo == true ? (
                  <iframe
                    width="560"
                    height="315"
                    src={videoInfo.youtube_link}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen></iframe>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
