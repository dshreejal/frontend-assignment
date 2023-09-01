"use client";
import React, { FC } from "react";
import ReactStars from "react-rating-stars-component";

interface RatingProps {
  value: number;
}

const Rating: FC<RatingProps> = ({ value }) => {
  return (
    <ReactStars
      count={5}
      value={value}
      size={24}
      isHalf={true}
      activeColor="#ffd700"
      edit={false}
      a11y={false}
    />
  );
};

export default Rating;
