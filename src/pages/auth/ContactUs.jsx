import { LucidePhoneCall } from "lucide-react";
import React from "react";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import {
  MdOutlineLocationCity,
  MdOutlineLocationOn,
  MdOutlineMail,
} from "react-icons/md";

const ContactUs = () => {
  return (
    <div className="w-[] h-[] flex flex-col">
      <div className="flex flex-col items-center gap-3 p-8">
        <h1 className="font-bold text-3xl">Contact Us</h1>
        <p className="text-[#727272]">
          Any question or remarks? Just write us a message!
        </p>
      </div>
      <div className="flex ">
        <div className="w-[35vw] flex flex-col justify-between bg-black text-white p-10 rounded-tr-xl rounded-br-xl">
          <div className=" flex flex-col gap-2">
            <h3 className="font-bold text-2xl">Contact Information</h3>
            <p className="text-[#c9c9c9]">
              Say something to start a live chat!
            </p>
          </div>
          <div className="flex flex-col gap-13 ">
            <p className="flex gap-8 items-center">
              <span>
                <LucidePhoneCall />
              </span>{" "}
              <span>+233 24 179 0035</span>
            </p>
            <p className="flex gap-8 items-center">
              <span>
                <MdOutlineMail className="text-2xl" />
              </span>{" "}
              <span>devs@gmail.com</span>
            </p>
            <p className="flex items-center gap-8">
              <span>
                <MdOutlineLocationOn className="text-2xl" />
              </span>{" "}
              <span>132 Buro, Labone Street</span>
            </p>
          </div>

          <div className="flex gap-5">
            <span>
              <FaXTwitter />
            </span>
            <span>
              {" "}
              <FaFacebook />
            </span>
            <span>
              <FaInstagram />
            </span>
          </div>
        </div>
        <div className="w-[65vw] p-10">
          <form action="" className="flex flex-col gap-10">
            <div className="flex gap-10">
              <div className="flex flex-col w-[100%] gap-2">
                <label htmlFor="">First Name</label>
                <input
                  type="text"
                  className="border-b-1 border-[#8D8D8D] outline-none"
                />
              </div>
              <div className="flex flex-col w-[100%] gap-2">
                <label htmlFor="">Last Name</label>
                <input
                  type="text"
                  className="border-b-1 border-[#8D8D8D] outline-none"
                />
              </div>
            </div>
            <div className="flex gap-10">
              <div className="flex flex-col w-[100%] gap-2">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  className="border-b-1 border-[#8D8D8D] outline-none"
                />
              </div>
              <div className="flex flex-col w-[100%] gap-2">
                <label htmlFor="">Phone Number</label>
                <input
                  type="tel"
                  className="border-b-1 border-[#8D8D8D] outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="font-bold ">
                Select Subject
              </label>
              <div className="flex justify-between">
                <label htmlFor="" className="flex items-center gap-2">
                  {" "}
                  <input
                    type="radio"
                    name="subject"
                    id=""
                    value="General Inquiry"
                  />{" "}
                  <p>General Inquiry</p>
                </label>
                <label htmlFor="" className="flex items-center gap-2">
                  {" "}
                  <input
                    type="radio"
                    name="subject"
                    id=""
                    value="Refund"
                  />{" "}
                  <p>Refund</p>
                </label>
                <label htmlFor="" className="flex items-center gap-2">
                  {" "}
                  <input
                    type="radio"
                    name="subject"
                    id=""
                    value="Suggestion"
                  />{" "}
                  <p>Suggestion</p>
                </label>
                <label htmlFor="" className="flex items-center gap-2">
                  {" "}
                  <input
                    type="radio"
                    name="subject"
                    id=""
                    value="Compliment"
                  />{" "}
                  <p>Compliment</p>
                </label>
              </div>
            </div>

            <div className="flex flex-col items-end gap-10">
              <div className="flex flex-col w-[100%]">
                <label htmlFor="">Message</label>
                <textarea
                  name="message"
                  id=""
                  placeholder="Write your message here..."
                  className="border-l-1 border-b-1 pl-2 h-30 outline-none resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-black text-white px-12 py-3 rounded-[5px]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
