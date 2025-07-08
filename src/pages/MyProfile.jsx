import React, { useState } from "react";
import { MdOutlineModeEditOutline } from "react-icons/md";

const MyProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Famim Hayat");
  const [tempName, setTempName] = useState(name);

  const handleUpdate = () => {
    setName(tempName);
    setIsEditing(false);
  };

  return (
    <>
      <style>
        {`
          @keyframes wave {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>

      <div className="md:scale-120 lg:scale-150 xl:scale-180 relative w-[240px] h-[330px] mx-auto mt-[250px] rounded-2xl overflow-hidden shadow-[0px_8px_28px_-9px_rgba(0,0,0,0.45)] bg-transparent">
        {/* Animated Background Waves */}
        <div
          className="absolute w-[540px] h-[700px] opacity-60 top-0 left-0 -ml-1/2 -mt-[70%] bg-gradient-to-tr from-[#af40ff] via-[#5b42f3] to-[#00ddeb] rounded-[40%]"
          style={{ animation: "wave 25s linear infinite" }}
        />
        <div
          className="absolute w-[540px] h-[700px] opacity-60 top-[210px] left-0 -ml-1/2 -mt-[70%] bg-gradient-to-tr from-[#af40ff] via-[#5b42f3] to-[#00ddeb] rounded-[40%]"
          style={{ animation: "wave 30s linear infinite" }}
        />
        <div
          className="absolute w-[540px] h-[700px] opacity-60 top-[210px] left-0 -ml-1/2 -mt-[70%] bg-gradient-to-tr from-[#af40ff] via-[#5b42f3] to-[#00ddeb] rounded-[40%]"
          style={{ animation: "wave 15s linear infinite" }}
        />

        {/* Content */}
        <div className="absolute top-[1.6em] left-0 right-0">
          {/* Profile Picture */}
          <div className=" w-30  md:w-35 lg:w-40 mx-auto rounded-full mb-5 border-5 border-transparent outline-4 outline-white">
            <img src="/my-image.jpg" alt="Profile" className="rounded-full" />
          </div>

          {/* Name and Actions */}
          <div className="flex flex-col justify-center items-center gap-3">
            {isEditing ? (
              <>
                <input
                  type="text"
                  value={tempName}
                  onChange={(e) => setTempName(e.target.value)}
                  className="text-center px-3 py-1 rounded bg-[#ffffff10] text-white text-[17px] outline-none border border-white/20"
                />
                <button
                  onClick={handleUpdate}
                  className="text-white text-sm px-3 py-1 bg-[#00000070] rounded hover:bg-[#ffffff20] transition cursor-pointer hover:underline"
                >
                  Update
                </button>
              </>
            ) : (
              <>
                <p className="w-full text-white text-center font-semibold text-[20px] p-1 bg-[#00000070]">
                  {name}
                </p>
                <button
                  className="text-white text-sm px-3 py-1 bg-[#00000070] rounded hover:bg-[#ffffff20] transition cursor-pointer hover:underline"
                  onClick={() => setIsEditing(true)}
                >
                  edit
                </button>
              </>
            )}
          </div>

          {/* Static text */}
          <div className="text-[14px] text-white text-center font-light mt-4 lowercase underline">
            my account
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
