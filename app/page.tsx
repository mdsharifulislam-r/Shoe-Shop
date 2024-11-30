import Hero from "@/components/Home/Hero";
import Client from "@/components/Home/Client";
import Image from "next/image";
import Menu from "@/components/Home/Menu";
import Classes from "@/components/Home/Classes";
import Banner from "@/components/Home/Banner";
import FeaturedProduct from "@/components/Home/FeaturedProduct";
import ShopBySport from "@/components/Home/ShopBySport";
import Testmonials from "@/components/Home/Testmonials";
import Subscribe from "@/components/Home/Subscribe";

export default function Home() {
  return (
   <div>
 <Hero/>
 <Client/>
 <Menu/>
 <Classes/>
 <Banner/>
 <FeaturedProduct/>
 <ShopBySport/>
 <Testmonials/>
 <Subscribe/>
   </div>
  );
}
