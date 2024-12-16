import frame from '../assets/Images/Frame 172.png'
import arrows from '../assets/Images/Vector.png'
import rac from '../assets/Images/Rectangle 14.png'
const Member = () => {
    return (
        <div className='mt-52  flex flex-row justify-between items-center w-11/12 mx-auto gap-6'>
            <div className='w-1/2 '>
                <img src={frame} alt="" />
            </div>
            <div className='w-1/2 space-y-10 '>
                <img src={rac} alt="" />
                <p className='text-5xl font-semibold'>Your Community for <br /> Women Ready to Go <br /> Abroad</p>
                <p className='text-[#344054]'>We’re thrilled you found us! At Expat Global Girls, we <br /> empower women to pursue their dreams abroad. Our <br /> platform connects women seeking housemates for <br /> international moves and trips, offering a safe, supportive <br /> community and a searchable directory to help you find the <br /> perfect living companion. Join us to make your move abroad <br /> affordable, achievable, and filled with support!</p>
                <button className='btn text-white bg-[#0872BA] px-3 flex items-center'>Become a Member <span className='text-white'><img src={arrows} alt="" /></span></button>
            </div>
        </div>
    );
};

export default Member;