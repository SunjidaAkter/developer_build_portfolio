import React from "react";
import { BlogData } from "./FakeData/BlogData";
import "./BlogSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faUserEdit, faHeart, faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      // style={{ ...style, display: "block", background: "#265df2", "borderRadius": "28px" }}
      onClick={onClick}
    >
      <FontAwesomeIcon
        className="text-gray-600 absolute top-0 text-[30px] hover:text-primary"
        // style={{ color: "blue", fontSize: "30px" }}
        icon={faAngleRight}
      ></FontAwesomeIcon>{" "}
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      // style={{ ...style, display: "block", background: "#265df2", "borderRadius": "28px" }}
      onClick={onClick}
    >
      <FontAwesomeIcon
        className="text-gray-600 absolute top-0 text-[30px] hover:text-primary"
        // style={{ color: "blue", fontSize: "30px" }}
        icon={faAngleLeft}
      ></FontAwesomeIcon>{" "}
    </div>
  );
}
const BlogSection = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="custom_container px-4 lg:px-5 py-5">
      <p className="text-[18px] font-bold text-[#265df2] text-center mb-[0.5rem]">
        Latest Posts
      </p>
      <p className="text-[#124265] text-center  font-bold text-3xl mt-4 uppercase">
        OUR LATEST STORIES{" "}
      </p>
      <p className="text-[#124265] text-center  font-bold text-3xl mt-4 uppercase">
        AND ARTICLES
      </p>
      <div className="flex justify-center items-center">
        <div className="hr"></div>
      </div>
      {/* <div className="relative grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 lg:pb-[100px] md:pb-0 pb-[0px] gap-8 "> */}
      <div className="relative">
        <Slider {...settings}>

          {BlogData.map((blog, i) => (
            <article key={blog?.id} className="blog px-3">
              <div className="">
                <img
                  className="w-full z-0"
                  src={blog.img}
                  alt="BlogRelateImage"
                />
                <div className="mt-[-30px]">
                  <p className=" ml-[40px] text-[15px]  z-10 text-white bg-primary px-[19px] py-[9px] inline">
                    {blog.date}
                  </p>
                </div>
              </div>

              <div className="blog-container px-[40px] pt-[20px] pb-[42px]">
                <p className="title my-5 text-[24px] text-[#2c3957] font-bold">
                  {blog.title}
                </p>
                <p className="text-[15px] text-[#666666] ">{blog.des}</p>
                <div className="flex justify-between items-center pt-6">
                  <p className="text-[14px] font-[600] text-[#888888]">
                    <FontAwesomeIcon className="text-primary" icon={faHeart} />{" "}
                    React
                  </p>
                  <p className="text-[14px] font-[600] text-[#888888]">
                    <FontAwesomeIcon className="text-primary" icon={faComments} />{" "}
                    {blog.comments} Comments
                  </p>
                  <p className="text-[14px] font-[600] text-[#888888]">
                    <FontAwesomeIcon
                      className="text-primary"
                      icon={faUserEdit}
                    ></FontAwesomeIcon>{" "}
                    By Admins
                  </p>
                </div>
              </div>
            </article>
          ))}
        </Slider>
      </div>
      {/* </div> */}
    </div>
  );
};

export default BlogSection;
