import React from "react";

const MyProfileTag = () => {
  return (
    <>
          {" "}
           <div className="flex items-center gap-2">
                      <div className="border-2 border-transparent outline-2 outline-secondary rounded-full">
                        <img
                          className="w-14 rounded-full "
                          src="/my-image.jpg"
                          alt="my-image"
                        />
                      </div>
                    
      <div>
        <h3 className="text-xl font-textFont ">famim hayat</h3>

        <Link
          to="/myProfile"
          className="px-2 text-[14px] w-full bg-[#0000004a] text-white font-textFont  rounded nav-custom-shadow hover:bg-[#00000025] hover:text-blue-800 active:bg-transparent focus:text-brandColor"
        >
          <p className="flex items-center gap-2">
            edit profile <LuSettings />
          </p>
        </Link>
      </div>
                    </div>
    </>
  );
};

export default MyProfileTag;
