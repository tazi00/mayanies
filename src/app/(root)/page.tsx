// import Image from "next/image";

import { Metadata } from "next";
import AboutUs from "./_sections/AboutUs";
import HeroSec from "./_sections/HeroSec";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Our School - Nurturing Future Leaders",
};

export default function Home() {
  return (
    <>
      <HeroSec />
      <AboutUs />
    </>
  );
}
