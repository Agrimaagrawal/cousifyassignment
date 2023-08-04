import profile from '../assets/profile.png';
import dreamjob from '../assets/dreamjob.png';
import joboffer from '../assets/joboffers.png';

const Steps = () => {
  return (
    <div>
        <div className='w-full flex h-auto mb-36  justify-center items-center gap-28 flex-wrap mt-36'>
            <div className='flex flex-col justify-center items-center  w-[300px]'>
                <div className='w-16 rounded-full mb-6  hover:border-2  border-blue-700 '><img src={profile}></img></div>
                <p className='font-bold pb-3'>STEP 1: COMPLETE PROFILE</p>
                <p className='text-center'>Once you are approved, we showcase you to leading Indian technology startups</p>
            </div>
            <div className='flex flex-col justify-center items-center  w-[300px]'>
                <div className='w-16 rounded-full mb-6  hover:border-2  border-blue-700 '><img src={dreamjob}></img></div>
                <p className='font-bold pb-3'>STEP 2: RECEIVE JOB OFFERS</p>
                <p className='text-center'>Companies start sending interview requests. Talk to only the ones you like.</p>
            </div>
            <div className='flex flex-col justify-center items-center  w-[300px]'>
                <div className='w-16 rounded-full mb-6  hover:border-2  border-blue-700 '><img src={joboffer}></img></div>
                <p className='font-bold pb-3'>STEP 3: ACCEPT DREAM JOB</p>
                <p className='text-center'>Compare your offers and accept the best one. Hired!</p>
            </div>


        </div>
      
    </div>
  )
}

export default Steps
