import React from "react";
const dataImg = [
  {
    id: 1,
    img: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg",
  },
  {
    id: 2,
    img: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg",
  },
  {
    id: 3,
    img: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg",
  },
  {
    id: 4,
    img: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg",
  },
  {
    id: 5,
    img: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg",
  },
  {
    id: 7,
    img: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg",
  },
  {
    id: 8,
    img: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg",
  },
  {
    id: 9,
    img: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg",
  },
];
export default function Explore() {
  return (
    <div className="container mx-auto mt-4 px-4">
      <h2 className="mb-4 mt-10 ml-12 text-3xl font-semibold">
        Explore the marketplace
      </h2>
      <div
        className=" grid grid-cols-4 gap-12
       font-mono"
      >
        {dataImg.map((img) => {
          return (
            <div
              key={img.id}
              className="cursor-pointer flex items-center justify-center"
            >
              <div className="w-2/5 h-2/5">
                <img
                  className="w-full  h-full"
                  src={img.img}
                  alt="Lifestyle"
                  loading="lazy"
                />
                <p>Lifestyle</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
