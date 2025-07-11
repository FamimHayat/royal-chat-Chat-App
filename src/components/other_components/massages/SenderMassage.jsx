import React from 'react'

const OtherMassage = ({ message }) => {
  return (
    <div className="max-w-md mr-auto  my-1.5 ">
      <div className="w-fit mr-auto rounded-r-2xl bg-[#000000c0]  pr-4 ">
        <p className="text-white font-textFont py-2 pl-4"> {message}</p>
      </div>
    </div>
  );
};

export default OtherMassage;