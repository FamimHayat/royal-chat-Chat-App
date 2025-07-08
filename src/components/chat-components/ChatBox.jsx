import React, { useRef } from "react";
import User from "../User,Friend,Group/User"
import { FaSmile, FaArrowRight, FaImage } from "react-icons/fa";
import MyMassage from "../other_components/massages/MyMassage"
import OtherMassage from "../other_components/massages/SenderMassage"

const ChatBox = () => {

  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };
  return (
    <div className=" w-full h-[calc(100dvh-63px)] ml-3">
      <div className=" border-2 rounded-2xl">
        <div className="flex items-center gap-5 justify-center py-1 border-b-2 border-[#ffffff3a]">
          <img
            src="/friends.png"
            alt="my-image"
            className="w-18 rounded-full"
          />
          <p className="bg-[#ffffff3a] text-2xl font-headerFont text-[#000000c2] p-1 ">
            friend-name
          </p>
        </div>
        <div className="px-2 h-[calc(100dvh-225px)] w-full   overflow-y-auto  ">
          <MyMassage />
          <OtherMassage />
        </div>
        <div>
          <div className="flex items-center gap-2 p-2 bg-[#1c1c1c] rounded-b-xl">
            {/* Image Upload */}
            <button
              onClick={handleImageClick}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-white text-white active:bg-transparent hover:bg-white/10"
            >
              <FaImage className="text-2xl cursor-pointer " />
            </button>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              className="hidden"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  console.log("Selected image:", file);
                  // Upload logic goes here
                }
              }}
            />

            {/* Input */}
            <input
              type="text"
              placeholder="type your message"
              className="flex-grow px-4 py-4 text-xl rounded-full bg-[#2b2b2b] text-white placeholder:text-gray-400 outline-none shadow-inner shadow-black"
            />

            {/* Emoji */}
            <button className="w-12 h-12 flex items-center justify-center rounded-full border border-white text-white active:bg-transparent hover:bg-white/10">
              <FaSmile className="text-2xl cursor-pointer " />
            </button>

            {/* Send */}
            <button className="w-12 h-12 flex items-center justify-center rounded-full border border-white text-white active:bg-transparent hover:bg-white/10">
              <FaArrowRight className="text-2xl cursor-pointer " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
