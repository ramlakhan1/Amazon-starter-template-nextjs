import React from 'react'
import {Carousel} from "react-responsive-carousel";
function Banner() {
  return (
    <div className="relative">
        <Carousel
        autoPlay
        infiniteLoop
        showStatus
        >

        </Carousel>
    </div>
  )
}

export default Banner