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
            Get all the products that you want
            <br />
            easily in one place.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Banner;
