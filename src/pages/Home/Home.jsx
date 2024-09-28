import HomeBanner from "../../components/HomeBanner/HomeBanner.jsx";
import HomeCat from "../../components/HomeCat/HomeCat.jsx";

import Button from "@mui/material/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
//import Slider from "react-slick";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';

import {Navigation } from "swiper/modules";
import Rating from "@mui/material/Rating";
import { TfiFullscreen } from "react-icons/tfi";
import ProductItem from "../../components/ProductItem/ProductItem.jsx";

import banner1 from '../../assets/images/banner1.jpg'
import banner2 from '../../assets/images/banner2.jpg'

const Home = () => {
  var productSliderOptions = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <>
      <HomeBanner />
      {/* <HomeCat /> */}

      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="banner">
                <img
                  src={banner1}
                  className="cursor w-100"
                />
              </div>

              <div className="banner mt-4">
                <img
                  src={banner2}
                  className="cursor w-100"
                />
              </div>
            </div>

            <div className="col-md-9 productRow">
              <div className="d-flex align-items-center">
                <div className="info w-75">
                  <h3 className="mb-0 hd">Mejores Productos</h3>
                  <p className="text-light text-sml mb-0">
                    Estos son nuestros productos
                  </p>
                </div>
                <Button className="viewAllBtn ml-auto">
                  {" "}
                  ver mas <IoIosArrowRoundForward />
                </Button>
              </div>

              <div className="product_row w-100 mt-4">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={0}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                   <ProductItem/>
                  </SwiperSlide>

                  <SwiperSlide>
                   <ProductItem/>
                  </SwiperSlide>

                  <SwiperSlide>
                   <ProductItem/>
                  </SwiperSlide>

                  <SwiperSlide>
                   <ProductItem/>
                  </SwiperSlide>

                </Swiper>
              </div>
               
              <div className="d-flex align-items-center mt-5">
                <div className="info w-75">
                  <h3 className="mb-0 hd">Otros Productos</h3>
                  <p className="text-light text-sml mb-0">
                    Productos en existensias
                  </p>
                </div>
                <Button className="viewAllBtn ml-auto">
                  {" "}
                  ver mas <IoIosArrowRoundForward />
                </Button>
              </div>

              <div className="product_row w-100 mt-4">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={0}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                   <ProductItem/>
                  </SwiperSlide>

                  <SwiperSlide>
                   <ProductItem/>
                  </SwiperSlide>

                  <SwiperSlide>
                   <ProductItem/>
                  </SwiperSlide>

                  <SwiperSlide>
                   <ProductItem/>
                  </SwiperSlide>

                </Swiper>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
