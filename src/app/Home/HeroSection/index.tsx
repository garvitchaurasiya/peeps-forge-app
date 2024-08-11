import Image, { ImageLoader } from "next/image"

const primaryButtonClass = "peeps-primary-bg text-white text-xl px-12 pt-1 pb-2 rounded-full font-semibold";
const secondaryButtonClass = "border border-black text-black text-xl px-8 pt-1 pb-2 rounded-full font-semibold";

export const HeroSection = () => {
    return (
        <div className="peeps-secondary-bg px-24 pb-24 pt-8">
            <div className="h-full w-full flex justify-evenly items-center">
                <div className="mr-10">

                    <h1 className="heading-1">Connecting Talent with Quality Businesses.</h1>
                    <p className="font-semibold">Customers and employees are more than interactions, they are human. Give them faster, more personalised experiences using AI trained in the art of customer service.</p>

                    <div className="flex mt-4">
                        <button className={`${primaryButtonClass} mr-4`}>Contact Us</button>
                        <button className={secondaryButtonClass}>Why Us?</button>
                    </div>

                </div>
                <div className="w-full p-16">
                    <Image src='/meeting_room.svg' alt='image' layout="responsive" height={100} width={100} />
                </div>
            </div>

        </div>
    )
}