import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { getDatabase, onValue, push, ref, set } from "firebase/database";
import { useSelector } from "react-redux";

const User = ({ data }) => {
  const db = getDatabase();

  const [friendList, setFriendList] = useState([]);
  const myData = useSelector((state) => state.signedUserData.UserData);

  const handleAdd = () => {
    set(push(ref(db, "friendList/")), {
      //friend creator data
      creatorId: myData.uid,
      creatorUserName: myData.displayName,
      creatorEmail: myData.email,
      creatorPhotoURL: myData.photoURL,
      //participant data
      participantId: data.id,
      participantUserName: data.userName,
      participantEmail: data.email,
      participantPhotoURL: data.photoURL,
      //last message
      lastMessage: "",
    });
  };

  useEffect(() => {
    onValue(ref(db, "friendList/"), (snapshot) => {
      let arr = [];
      snapshot.forEach((items) => {
        arr.push(items.val().creatorId + items.val().participantId);
      });

      setFriendList(arr);
    });
  }, []);

  return (
    <div className="w-full flex items-center h-fit   py-1 bg-[#0000004b] px-4 active:bg-transparent">
      <div className="h-15 w-15 border-2 border-transparent mr-2 lg:mr-5 rounded-full outline-2 ">
        <img src="/users.png" alt="user-image" className="w-15 rounded-full " />
      </div>
      <div className="text-left">
        <p className="text-2xl font-headerFont text-white tracking-wide">
          {data.userName}
        </p>
      </div>
      <div className="ml-auto">
        {friendList.includes(myData.uid + data.id) ||
        friendList.includes(data.id + myData.uid) ? (
          <div className="flex items-center gap-2 bg-[#00000089] p-1">
            <p className=" hidden sm:flex text-green-600 text-2xl ">friends</p>
            <IoCheckmarkDoneSharp className=" text-xl text-green-600" />
          </div>
        ) : (
          <button
            onClick={handleAdd}
            className="w-fit ml-auto bg-[#0000007d] mr-2 text-white py-1.5 rounded-4xl font-headerFont flex items-center  text-2xl  cursor-pointer px-4 active:bg-transparent transition-all hover:text-[#000000c3] hover:bg-[#7bc36bfc]"
          >
            add
          </button>
        )}
      </div>
    </div>
  );
};

export default User;
