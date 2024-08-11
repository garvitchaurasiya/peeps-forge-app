import Image, { ImageLoader } from "next/image"

const primaryButtonClass = "peeps-primary-bg text-white text-md md:text-xl px-8 pt-1 pb-2 rounded-full font-semibold";
const secondaryButtonClass = "border border-black text-black text-md md:text-xl px-6 pt-1 pb-2 rounded-full font-semibold";

export const HeroSection = () => {
    return (
        <div className="peeps-secondary-bg px-10 pt-6 pb-16 lg:px-24 lg:pb-24 lg:pt-8">
            <div className="h-full w-full flex justify-evenly items-center">

                <div className="w-full z-10">

                    <h1 className="heading-2 lg:heading-1">Connecting Talent with Quality Businesses.</h1>
                    <p className="font-semibold">Customers and employees are more than interactions, they are human. Give them faster, more personalised experiences using AI trained in the art of customer service.</p>

                    <div className="flex mt-4 justify-between">
                        <button className={`${primaryButtonClass}`}>Contact Us</button>
                        <button className={secondaryButtonClass}>Why Us?</button>
                    </div>

                </div>
                <div className="w-full px-16 absolute opacity-50 top-20 lg:static lg:opacity-100">
                    <Image src='/meeting_room.svg' alt='image' layout="responsive" height={100} width={100} />
                </div>

            </div>

        </div>
    )
}