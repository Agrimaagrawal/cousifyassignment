import  { useState } from 'react';
import review1 from '../assets/review1.jpeg';
import review2 from '../assets/review2.jpg';
import review3 from '../assets/review3.jpeg';


const images = [
    { id: 1, src: review1, name:'Yadhu Manoharan',designation:'Sr. iOS Engineer at Cred', review: 'Hire. was able to make the process really easy. They were able to schedule interviews with the best companies in the industry and drove the entire process smoothly.' },
    { id: 2, src: review2, name:'Santosh Nain',designation:'SDE-2 at Dream11',    review: 'A friend of mine told me about Hire. when I started looking for new opportunities. The TopHire team was extremely helpful, professional and quick with everything.' },
    { id: 3, src: review3, name:'Tarun Dugar',designation:'Sr. Software Engineer at cure.fit',review: 'Compared to other job portals, what stood out for me was that Hire., on top of providing really good opportunities, helped me in negotiations with the companies too.' },
    // Add more images and text as needed
  ];

const Review = () => {
    
    
  return (
    <>
  
    <h1 className='md:pb-20 mt-24 text-center font-bold text-2xl lg:text-5xl'>Our users love their successes</h1>
    <div className='w-full flex justify-center items-center flex-col md:flex-row'>
    {images.map((e)=>{
        return(
        <div className='md:w-[400px]  flex gap-4 p-4'>
            <div>
            <img src={e.src} className="w-[200px] rounded-full"></img>
            </div>
            <div>
            <p className='text-xl'>{e.name}</p>
            <p className='pt-1'>{e.designation}</p>
            
            
                <p className='pt-2'>{e.review}</p>
            </div>
            

        </div>
        )
    })
    }
    </div>
  </>
  )
}

export default Review
