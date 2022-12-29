import Image from "next/image";
import React from "react";
import HomeBanner from "../images/home-banner.jpg";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const ImagesData = [
  { id: 1, url: HomeBanner },
  { id: 2, url: HomeBanner },
  { id: 3, url: HomeBanner },
];

const animation = { duration: 5000 };

const Banner = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 4000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div
      className="h-68 md:h-96 relative overflow-hidden bg-red-400 keen-slider"
      ref={sliderRef}
    >
      {ImagesData.map((img) => (
        <div className="keen-slider__slide ">
          <Image
            key={img.id}
            src={img.url}
            className=" h-fit md:absolute md:-top-60 left-0 "
            alt="home banner "
            priority
          />
        </div>
      ))}
    </div>
  );
};

export default Banner;

export async function getServerSideProps(context) {
  const data = await fetch("https://picsum.photos/v2/list").then((res) =>
    res.json()
  );

  console.log(data);
  return {
    props: {}, // will be passed to the page component as props
  };
}
