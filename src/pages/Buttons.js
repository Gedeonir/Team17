import React from "react"
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function divs(props) {
    const options = {
        nav: true,
        navText: ["<div class='nav-div owl-prev absolute w-8 h-8 drop-shadow shadow rounded-full text-lg top-1 lg:left-[-15px] left-[-8px] bg-primary text-text_secondary'>‹</div>", "<div class='nav-div owl-next absolute w-8 h-8 drop-shadow shadow rounded-full text-lg top-1 lg:right-[-15px] right-[-8px] bg-primary text-text_secondary'>›</div>"],
        // autoplay: true,
        dots: false,
        // autoplayTimeout: 8500,
        smartSpeed: 2500,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 2
            },
            1000: {
                items: 6
            }
        },
      };

    return (


        <div class="text-primary mt-10 mb-2 flex">
            <OwlCarousel className="full text-xs" {...options} >
                <div class="bg-primary text-center text-secondary font-semibold py-2 px-4 border border-primary  h-10   hover:bg-primary cursor-pointer hover:text-text_secondary transition-all duration-700 delay-100">
                    All
                </div>
                <div class=" text-center font-semibold py-2 px-4 border border-primary  h-10  hover:bg-primary cursor-pointer hover:text-text_secondary transition-all duration-700 delay-100">
                Orthopedics
                </div>
                <div class="bg-white text-center text-gray-800 font-semibold py-2 px-4 border border-primary  h-10   hover:bg-primary cursor-pointer hover:text-text_secondary transition-all duration-700 delay-100">
                Neurosurgery
                </div>
                <div class="bg-white text-center text-gray-800 font-semibold py-2 px-4 border border-primary  h-10   hover:bg-primary cursor-pointer hover:text-text_secondary transition-all duration-700 delay-100">
                Ear, Nose & Throat
                </div>
                <div class="bg-white text-center text-gray-800 font-semibold py-2 px-4 border border-primary  h-10  hover:bg-primary cursor-pointer hover:text-text_secondary transition-all duration-700 delay-100">
                General Surgery

                </div>
                <div class="bg-white text-center text-gray-800 font-semibold py-2 px-4 border border-primary  h-10  hover:bg-primary cursor-pointer hover:text-text_secondary transition-all duration-700 delay-100">
                Cardiology

                </div>
                <div class="bg-white text-center text-gray-800 font-semibold py-2 px-4 border border-primary  h-10  hover:bg-primary cursor-pointer hover:text-text_secondary transition-all duration-700 delay-100">
                Cardiothoracic

                </div>
            </OwlCarousel>
        </div>
    )
}