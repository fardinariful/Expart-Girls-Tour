import pepole from '../assets/Images/Pepole.png'
import qua from '../assets/Images/quotations 1.png'
const Reviews = () => {
    return (
        <div className="w-11/12 mx-auto ">
            <div className='flex flex-col justify-center items-center space-y-4'>
                <button className="btn bg-[#0872BA4D] text-[#000000] -rotate-12">Testimonial</button>
                <p className="font-semibold text-5xl">What Our Members Say</p>
                <p className="text-xl font-medium text-[#344054] text-center">Hear from women who share your passion for exploring new cultures, experiencing life abroad, and <br /> making the most of every opportunity.</p>
            </div>
            <div className="bg-white flex flex-row justify-between  gap-10">
                <div className='bg-blue-600 w-1/2 p-8 space-y-4 transform perspective-500 hover:rotate-y-45 transition-transform'>
                    <div className='flex flex-row justify-between  items-center'>
                        <img className='rounded-full w-28 h-28' src={pepole} alt="" />
                        <div className='flex flex-row gap-1'>
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" ></input>
                            <p className='text-white'>5.0</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2 text-white'>
                        <p>Sarah Thompson</p>
                        <p>Teacher •  Non - smoker • Married</p>
                        <p>Silom, Bangkok</p>
                        <p>Dec  3-8</p>
                    </div>
                </div>
                <div className='w-1/2'>
                    <img src={qua} alt="" />
                    <p>Our smart developers build innovative, efficient,<br /> and high- performance solutions. efficient, and <br /> high- performance solutions. efficient, and high- <br /> performance solutions.</p>
                    <img className='' src={qua} alt="" />

                </div>

            </div>



        </div>
    );
};

export default Reviews;