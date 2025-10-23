import BrandCounter from "@/components/brandCounter";
import Hero from "@/components/hero";
import How from "@/components/How";
import Locations from "@/components/Locations";
import Ticker from "@/components/Ticker";
import What_Why from "@/components/what_why";


export default function Home() {
  return (
    <div>
      <Hero/>
      <BrandCounter/>
      <Ticker/>
      <What_Why/>
      <How/>
      <Locations/>
    </div>
  );
}
