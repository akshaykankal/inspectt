import React from 'react'
import ReactPlayer from 'react-player';


function YoutubeVedio() {
    return (
        <div className="bg-blue-500 md:h-screen md:mt-10">
           <div className="m-auto font-bold text-4xl text-white md:px-80 md:mx-5 text-left pt-5 p-3">
             <h1>
                Post one request for inspection, get multiple quotes within minutes. Pay by credit card or bank transfer. View your report. Done
             </h1>
           </div>
           <div className=" my-7 md:m-80 md:mt-16 m-5 pb-5 md:pb-0">
             <ReactPlayer controls={true} loop={true} playing="true" width="100%" height="100%" url="/images/2.mp4" className="m-auto "/>
           </div> 
        </div>
    )
}

export default YoutubeVedio
