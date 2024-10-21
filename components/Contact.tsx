import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <div
      id="contact"
      className="pt-32 container text-purple-400 font-semibold"
      data-aos="fade-left"
    >
      Contact
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-3">
          <h2
            className="text-5xl text-white justify-center text-center"
            data-aos="fade-left"
          >
            Get In Touch
          </h2>
          <p className="text-purple-400 text-[18px] pt-1" data-aos="fade-up">
            Whether you have a project in mind, want to collaborate, or simply
            have a question, feel free to reach out. I'm always open to
            discussing new ideas, or providing guidance
            on any tech-related challenges you might be facing. Drop me a
            message, and let's create something amazing together!
          </p>
          <div
            className=" flex gap-3 items-center text-white"
            data-aos="fade-left"
          >
            <MdOutlineMail size={30} /> haniarizwan0046@gmail.com
          </div>
          <div
            className=" flex gap-3 items-center text-white"
            data-aos="fade-left"
          >
            <IoCallOutline size={30} /> (021)12345-67890
          </div>
        </div>
        <div className="space-y-8" data-aos="fade-left">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className=" h-[40px] bg-transparent border border-accent"
              id="name"
            ></input>
          </div>

          <div className="flex flex-col gap-1" data-aos="fade-left">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="Enter your email"
              className=" h-[40px] bg-transparent border border-accent"
              id="email"
            ></input>
          </div>

          <div className="flex flex-col gap-1 text-white" data-aos="fade-left">
            <label htmlFor="msg">Message</label>
            <textarea
              placeholder="Enter your Message"
              className=" bg-transparent border border-accent"
              id="msg"
              rows={7}
            ></textarea>
          </div>
          <button className="text-purple-600 font-semibold p-2 px-6 hover:bg-purple-400 bg-accent">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
