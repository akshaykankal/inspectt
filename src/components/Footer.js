import React from 'react'

function Footer() {
    return (
        <div className="flex md:flex-row flex-col justify-center bg-blue-100 md:pt-60">
           <div className="flex flex-col  p-10 md:w-1/3">
               <p className="text-left text-xl text-blue-500 font-bold">Our contact details</p>
               <p className="text-left py-2">Global Head Office: Inspectforless Ltd. 32 Rue Saint-Georges, Port Louis, Mauritius</p>
               <a className="text-left underline text-blue-500" href="#">info@inspectforless.com</a>
           </div>
           <div className="flex flex-col md:w-1/3 p-10">
               <p className="text-left text-xl text-blue-500 font-bold">Latest News</p>
               <a className="text-left py-2" href="#">Latest News</a>
               <a className="text-left " href="#">Terms & Conditions</a>
           </div>
           <div className="flex flex-col p-10 md:w-1/3">
               <p className="text-left text-xl text-blue-500 font-bold">Do you want to become an approved quality control company or inspector?</p>
               <p className="text-left py-2">If you want to see and bid for short or long term QC/QA jobs you're interested in, near you or worldwide, now is the time to sign up and submit your application.</p>
               <button
                  href="#"
                  className="bg-blue-400 border-2 text-white border-blue-400 p-2 w-52 rounded-lg text-center"
                >
                  Create your account
                </button>
           </div>
            
        </div>
    )
}

export default Footer
