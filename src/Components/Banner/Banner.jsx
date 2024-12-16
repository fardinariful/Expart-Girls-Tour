import logo from '../../assets/Images/Logo.png'
import img1 from '../../assets/Images/World-bro 1.png'
import img2 from '../../assets/Images/True friends.jpg'
import img3 from '../../assets/ImageS/Traveling-bro 1.jpg'
import './Banner.css'
const Banner = () => {
    return (
        <div className='background '>
            <div className='w-11/12 mx-auto'>


              {/* Navbar section */}
                <div className='flex flex-row justify-between items-center  px-5 h-20 rounded-xl bg-[#F4F4F433] backdrop-blur-sm'>
                    <img src={logo} className='w-28' alt="" />
                    <button className='btn bg-white px-8 py-1 text-[#0872BA] font-semibold'>Login</button>
                </div>
              {/* Title and form section */}

                <div className='flex flex-row justify-between mt-20'>
                    <div className='mt-10 space-y-4'>
                        <p className='font-bold text-6xl text-white'>The Premier <br />
                            Co-living Travel <br /> Network for Women</p>
                            
                        <p className='text-white font-bold'> Find your perfect housemate,<br />
                            move faster, stay longer, and travel with confidence.</p>
                    </div>

                    <div className="w-full max-w-md p-8 space-y-4 bg-[#38383833] rounded-lg shadow-md backdrop-blur-sm">
                        <h2 className="text-2xl font-bold text-center text-white">Sign up with email</h2>

                        <div className="flex space-x-4">
                            <div className="flex-1">
                                <label htmlFor="firstName" className="block text-sm font-medium text-white">
                                    First name
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    placeholder="Enter your first name"
                                    className="w-full px-3 py-2 mt-1   bg-[#38383833] border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div className="flex-1">
                                <label htmlFor="lastName" className="block text-sm font-medium text-white">
                                    Last name
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    placeholder="Enter your last name"
                                    className="w-full px-3 py-2 mt-1 bg-[#38383833] border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-white">
                                Email address
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email address"
                                className="w-full px-3 py-2 mt-1 bg-[#38383833] border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-white">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                className="w-full px-3 py-2 mt-1 bg-[#38383833] border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div className="text-sm text-white text-center">
                            You are already a member{" "}
                            <a className="font-medium text-white underline">
                                log in
                            </a>
                        </div>

                        <button className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                            Sign up
                        </button>
                    </div>
                </div>

            {/* Statistic and Ads section */}
                <div className='bg-white flex flex-row justify-around gap-5 mt-6 rounded-lg shadow-2xl'>
                    <div className='mt-4'>
                        <img src={img1} alt="" />
                        <p className='font-semibold text-2xl'>150+ Countries</p>
                        <p className='text-[#475467]'>Empowering women to <br /> explore destinations globally.</p>
                    </div>
                    <div className='mt-4'>
                        <img src={img2} alt="" />
                        <p className='font-semibold text-2xl'>Connect & Travel</p>
                        <p className='text-[#475467]'>A trusted community of <br /> verified members.</p>
                    </div>
                    <div className='mt-4'>
                        <img src={img3} alt="" />
                        <p className='font-semibold text-2xl'>Find Your Tribe</p>
                        <p className='text-[#475467]'>Find like-minded housemates <br /> faster and easier.</p>
                    </div>

                </div>


            </div>

        </div>
    );
};

export default Banner;