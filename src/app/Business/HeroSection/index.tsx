import Image, { ImageLoader } from "next/image"

export const BusinessHeroSection = () => {
    return (
        <div className="peeps-secondary-bg px-24 pb-24 pt-8">
            <div className="h-full w-full flex justify-evenly items-center">
                <div className="w-full p-16">
                    <Image src='/image_resources/Business/aim_and_growth.svg' alt='image' layout="responsive" height={100} width={100} />
                </div>
                <div className="mr-10">

                    <h1 className="heading-1">How our Business model looks like?</h1>
                    <p className="font-semibold">We believe in quality!</p>

                </div>
            </div>
        </div>
    )
}