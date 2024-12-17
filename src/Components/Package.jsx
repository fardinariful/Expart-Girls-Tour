import im from '../assets/Images/image 9.png'
import rac from '../assets/Images/Rectangle 14.png'
const Package = () => {
    return (
        <div className="bg-[#FFFFFF] flex flex-col items-center w-11/12 mx-auto shadow-xl mt-20 pt-5 rounded-xl">
            <div>
                <img src={rac} alt="" />
            </div>
            <div>
                <p className="text-center text-4xl lg:text-5xl font-bold">Perfect for every type of traveler</p>
            </div>

            <div className='px-3 py-2 mt-5'>
                <img src={im} className='w-[1153px] h-80' alt="" />
            </div>


        </div>
    );
};

export default Package;