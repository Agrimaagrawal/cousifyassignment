

const Hero = () => {
  return (
    <div>
      <div className="w-full  h-[660px] bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 flex justify-center items-center flex-col gap-8">
        <div>
            <h1 className="font-extrabold lg:text-5xl text-xl text-center p-2"> Find your next top tech job in 1 week.</h1>
            <p className="lg:text-2xl text-center p-4">Look beyond the obvious. <span className="bg-yellow-300">Use Hire. to easily get discovered</span>
                 <br></br>by<span className="bg-yellow-300"> awesome companies</span> and get referred to job positions very few know about.</p>
        </div>
        <div>
        <button className="rounded-full px-11 py-3 bg-blue-500 text-white shadow-lg transform transition-transform hover:scale-110 hover:shadow-2xl">Apply Now</button>
   
        </div>
       


      </div>

    </div>
  )
}

export default Hero
