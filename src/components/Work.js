import React from "react";

function Work() {
  return (
    <>
      <div className=" bg-blue-50 p-3 md:py-10 md:pb-20">
        <h2 className=" text-left text-3xl font-extrabold md:mx-6 md:px-10 py-7 text-blue-400">
          How does it work?
        </h2>
        <div className="md:w-1/2">
          <p className="text-left md:px-16 text-blue-400">
            Inspectforless.com is a global Inspection, Testing and Audit
            marketplace. Users post their requirements and suppliers pitch for the job. All in 5 easy
            steps.
          </p>
        </div>
        <div className=" flex md:flex-row flex-col justify-center text-right space-y-4 md:mr-36 p-3">
          <div className="items-center text-xl font-semibold text-blue-400 md:space-y-8 md:py-10 space-y-4">
          <div className="flex md:flex-row flex-row-reverse justify-end pr-4">
              <p className="items-center md:text-right text-left flex md:pr-8 pl-5 md:pl-0">
                Create your buyer account
              </p>
              <p className="flex rounded-full md:w-24 md:h-24 w:20 h:20 md:border-8 border-blue-400 justify-center items-center  text-4xl  md:text-6xl">
                1
              </p>
            </div>
            <div className="flex md:flex-row flex-row-reverse justify-end pr-4">
              <p className="items-center md:text-right text-left flex md:pr-8 pl-5 md:pl-0">
               Create and post an inspection request easily
              </p>
              <p className="flex rounded-full md:w-24 md:h-24 w:20 h:20 md:border-8 border-blue-400 justify-center items-center  text-4xl  md:text-6xl">
                2
              </p>
            </div>
            <div className="flex md:flex-row flex-row-reverse justify-end pr-4">
              <p className="items-center md:text-right text-left flex md:pr-10 ml-5 md:ml-0">
                Get the best bids from Quality <br/> Control pros around the world
              </p>
              <p className="flex rounded-full md:w-24 md:h-24 w:20 h:20 md:border-8 border-blue-400 justify-center items-center text-4xl  md:text-6xl">
                3
              </p>
            </div>
          </div>
          <div className="items-center flex flex-col justify-evenly text-xl font-semibold text-blue-400 text-left md:border-l-8 border-blue-400 md:py-10 space-y-4 md:pl-3">
            <div className="flex flex-row justify-between  ">
              <p className="flex rounded-full md:w-24 md:h-24 w:20 h:20 md:border-8 border-blue-400 justify-center items-center text-4xl  md:text-6xl">
                4
              </p>
              <p className="items-center flex ml-5 ">
                Select the best bidder and activate the job
              </p>
            </div>
            <div className="flex flex-row justify-between  ">
              <p className="flex rounded-full md:w-24 md:h-24 w:20 h:20 md:border-8 border-blue-400 justify-center items-center text-4xl  md:text-6xl">
                5
              </p>
              <p className="items-center flex ml-5">
                Select the best bidder and activate the job
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Work;
