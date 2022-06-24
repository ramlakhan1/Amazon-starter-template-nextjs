import React from 'react'
import {Carousel} from "react-responsive-carousel";
function Banner() {
  return (
    <div className="relative">
        <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={1000}
        >

        </Carousel>
    </div>
  )
}

export default Banner