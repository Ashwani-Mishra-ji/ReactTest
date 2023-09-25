import React from 'react'

const Home = () => {
  return (
    <>
         <div className="absolute bottom-0 right-0 h-66 w-65 ">
          <img src="/src/assets/man-image.png " className="z-10" alt="" />
        </div> 
        <div className="relative  h-80 w-68">
          <div className="absolute inset-y-0 left-0 w-46 mt-60 ml-40 ">
            <img src="/src/assets/fresh.png" alt="fresh" />
          </div>
        </div>
        <br />
        <div className=" img2022 mt-10">
          <img src="/src/assets/2022.png" alt="2022" />
        </div>
        <div className="lookimg ">
          <img src="/src/assets/look.png" alt="2022" />
        </div>
     </>

  
  )
}

export default Home
