import React from "react";
import Slider from "react-slick";

const HomeBanner = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true
  };

  return (
    <div className="homeBannerSection">
      <Slider {...settings}>
        <div className="item">
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/a417fdf5a82818c4.jpg?q=20"
            className="w-100"
          />
        </div>
        <div className="item">
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/a417fdf5a82818c4.jpg?q=20"
            className="w-100"
          />
        </div>
        <div className="item">
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/a417fdf5a82818c4.jpg?q=20"
            className="w-100"
          />
        </div>
      </Slider>
    </div>
  );
};

export default HomeBanner;
