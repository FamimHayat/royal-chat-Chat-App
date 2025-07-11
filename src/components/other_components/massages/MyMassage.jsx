import React from 'react'

const MyMassage = ({ message }) => {
 
  
  return (
    <div className="max-w-md ml-auto  my-1.5 ">
      <div className="w-fit ml-auto rounded-l-2xl bg-[#000000c0]  pl-5">
        <p className="text-white font-textFont py-2 pr-3">{message} </p>
      </div>
    </div>
  );
}

export default MyMassage;