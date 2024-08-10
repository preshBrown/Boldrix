import React from "react";
import ImageSlider from "./ImageSlider";
import Img1 from "./2001724.jpg";
import Img2 from "./41-Best-and-Coolest-Collection-HD-Wallpapers-Ever-17.jpg";
import Img3 from "./Bricks-Wall-Samsung-Galaxy-S5-Wallpapers-HD-Download.jpg";
import Img4 from "./Lamborghini-Venevo-Best-Samsung-Galaxy-S5-Latest-Wallpapers-Download-HD.jpg";
import Img5 from "./naruto-vs-sasuke-large.jpg";

const DemoImage = () => {
  const IMAGES = [
    { url: Img1, alt: "img one" },
    { url: Img2, alt: "img two" },
    { url: Img3, alt: "img three" },
    { url: Img4, alt: "img four" },
    { url: Img5, alt: "img five" },
  ];

  return (
    <div
      style={{
        maxWidth: "1200px",
        width: "100%",
        // aspectRatio: "10 / 6",
        height: "500px",
        margin: "0 auto",
      }}
    >
      <ImageSlider images={IMAGES} />
    </div>
  );
};

export default DemoImage;
