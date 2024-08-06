import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export const Footer = () => {
    return (
        <div className="peeps-tertiary-bg text-white flex justify-between p-20">

            <div className="flex">
                Peeps Forge
                <div className="flex items-center mx-8">
                    <div className="border rounded-full p-1 mx-2"> <FaWhatsapp /></div>
                    <span className="text-sm">+91-7427832725</span>
                </div>

                <div className="flex items-center">
                    <div className="border rounded-full p-1 mx-2"> <MdOutlineMail /></div>
                    <a href='mailto:team@peepsforge.com' className="text-sm">team@peepsforge.com</a>
                </div>
            </div>

            <div className="flex">
                <a href="https://www.instagram.com/peepsforge/" target="_blank">
                    <div className="border rounded-full p-1 mx-2"> <FaInstagram /></div>
                </a>
                <a href="https://www.linkedin.com/company/peeps-forge/" target="_blank">
                    <div className="border rounded-full p-1 mx-2"> <FaLinkedinIn /></div>
                </a>
            </div>

        </div>
    )
}