import pepole from '../assets/Images/Pepole.png'
import qua from '../assets/Images/quotations 1.png'
import left from '../assets/Images/arrow-right.png'
import right from '../assets/Images/arrow-right (1).png'

const Reviews = () => {
    return (
        <div className="w-11/12 mx-auto mb-20 space-y-4">
            <div className='flex flex-col justify-center items-center space-y-4 mt-32'>
                <button className="btn bg-[#0872BA4D] text-[#000000] -rotate-12">Testimonial</button>
                <p className="font-semibold text-5xl text-center">What Our Members Say</p>
                <p className="text-xl font-medium text-[#344054] text-center">Hear from women who share your passion for exploring new cultures, experiencing life abroad, and <br /> making the most of every opportunity.</p>
            </div>
            <div className="bg-white h-auto lg:h-[272px] flex flex-col lg:flex-row gap-6 lg:gap-10 p-4 lg:p-0">
                {/* Left Section */}
                <div className="flex flex-row justify-center lg:justify-start items-center w-full lg:w-[40%] pl-0 lg:pl-3">
                    <div className="bg-blue-500 text-white custom-skew p-4 lg:p-6 w-72 lg:w-80 rounded-md shadow-lg relative">
                        {/* Profile Image */}
                        <img
                            src={pepole}
                            alt="Profile"
                            className="w-20 h-20 rounded-full mb-4"
                        />
                        {/* Text Content */}
                        <h3 className="text-lg font-semibold">Sarah Thompson</h3>
                        <p className="text-sm mt-1">Teacher · Non-smoker · Married</p>
                        <p className="text-sm mt-1">Silom, Bangkok</p>
                        <p className="text-sm mt-1">Dec 3-8</p>
                        <span className="absolute top-4 right-4 font-bold text-lg">★ 5.0</span>
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-full  lg:w-[60%] relative flex flex-col  justify-center items-center lg:items-start">
                    {/* Navigation Buttons */}
                    <div className='hidden lg:absolute lg:bottom-52 lg:right-4 lg:flex space-x-4'>
                        <button className='border px-4 rounded-lg'><img src={left} alt="" /></button>
                        <button className='border px-4 rounded-lg'><img src={right} alt="" /></button>
                    </div>

                    {/* Quote Image and Content */}
                    <div className="relative w-full flex flex-col items-center lg:items-start">
                        <img src={qua} alt="Quote" className="w-8 h-8 lg:w-10 lg:h-10 mr-40 " />
                        <p className="text-base lg:text-2xl text-center lg:text-left">
                            Our smart developers build innovative,efficient,<br />
                            and high-performance solutions,efficient,and <br />
                            high-performance solutions.efficient, and high-<br />
                            performance solutions.
                            <span className="absolute bottom-0 -right-2 lg:-bottom-4 lg:right-28">
                                <img src={qua} alt="Quote" className="w-8 h-8 lg:w-10 lg:h-10" />
                            </span>
                        </p>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default Reviews;