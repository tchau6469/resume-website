import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen px-6 py-12 md:px-12 md:py-16 lg:flex lg:max-w-screen-xl lg:px-20 lg:py-0 xl:px-36">
      <LeftSide className="lg:sticky lg:top-0 lg:max-h-screen lg:w-1/2 lg:py-24"></LeftSide>
      <RightSide className="pt-24 lg:w-1/2"></RightSide>
    </div>
  );
}
// class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0"
