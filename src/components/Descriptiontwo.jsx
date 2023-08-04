import Description2 from "../assets/description2.png"

const Descriptiontwo = () => {
  return (
    <div className="w-full flex justify-center items-center mt-7 flex-col-reverse  md:gap-9 lg:flex-row ">
    
    <div className="fle flex-col justify-center items-center md:w-[400px]">
      <h1 className="text-xl p-5 pb-3">NEED TALENT?</h1>
      <h1 className="text-3xl font-extrabold p-4">Why recruiters love us</h1>
      <p className="text-xl pb-2 p-4 ">8 million responsive and startup-ready candidates, with all the information you need to vet them</p>
      <p className="text-xl pb-2 p-4 ">Everything you need to kickstart your recruiting - get job posts, company branding, and HR tools set up within 10 minutes, for free</p>
      <p className="text-xl pb-2 p-4 ">A free applicant tracking system, or free integration with any ATS you may already use</p>

    </div>
    <div className="md:w-1/2 p-4 lg:p-16">
      <img src={Description2}></img>
    </div>
  </div>
  )
}

export default Descriptiontwo
