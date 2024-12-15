import logo from '../../assets/Images/Logo.png'
import './Banner.css'
const Banner = () => {
    return (
        <div className='background '>
            <div className='w-11/12 mx-auto'>



                <div className='flex flex-row justify-between items-center  px-5 h-20 rounded-xl bg-[#F4F4F433] backdrop-blur-sm'>
                    <img src={logo} className='w-28' alt="" />
                    <button className='btn bg-white px-8 py-1 text-[#0872BA] font-semibold'>Login</button>
                </div>

                <div className='flex flex-row justify-between mt-20'>
                    <div className='mt-10 space-y-4'>
                        <p className='font-bold text-6xl text-white'>The Premier <br />
                            Co-living Travel <br /> Network for Women</p>
                        <p className='text-white font-bold'>Find your perfect housemate,<br />
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

                        <div className="text-sm text-white">
                            You are already a member{" "}
                            <a href="#" className="font-medium text-blue-600 hover:underline">
                                log in
                            </a>
                        </div>

                        <button className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                            Sign up
                        </button>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Banner;