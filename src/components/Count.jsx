import React, { useState, useEffect } from 'react';

const Count = () => {
  const [count, setCount] = useState(0);
  const targetNumber = 600000;
  const increment = targetNumber / 100;
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        const newCount = prevCount + increment;
        return newCount >= targetNumber ? targetNumber : newCount;
      });
    }, 30); // Change this value for the interval of the animation (in milliseconds)

    return () => clearInterval(interval);
  }, []);
  return (
    <div className='flex h-[200px] mt-3 w-full justify-around border-y-2 border-b-slate-400'>
      <div className='w-[510px] flex justify-center items-center flex-col border-x-2 border-b-slate-400'>
        <p className=' text-xl lg:text-5xl font-bold text-blue-600'>130K+</p>
        <p className='lg:text-xl text-blue-600'>Tech Jobs</p>
      </div>
      <div className='w-[510px] flex justify-center items-center flex-col border-x-2 border-b-slate-400'>
        <p className=' text-xl lg:text-5xl font-bold text-pink-700'>{count.toLocaleString()}</p>
        <p className='lg:text-xl text-pink-700'>Matches Made</p>
      </div>
      <div className='w-[510px] flex justify-center items-center flex-col border-x-2 border-b-slate-400'>
        <p className=' text-xl lg:text-5xl font-bold text-orange-500'>8M+</p>
        <p className='lg:text-xl text-orange-500'>Students Ready</p>
      </div>
    </div>
  )
}

export default Count

