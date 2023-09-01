import React, { FC } from "react";
import BannerImage from "../assets/banner-bg.jpg";
interface BannerProps {}

const Banner: FC<BannerProps> = ({}) => {
  return (
    <main>
      <div
        className="bg-cover bg-no-repeat bg-center py-36"
        style={{ backgroundImage: `url(${BannerImage.src})` }}
      >
        <div className="container">
          <h1 className="text-6xl text-gray-800 font-medium mb-4 capitalize">
            OnlineStore
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam{" "}
            <br />
            accusantium perspiciatis, sapiente magni eos dolorum ex quos dolores
            odio
          </p>
        </div>
      </div>
    </main>
  );
};

export default Banner;
