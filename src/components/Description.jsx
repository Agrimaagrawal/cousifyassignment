import jobseekers from "../assets/jobseekers.png"


const Description = () => {
  return (
    <div className="w-full  flex justify-center items-center mt-28 flex-col  md:gap-9 lg:flex-row ">
      <div className="md:w-1/2 pl-4 pr-4 lg:p-12">
        <img src={jobseekers}></img>
      </div>
      <div className="fle flex-col justify-center items-center md:w-[400px] ">
        <h1 className="text-xl p-5 pb-3">GOT TALENT?</h1>
        <h1 className="text-3xl font-extrabold p-4">Why job seekers love us</h1>
        <p className="text-xl pb-2 p-4 ">Unique jobs at startups and tech companies you can't find anywhere else</p>
        <p className="text-xl pb-2 p-4 ">Say goodbye to cover letters - your profile is all you need. One click to apply and you're done.</p>
        <p className="text-xl pb-2 p-4 ">Everything you need to know to job search - including seeing salary and stock options upfront when looking</p>
        <p className="text-xl pb-2 p-4 ">Connect directly with founders at top startups - no third party recruiters allowed</p>
      </div>
    </div>
  )
}

export default Description
