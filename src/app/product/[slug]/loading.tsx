import { VscLoading } from "react-icons/vsc";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin mx-4 text-primary text-3xl">
        <VscLoading />
      </div>
      <div className="text-primary ">Loading</div>
    </div>
  );
}
