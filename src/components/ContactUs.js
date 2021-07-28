import React from "react";

function ContactUs() {
  return (
    <div className="bg-blue-500 md:m-32 p-2 flex md:flex-row flex-col">
      <div className="flex flex-col">
        <h2 className="text-left text-3xl font-semibold text-white mx-20 pt-20">
          You want to find out more <br />
          about what we do and how we <br />
          do it?
        </h2>
        <p className="text-left mt-5 mx-20 text-white pb-20 ">
          If you've got a special query about your quality control issue, lab{" "}
          <br />
          testing, or supplier audit, don't hesitate, just drop us a line right
          here.
        </p>
      </div>
      <div className="flex flex-col m-auto space-y-3 p-2">
        <input
          type="text"
          placeholder="Your email*"
          class="flex px-4  w-full border rounded py-3 text-white focus:outline-none items-center bg-blue-500"
        ></input>

        <input
          type="text"
          placeholder="Your question"
          class="flex px-4 w-full border rounded py-3 text-white focus:outline-none items-center bg-blue-500"
        ></input>

        <button
          type="submit"
          class="flex md:w-1/3 mt-6 py-2 rounded  bg-blue-500 text-white border-2 justify-center md:ml-48 md:mr-3 "
        >
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default ContactUs;
