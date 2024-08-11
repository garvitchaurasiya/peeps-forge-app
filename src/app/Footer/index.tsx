import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

export const Footer = () => {
    return (
        <div className="peeps-tertiary-bg text-white flex items-center justify-around lg:p-20">

            <div className="flex lg:relative lg:top-3">
                <Image src={'/image_resources/peeps_forge_logo_vertical.svg'} height={150} width={150} alt='image' />
            </div>
            <div className="flex flex-col lg:flex-row gap-y-4 lg:justify-between lg:w-full">

                <div className="flex flex-col lg:flex-row gap-y-4 gap-x-10">
                    <div className="flex items-center">
                        <div className="border rounded-full p-1 mx-2"> <MdOutlineMail /></div>
                        <a href='mailto:team@peepsforge.com' className="text-sm">team@peepsforge.com</a>
                    </div>

                    <div className="flex items-center">
                        <div className="border rounded-full p-1 mx-2"> <FaWhatsapp /></div>
                        <span className="text-sm">+91-7427832725</span>
                    </div>
                </div>

                <div className="flex justify-center lg:w-36">
                    <a href="https://www.linkedin.com/company/peeps-forge/" target="_blank">
                        <div className="border rounded-full p-1 mx-2"> <FaLinkedinIn /></div>
                    </a>
                    <a href="https://www.instagram.com/peepsforge/" target="_blank">
                        <div className="border rounded-full p-1 mx-2"> <FaInstagram /></div>
                    </a>
                </div>
            </div>

        </div>
    )
}