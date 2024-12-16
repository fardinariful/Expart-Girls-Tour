import pepole from '../assets/Images/Pepole.png'
import qua from '../assets/Images/quotations 1.png'
import left from '../assets/Images/arrow-right.png'
import right from '../assets/Images/arrow-right (1).png'

const Reviews = () => {
    return (
        <div className="w-11/12 mx-auto mb-20">
            <div className='flex flex-col justify-center items-center space-y-4 mt-32'>
                <button className="btn bg-[#0872BA4D] text-[#000000] -rotate-12">Testimonial</button>
                <p className="font-semibold text-5xl">What Our Members Say</p>
                <p className="text-xl font-medium text-[#344054] text-center">Hear from women who share your passion for exploring new cultures, experiencing life abroad, and <br /> making the most of every opportunity.</p>
            </div>
            <div className="bg-white h-[272px] flex flex-row  gap-10 ">
                <div className="flex flex-row justify-first items-center w-[40%] pl-3 ">
                    <div className="bg-blue-500 text-white p-6 w-80 rounded-md shadow-lg  custom-skew ">

                        <img
                            src={pepole}
                            alt="Profile"
                            className="w-20 h-20 rounded-full mb-4"
                        />
                        <h3 className="text-lg font-semibold">Sarah Thompson</h3>
                        <p className="text-sm mt-1">Teacher · Non-smoker · Married</p>
                        <p className="text-sm mt-1">Silom, Bangkok</p>
                        <p className="text-sm mt-1">Dec 3-8</p>
                        <span className="absolute top-4 right-4 font-bold text-lg">★ 5.0</span>
                    </div>
                </div>
                <div className='w-[60%] p-14 relative'>
                    <div className='absolute bottom-52 right-4 space-x-4'>
                        <button className='border px-4 rounded-lg'><img src={left} alt="" /></button>
                        <button className='border px-4 rounded-lg'><img src={right} alt="" /></button>
                    </div>
                    <img src={qua} alt="" />
                    <p className='text-2xl relative'>
                        Our smart developers build innovative, efficient,<br />
                        and high-performance solutions. efficient, and <br />
                        high-performance solutions. efficient, and high-<br />
                        performance solutions.
                        <span className='absolute -bottom-14 right-0'>
                            <img  src={qua} alt="" />
                        </span>
                    </p>
                </div>


            </div>



        </div>
    );
};

export default Reviews;