import React from "react";

export const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#d9baee] flex justify-center items-center"
    >
      <form
        method="POST"
        action="https://getform.io/f/31dbb721-75a1-4521-a7f0-69cb726b9212"
        className="flex flex-col max-w-[600px] w-full text-black"
      >
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#f3e0ff] text-black-300">
            Contact
          </p>
          <p className="text-black-300 py-10">
            Submit the form below or email me at nbrought28@gmail.com
          </p>
        </div>
        <input type="text" placeholder="Name" name="name" />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="my-4 p-2 bg-white"
        />
        <textarea
          name="message"
          rows="18"
          placeholder="Message"
          className="bg-white p-2"
        ></textarea>
        <button className="text-black border-2 hover:bg-[#bfa3cc] hover:border-[#bfa3cc] px-4 py-3 my-8 mx-auto flex items-center">
          Connect with me!
        </button>
      </form>
    </div>
  );
};

export default Contact;
