import Image from "next/image";
import { BusinessHeroSection } from "./HeroSection";
import { BusinessSteps } from "./Steps";

const Business = () => {
    return (
        <div className="peeps-secondary-bg px-24 pb-24 pt-8">
            <BusinessHeroSection />
            <BusinessSteps />
        </div>
    )
}

export default Business;