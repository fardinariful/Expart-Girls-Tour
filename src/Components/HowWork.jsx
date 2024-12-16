import t1 from '../assets/Images/Filter-rafiki 1.png'
import t2 from '../assets/Images/Friendship-pana 1.png'
import t3 from '../assets/Images/Vision board-bro 1.png'
import t4 from '../assets/Images/Online friends-rafiki 1.png'
const HowWork = () => {
    return (
        <div className='bg-white'>

            <div className="flex flex-col justify-center items-center">
                <p className="text-5xl font-bold text-center">How It Works</p>
                <p className="text-[#344054]">Search and find other travelers heading to the same destination.</p>
            </div>
            <div className='w-11/12 mx-auto'>
                <div className='flex flex-row justify-evenly'>
                    <div className='space-y-3'>
                        <div >
                            <p className='font-semibold text-2xl'>Plan Your Trip</p>
                            <p className='text-[#475467]'>Start by setting your travel dates, destinations, and <br /> preferences. This helps you tailor your search for <br /> housemates who align with your journey.</p>
                            <div className='flex items-center ml-12'>
                                <img src={t1} alt="" />
                            </div>
                        </div>
                        <div>
                            <p className='font-semibold text-2xl'>Connect and Build Relationships</p>
                            <p className='text-[#475467]'>Send messages, ask questions, and get to know potential <br />housemates before committing. Building rapport ensures <br /> a comfortable and trusted connection for your shared <br /> journey</p>
                            <div className='flex items-center ml-12'>
                                <img src={t2} alt="" />
                            </div>

                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center min-h-screen">

                        <div className="relative">

                            <div className="flex flex-col items-center">
                                <div
                                    className="w-12 h-12 rounded-full bg-white border-4 border-gray-300 flex items-center justify-center"
                                >
                                    <span className="text-black font-bold">1</span>
                                </div>

                                <div className="w-px h-12 bg-blue-200 border-dotted border-l-2"></div>
                            </div>


                            <div className="flex flex-col items-center">
                                <div
                                    className="w-12 h-12 rounded-full bg-white border-4 border-gray-300 flex items-center justify-center"
                                >
                                    <span className="text-black font-bold">2</span>
                                </div>

                                <div className="w-px h-12 bg-blue-200 border-dotted border-l-2"></div>
                            </div>


                            <div className="flex flex-col items-center">
                                <div
                                    className="w-12 h-12 rounded-full bg-white border-4 border-gray-300 flex items-center justify-center"
                                >
                                    <span className="text-black font-bold">3</span>
                                </div>

                                <div className="w-px h-12 bg-blue-200 border-dotted border-l-2"></div>
                            </div>


                            <div className="flex flex-col items-center">
                                <div
                                    className="w-12 h-12 rounded-full bg-white border-4 border-gray-300 flex items-center justify-center"
                                >
                                    <span className="text-black font-bold">4</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div >
                        <div className='space-y-3'>
                            <div >
                                <p className='font-semibold text-2xl'>Plan Your Trip</p>
                                <p className='text-[#475467]'>Start by setting your travel dates, destinations, and <br /> preferences. This helps you tailor your search for <br /> housemates who align with your journey.</p>
                                <div className='flex items-center ml-12'>
                                    <img src={t1} alt="" />
                                </div>
                            </div>
                            <div>
                                <p className='font-semibold text-2xl'>Connect and Build Relationships</p>
                                <p className='text-[#475467]'>Send messages, ask questions, and get to know potential <br />housemates before committing. Building rapport ensures <br /> a comfortable and trusted connection for your shared <br /> journey</p>
                                <div className='flex items-center ml-12'>
                                    <img src={t2} alt="" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HowWork;