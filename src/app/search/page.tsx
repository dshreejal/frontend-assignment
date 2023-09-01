import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="flex justify-center flex-col gap-3 items-center h-screen">
      <div>No product Searched</div>
      <Button>
        <Link href="/">Go Home</Link>
      </Button>
    </div>
  );
};

export default page;
