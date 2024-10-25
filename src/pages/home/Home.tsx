import React from "react";
import Wrapper from "../../components/Wrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { streams, topStreams } from "../../source";
import { Autoplay } from "swiper/modules";
import { banner4 } from "../../assets";
import { SignedOut } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { Eye } from "lucide-react";

const Home = () => {
  return (
    <Wrapper enableRightbar>
      <div className="w-full overflow-hidden rounded-md">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          autoplay={true}
          loop={true}
          modules={[Autoplay]}
        >
          {topStreams.map((stream, index) => (
            <SwiperSlide className="h-[150px] md:h-[350px]" key={index}>
              <img src={stream.image} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex items-center justify-between gap-4 bg-bgSecondary p-4">
          <div className="flex items-center gap-2">
            <div className="size-10 rounded-md flex items-center justify-center">
              <img src={banner4} alt="" />
            </div>
            <div>
              <h3 className="text-base">StreamIt live</h3>
              <p className="text-gray-500 text-sm">
                Join live and also create your own stream
              </p>
            </div>
          </div>
          <SignedOut>
            <Link
              to={"/signup"}
              className="bg-transparent transition-all text-primary hover:bg-primary hover:text-white rounded-lg border-[2px] border-primary border-solid py-2 px-4 inline-block text-sm"
            >
              {" "}
              Create account
            </Link>
          </SignedOut>
        </div>
      </div>

      <div className="pt-8">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4">
          {streams.map((stream, index) => (
            <div className="bg-bgSecondary p-3 rounded-lg" key={index}>
              <div className="overflow-hidden rounded-lg ">
                <img
                  src={stream.image}
                  alt=""
                  className="transition-all hover:scale-110"
                />
              </div>
              <p className="py-2">
                <h3 className="text-sm line-clamp-2 ">{stream.title}</h3>
                <div className="flex items-center justify-between gap- mt-3 max-[400px]:flex-col max-[400px]:items-start">
                  <div className="flex items-center gap-2">
                    <Eye className="text-primary" size={16} />
                    <span className="text-sm text-gray-500">
                      {stream.watching} watching
                    </span>
                  </div>
                  <div className="py-1 px-3 bg-primary text-sm rounded-lg">
                    Live
                  </div>
                </div>
              </p>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;
