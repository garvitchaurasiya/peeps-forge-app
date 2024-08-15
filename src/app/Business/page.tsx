import Image from "next/image";
import { BusinessHeroSection } from "./HeroSection";
import { BusinessSteps } from "./Steps";

const Business = () => {
    return (
        <div>
            <BusinessHeroSection />
            <BusinessSteps />
        </div>
    )
}

export default Business;