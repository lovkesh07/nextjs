"use client";
import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Spons.css'

const Spons = () => {
        const settings = {
          dots: false,
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          speed: 3000,
          autoplaySpeed: 2000,
          cssEase: "linear"
        };
        return(
          <div className="mainContainer p-8 ">
            
            <Slider {...settings}>
              <div className="container">
                <img src="http://recruiters-zone.com/static/media/BRS_Ventures.0722bfe22318cd3f3f5d.jpg" />
              </div>
              <div className="container">
                <img src="http://recruiters-zone.com/static/media/ibexglobal.bbde01ca0d4903ed36b1.png" />
              </div>
              <div className="container">
                <img src="http://recruiters-zone.com/static/media/BRS_Ventures.0722bfe22318cd3f3f5d.jpg" />
              </div>
              <div className="container">
                <img src="http://recruiters-zone.com/static/media/BRS_Ventures.0722bfe22318cd3f3f5d.jpg" />
              </div>
              <div className="container">
                <img src="http://recruiters-zone.com/static/media/ibexglobal.bbde01ca0d4903ed36b1.png" />
              </div>
              <div className="container">
                <img src="http://recruiters-zone.com/static/media/BRS_Ventures.0722bfe22318cd3f3f5d.jpg" />
              </div>

              <div className="container">
                <img src="http://recruiters-zone.com/static/media/ibexglobal.bbde01ca0d4903ed36b1.png" />
              </div>
              <div className="container">
                <img src="http://recruiters-zone.com/static/media/BRS_Ventures.0722bfe22318cd3f3f5d.jpg" />
              </div>

              <div className="container">
                <img src="http://recruiters-zone.com/static/media/ibexglobal.bbde01ca0d4903ed36b1.png" />
              </div>

              <div className="container">
                <img src="http://recruiters-zone.com/static/media/BRS_Ventures.0722bfe22318cd3f3f5d.jpg" />
              </div>
              


            </Slider>
          </div>
        );
      }
    
export default Spons