import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";

export default class AutoPlay extends Component {
    render() {
        const settings = {
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 6000,
            autoplaySpeed: 3500,
            cssEase: "linear",

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
            <div className="overflow-hidden">
                <Slider {...settings}>
                    <div>
                        <Image src="/product/one.png" alt="shape-1" width={500} height={500} className="px-2" />
                    </div>
                    <div>
                        <Image src="/product/2.png" alt="shape-1" width={500} height={500} className="px-2" />
                    </div>
                    <div>
                        <Image src="/product/3.png" alt="shape-1" width={500} height={500} className="px-2" />
                    </div>
                    <div>
                        <Image src="/product/one.png" alt="shape-1" width={500} height={500} className="px-2" />
                    </div>
                    <div>
                        <Image src="/product/2.png" alt="shape-1" width={500} height={500} className="px-2" />
                    </div>
                    <div>
                        <Image src="/product/3.png" alt="shape-1" width={500} height={500} className="px-2" />
                    </div>
                </Slider>
            </div>
        );
    }
}