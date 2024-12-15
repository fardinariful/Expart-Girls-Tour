import frame from '../assets/Images/Frame 172.png'
const Member = () => {
    return (
        <div className='mt-52 flex flex-row justify-between w-11/12 mx-auto gap-6'>
            <div className=' w-1/2'>
                <img src={frame} alt="" />
            </div>
            <div className='w-1/2 space-y-3 '>
                <p className='text-5xl font-semibold'>Your Community for <br /> Women Ready to Go <br /> Abroad</p>
                <p className='text-[#344054]'>We’re thrilled you found us! At Expat Global Girls, we empower women to pursue their dreams abroad. Our platform connects women seeking housemates for international moves and trips, offering a safe, supportive community and a searchable directory to help you find the perfect living companion. Join us to make your move abroad affordable, achievable, and filled with support!</p>
                <button className='btn text-white bg-[#0872BA] px-3'>Become a Member</button>
            </div>
        </div>
    );
};

export default Member;