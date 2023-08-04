import adobe from "../assets/adobe.png";
import amazon from "../assets/amazon.png";
import dailyhunt from "../assets/dailyhunt.jpg";
import dream11 from "../assets/dream11.png";
import google from "../assets/Google.png";
import intuit from "../assets/intuit.png";
import microsoft from "../assets/microsoft.jpg";
import rapido from "../assets/rapido.png";
import uber from "../assets/uber.png";
import ganna from "../assets/ganna.png";


const Companies = () => {
    const content=[
        amazon,dailyhunt,dream11,google,intuit,microsoft,rapido,uber,ganna,adobe
    ]
  return (
    <div>
      <h1 className="mt-5 text-3xl font-bold text-center p-20">Leading Companies Build Teams on Hire.</h1>
    
      <div className="flex justify-center items-center gap-6 flex-wrap lg:pl-60 lg:pr-60">
        {
            content.map((e)=>{
                return(
                  <div className="md:w-32 w-20" key={e}>
                 <img src={e}></img>
                     </div>
                )
            })
        }
      
      </div>
      
      
    </div>
  )
}

export default Companies
