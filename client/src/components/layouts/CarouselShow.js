import React from 'react'
import { Carousel } from "react-carousel-minimal";
import { sildeImage } from '../../data';
export default function CarouselShow() {
    const captionStyle = {
        fontSize: "1.5em",
        fontWeight: "bold",
        backgroundColor: "",
        opacity: "1",
        margin: "1rem 0",
      };
      const slideNumberStyle = {
        fontSize: "20px",
        fontWeight: "bold",
      };
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <div>
          <Carousel
            data={sildeImage}
            time={3000}
            width="100%"
            height="450px"
            captionStyle={captionStyle}
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="#fff"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="140px"
            style={{
              textAlign: "center",
              width: "100%",
              height: "100%",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  )
}
