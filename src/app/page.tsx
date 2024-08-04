import Image from "next/image";
import {Navbar} from './Navbar'
import './globals.css'
import RootLayout from "./layout";
import { HeroSection } from "./Home/HeroSection";
export default function Home() {
  return (
    <div>
      <HeroSection/>
    </div>
  );
}
