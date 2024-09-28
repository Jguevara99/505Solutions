import HomeBanner from "../../components/HomeBanner/HomeBanner.jsx";
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
      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="banner">
                <img
                  src="https://d1whcn1ntmec99.cloudfront.net/images/catalog/products/meccano/g15/full1.jpg"
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

                  {/* <SwiperSlide>
                    <div className="item productItem">
                      <div className="imgWrapper">
                        <img
                           src="https://firebasestorage.googleapis.com/v0/b/zobaze-pos.appspot.com/o/b%2FQpJwlBDl23L6WQeQwS6Q%2Fi%2FQNZ8KCqmPuPtIrhwweha%2FS8MJPpvl02ix4SPPqTSc%2FMd9kMPRIz.png?alt=media"
                           className="w-100"
                        />
                      </div>

                      <div className="info">
                        <h4>Arduino Mega 2560 R3 Modulo Mcu</h4>
                        <span className="text-success d-block">En Stock</span>
                        <Rating className="mt-2 mb-2"
                          name="read-only"
                          value={5}
                          readOnly
                          size="small"
                          precision={0.5}
                        />
                        
                        <div className="d-flex">
                           <span className="oldPrice">C$300</span>
                           <span className="netPrice text-danger ml-2">C$150</span>
                        </div>

                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="item productItem">
                      <div className="imgWrapper">
                        <img
                           src="https://firebasestorage.googleapis.com/v0/b/zobaze-pos.appspot.com/o/b%2FQpJwlBDl23L6WQeQwS6Q%2Fi%2FfMAb6HowED4gmOFGBJOU%2FOUDI0S2quJIywnTITRZl%2F5oFkbj9Z6.png?alt=media"
                           className="w-100"
                        />
                      </div>

                      <div className="info">
                        <h4>ESP32 Board 38 Pin</h4>
                        <span className="text-success d-block">En Stock</span>
                        <Rating className="mt-2 mb-2"
                          name="read-only"
                          value={5}
                          readOnly
                          size="small"
                          precision={0.5}
                        />
                        
                        <div className="d-flex">
                           <span className="oldPrice">C$300</span>
                           <span className="netPrice text-danger ml-2">C$150</span>
                        </div>

                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="item productItem">
                      <div className="imgWrapper">
                        <img
                           src="https://firebasestorage.googleapis.com/v0/b/zobaze-pos.appspot.com/o/b%2FQpJwlBDl23L6WQeQwS6Q%2Fi%2FoIFxfUbCbx4QUCvQe7g9%2F2MalErNQZgJmiem6ba6h%2F8pDH8c4cH.png?alt=media"
                           className="w-100"
                        />
                      </div>

                      <div className="info">
                        <h4>Shield controlador de motor</h4>
                        <span className="text-success d-block">En Stock</span>
                        <Rating className="mt-2 mb-2"
                          name="read-only"
                          value={5}
                          readOnly
                          size="small"
                          precision={0.5}
                        />
                        
                        <div className="d-flex">
                           <span className="oldPrice">C$300</span>
                           <span className="netPrice text-danger ml-2">C$150</span>
                        </div>

                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="item productItem">
                      <div className="imgWrapper">
                        <img
                           src="https://firebasestorage.googleapis.com/v0/b/zobaze-pos.appspot.com/o/b%2FQpJwlBDl23L6WQeQwS6Q%2Fi%2FoIFxfUbCbx4QUCvQe7g9%2F2MalErNQZgJmiem6ba6h%2F8pDH8c4cH.png?alt=media"
                           className="w-100"
                        />
                      </div>

                      <div className="info">
                        <h4>Shield controlador de motor</h4>
                        <span className="text-success d-block">En Stock</span>
                        <Rating className="mt-2 mb-2"
                          name="read-only"
                          value={5}
                          readOnly
                          size="small"
                          precision={0.5}
                        />
                        
                        <div className="d-flex">
                           <span className="oldPrice">C$300</span>
                           <span className="netPrice text-danger ml-2">C$150</span>
                        </div>

                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="item productItem">
                      <div className="imgWrapper">
                        <img
                           src="https://firebasestorage.googleapis.com/v0/b/zobaze-pos.appspot.com/o/b%2FQpJwlBDl23L6WQeQwS6Q%2Fi%2FoIFxfUbCbx4QUCvQe7g9%2F2MalErNQZgJmiem6ba6h%2F8pDH8c4cH.png?alt=media"
                           className="w-100"
                        />
                      </div>

                      <div className="info">
                        <h4>Shield controlador de motor</h4>
                        <span className="text-success d-block">En Stock</span>
                        <Rating className="mt-2 mb-2"
                          name="read-only"
                          value={5}
                          readOnly
                          size="small"
                          precision={0.5}
                        />
                        
                        <div className="d-flex">
                           <span className="oldPrice">C$300</span>
                           <span className="netPrice text-danger ml-2">C$150</span>
                        </div>

                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="item productItem">
                      <div className="imgWrapper">
                        <img
                           src="https://firebasestorage.googleapis.com/v0/b/zobaze-pos.appspot.com/o/b%2FQpJwlBDl23L6WQeQwS6Q%2Fi%2FoIFxfUbCbx4QUCvQe7g9%2F2MalErNQZgJmiem6ba6h%2F8pDH8c4cH.png?alt=media"
                           className="w-100"
                        />
                      </div>

                      <div className="info">
                        <h4>Shield controlador de motor</h4>
                        <span className="text-success d-block">En Stock</span>
                        <Rating className="mt-2 mb-2"
                          name="read-only"
                          value={5}
                          readOnly
                          size="small"
                          precision={0.5}
                        />
                        
                        <div className="d-flex">
                           <span className="oldPrice">C$300</span>
                           <span className="netPrice text-danger ml-2">C$150</span>
                        </div>

                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="item productItem">
                      <div className="imgWrapper">
                        <img
                           src="https://firebasestorage.googleapis.com/v0/b/zobaze-pos.appspot.com/o/b%2FQpJwlBDl23L6WQeQwS6Q%2Fi%2FoIFxfUbCbx4QUCvQe7g9%2F2MalErNQZgJmiem6ba6h%2F8pDH8c4cH.png?alt=media"
                           className="w-100"
                        />
                      </div>

                      <div className="info">
                        <h4>Shield controlador de motor</h4>
                        <span className="text-success d-block">En Stock</span>
                        <Rating className="mt-2 mb-2"
                          name="read-only"
                          value={5}
                          readOnly
                          size="small"
                          precision={0.5}
                        />
                        
                        <div className="d-flex">
                           <span className="oldPrice">C$300</span>
                           <span className="netPrice text-danger ml-2">C$150</span>
                        </div>

                      </div>
                    </div>
                  </SwiperSlide> */}

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
