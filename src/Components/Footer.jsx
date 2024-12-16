import IMG from '../assets/Images/Logo.png'
import twiteer from '../assets/Images/twitter (2) 1.png'
import facebook from '../assets/Images/Group (2).png'
import insta from '../assets/Images/Group.png'
import linkdin from '../assets/Images/Group (1).png'
const Footer = () => {
    return (
        <div>
           
            <div className="footer bg-white text-base-content p-16 mt-28 relative">
                <div className="flex flex-row justify-center items-center gap-48">
                    <div>
                        <img src={IMG} className="w-36 h-32" alt="" />
                        <p className="text-[#475467] font-medium">
                            Scan a Turning Hearts Medallion to learn about and interact <br />
                            with those who have passed on. You can also begin <br />
                            documenting the legacy you wish to leave behind.
                        </p>
                        <div className="space-y-3">
                            <p className="font-medium text-xl">Social Media:</p>
                            <div className="flex flex-row gap-3">
                                <img src={twiteer} alt="" />
                                <img src={facebook} alt="" />
                                <img src={insta} alt="" />
                                <img src={linkdin} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h6 className="footer-title text-[#1D2939]">Quick Link</h6>
                        <a className="text-[#344054]">Home</a>
                        <a className="text-[#344054]">FAQ</a>
                        <a className="text-[#344054]">Country Search</a>
                        <a className="text-[#344054]">Register</a>
                    </div>
                    <div>
                        <p className="text-[#344054]">(316) 555-0116</p>
                        <p className="text-[#344054]">deanna.curtis@example.com</p>
                    </div>
                </div>
                <hr className="border-t border-gray-300 w-20 mr-3" />
                <div className="absolute bottom-4 right-4 flex items-center">
                   
                    <p className="text-[#344054]">&copy; {new Date().getFullYear()} Turning Hearts. All rights reserved.</p>
                </div>
            </div>


        </div>
    );
};

export default Footer;