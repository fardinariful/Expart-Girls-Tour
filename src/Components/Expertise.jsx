import logo from '../assets/Images/Logo.png'
import IMAGE1 from '../assets/Images/Frame 37.png'
import IMAGE2 from '../assets/Images/Frame 37 (1).png'
import IMAGE3 from '../assets/Images/Frame 37 (2).png'
import IMAGE4 from '../assets/Images/Frame 37 (3).png'
const Expertise = () => {
    return (
        <div className='mt-28'>
            <div className='flex flex-col justify-center items-center space-y-4'>
                <button className="btn bg-[#0872BA4D] text-[#000000] -rotate-12">Why Choose us</button>
                <p className="font-semibold text-5xl">Why Choose Expat Global Girls</p>
                <p className="text-xl font-medium text-[#344054]">Empowering women to travel with confidence and ease worldwide</p>
            </div>

            <div>
                <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100">
                    {/* Center Logo */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <img
                            src={logo}
                            alt="Logo"
                            className="w-24 h-24  "
                        />
                    </div>

                    {/* Grid Layout for Cards */}
                    <div className="relative w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-28 p-6 z-10">
                        {/* Card 1 */}
                        <div className="relative flex flex-col items-start p-6  rounded-e-lg border border-[#0872BA33] ">
                            <div className="flex items-center justify-center w-12 h-12 mb-4 bg-white">
                                <img src={IMAGE1} alt="" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800">Affordable Housing</h3>
                            <p className="mt-2 text-sm text-gray-600">
                                Save money and travel smarter by sharing accommodations with fellow members.
                            </p>

                        </div>

                        {/* Card 2 */}
                        <div className="flex flex-col items-start p-6  rounded-lg  border border-[#0872BA33]">
                            <div className="flex items-center justify-center w-12 h-12 mb-4 bg-white">
                                <img src={IMAGE2} alt="" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800">Flexible Options</h3>
                            <p className="mt-2 text-sm text-gray-600">
                                From memberships to travel & lifestyle preferences—you have the power to choose.
                            </p>


                        </div>

                        {/* Card 3 */}
                        <div className=" flex flex-col items-start p-6  rounded-lg  border border-[#0872BA33]">
                            <div className="flex items-center justify-center w-12 h-12 mb-4 bg-white">
                                <img src={IMAGE3} alt="" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800">Verified Profiles</h3>
                            <p className="mt-2 text-sm text-gray-600">
                                A reliable community with verified profiles for added safety and peace of mind.
                            </p>

                        </div>

                        {/* Card 4 */}
                        <div className=" flex flex-col items-start p-6  rounded-lg ROUND  border border-[#0872BA33]">
                            <div className="flex items-center justify-center w-12 h-12 mb-4 bg-white">
                                <img src={IMAGE4} alt="" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800">Women-Only Spaces</h3>
                            <p className="mt-2 text-sm text-gray-600">
                                Safe, supportive spaces for women to connect and thrive period.
                            </p>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Expertise;