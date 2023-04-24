import React from "react"
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function divs() {
    const options = {
        nav: true,
        navText: ["<div class='nav-div owl-prev'>‹</div>", "<div class='nav-div owl-next sm:hidden'>›</div>"],
        // autoplay: true,
        dots: false,
        // autoplayTimeout: 8500,
        smartSpeed: 2500,
        responsive: {
            0: {
                items: 1
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
<OwlCarousel className="full relative " {...options} >
<div class="bg-btn_primary text-center text-secondary font-semibold py-2 px-4 border border-btn_primary  h-10  shadow hover:bg-btn_primary hover:bg-opacity-80 hover:transition-all hover:duration-100 hover:delay-100">
Orthopedics
</div>
<div class="bg-white text-center text-gray-800 font-semibold py-2 px-4 border border-btn_primary  h-10  shadow">
Neurosurgery
</div>
<div class="bg-white text-center text-gray-800 font-semibold py-2 px-4 border border-btn_primary  h-10  shadow">
Ear, Nose & Throat
</div>
<div class="bg-white text-center text-gray-800 font-semibold py-2 px-4 border border-btn_primary  h-10 shadow">
General Surgery

</div>
<div class="bg-white text-center text-gray-800 font-semibold py-2 px-4 border border-btn_primary  h-10 shadow">
Cardiology

</div>
<div class="bg-white text-center text-gray-800 font-semibold py-2 px-4 border border-btn_primary  h-10 shadow">
Cardiothoracic

</div>
</OwlCarousel>
</div>
    )
}