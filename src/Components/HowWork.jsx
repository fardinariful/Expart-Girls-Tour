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


            <div className="w-11/12 mx-auto">
                <div className="grid grid-cols-3 gap-4 items-center">
                    {/* Left Section */}
                    <div className="space-y-20">
                        <div>
                            <p className="font-semibold text-2xl">Plan Your Trip</p>
                            <p className="text-[#475467]">
                                Start by setting your travel dates, destinations, and <br /> preferences.
                                This helps you tailor your search for <br /> housemates who align with
                                your journey.
                            </p>
                            <div className="flex items-center mt-4">
                                <img src={t1} alt="Plan Your Trip" />
                            </div>
                        </div>

                        <div>
                            <p className="font-semibold text-2xl">Connect and Build Relationships</p>
                            <p className="text-[#475467]">
                                Send messages, ask questions, and get to know potential <br /> housemates
                                before committing. Building rapport ensures <br /> a comfortable and trusted
                                connection for your shared <br /> journey.
                            </p>
                            <div className="flex items-center mt-4">
                                <img src={t2} alt="Connect Relationships" />
                            </div>
                        </div>
                    </div>

                    {/* Timeline Section */}
                    <div className="relative flex flex-col items-center">
                        {/* Step 1 */}
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 rounded-full bg-white border-4 border-blue-400 flex items-center justify-center">
                                <span className="text-black font-bold">1</span>
                            </div>
                            <div className="w-px h-24 bg-blue-400 border-dotted border-l-2"></div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 rounded-full bg-white border-4 border-blue-400 flex items-center justify-center">
                                <span className="text-black font-bold">2</span>
                            </div>
                            <div className="w-px h-24 bg-blue-400 border-dotted border-l-2"></div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 rounded-full bg-white border-4 border-blue-400 flex items-center justify-center">
                                <span className="text-black font-bold">3</span>
                            </div>
                            <div className="w-px h-24 bg-blue-400 border-dotted border-l-2"></div>
                        </div>

                        {/* Step 4 */}
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 rounded-full bg-white border-4 border-blue-400 flex items-center justify-center">
                                <span className="text-black font-bold">4</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="space-y-20">
                        <div>
                            <p className="font-semibold text-2xl">Explore Matching Profiles</p>
                            <p className="text-[#475467]">
                                Browse through profiles of like-minded women who <br /> are traveling to
                                similar locations. You can filter results <br /> based on your travel
                                dates, needs, and values.
                            </p>
                            <div className="flex items-center mt-4">
                                <img src={t3} alt="Matching Profiles" />
                            </div>
                        </div>

                        <div>
                            <p className="font-semibold text-2xl">Secure Your Plans & Enjoy the Journey</p>
                            <p className="text-[#475467]">
                                Once you’ve found the right housemate, finalize your <br /> arrangements
                                with confidence. With a trusted <br /> companion, you can travel with
                                peace of mind and <br /> enjoy every moment.
                            </p>
                            <div className="flex items-center mt-4">
                                <img src={t4} alt="Secure Journey" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HowWork;