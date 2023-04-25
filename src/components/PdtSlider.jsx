import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";
export default class AutoPlay extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,

            responsive: [{
                breakpoint: 712,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    speed: 3500,
                    autoplaySpeed: 3500,
                }
            }],
            responsive: [{
                breakpoint: 512,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 3500,
                    autoplaySpeed: 3500,
                }
            }]
        };
        return (
            <div className="w-[85%]">
                <Slider {...settings}>
                    <div className="">
                        <Image src="/product/one.png" alt="shape-1" width={500} height={500} className="px-2" />
                    </div>
                    <div className="">
                        <Image src="/product/2.png" alt="shape-1" width={500} height={500} className="px-2" />
                    </div>
                    <div className="">
                        <Image src="/product/3.png" alt="shape-1" width={500} height={500} className="px-2" />
                    </div>
                    <div className="">
                        <Image src="/product/one.png" alt="shape-1" width={500} height={500} className="px-2" />
                    </div>
                    <div className="">
                        <Image src="/product/2.png" alt="shape-1" width={500} height={500} className="px-2" />
                    </div>
                    <div className="">
                        <Image src="/product/3.png" alt="shape-1" width={500} height={500} className="px-2" />
                    </div>
                </Slider>
            </div>
        );
    }
}