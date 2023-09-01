import React, { FC } from "react";

import { Skeleton } from "@/components/ui/skeleton";

interface CardSkeletonProps {}

const CardSkeleton: FC<CardSkeletonProps> = ({}) => {
  return (
    <div className="group border-gray-100/30 flex w-full max-w-xs flex-col self-center overflow-hidden rounded-lg border bg-white shadow-xl m-5">
      <a
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
        href="#"
      >
        <Skeleton className="peer absolute top-0 right-0 h-full w-full object-cover" />
      </a>
      <div className="mt-4 px-5 pb-5">
        <a href="#" className="block overflow-hidden h-16">
          <h5 className="text-xl tracking-tight text-black overflow-hidden overflow-ellipsis whitespace-nowrap">
            <Skeleton className="w-full h-5" />
          </h5>
        </a>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-black">
              <Skeleton className="w-32 h-8" />
            </span>
          </p>
        </div>
        <div className="flex items-center justify-between">
          <Skeleton className="w-32 h-10" />
          <Skeleton className="w-32 h-5" />
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
