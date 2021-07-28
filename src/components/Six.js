import React from 'react'

const Six = () => {
    return (
        <div className="flex md:flex-row flex-col justify-between md:p-36">
          <div className="text-blue-500 text-left flex flex-col md:w-1/2 mx-4 space-y-4">
            <h1 className="text-4xl text-bold" >Complete your request in 5 easy steps.Just tell us what,where,how many,when,and how</h1>
            <p>with our menu driven interface,designed by inspection professionals for buying professionals,it'll take you an average of 3 minutes to go though the tick boxes and drop down menus to define your requirements.</p>
            <button className=" bg-blue-400 text-white p-2 rounded-sm text-sm hover:bg-white hover:text-blue-400 w-64">Do You need an inspection quote?</button>
          </div>
          <div className="flex flex-col md:p-24">
          <img className="md:relative md:right-36 md:bottom-36"  src="/images/step1.jpg"/>        <img  className="md:absolute"  src="/images/step2.jpg"/>
           </div>
        </div>
    )
}

export default Six
