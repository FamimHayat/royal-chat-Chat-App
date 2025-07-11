import React, { useEffect, useState } from "react";

import User from "../User,Friend,Group/User";
import { HiPlusSmall } from "react-icons/hi2";
import SearchBar from "../other_components/SearchBar";
import Friend from "../User,Friend,Group/Friend";
import { getDatabase, ref, onValue } from "firebase/database";
import { useSelector } from "react-redux";

const ChatList = () => {
  const db = getDatabase();
  const [userModal, setUserModal] = useState(false);
  const [userList, setUserList] = useState([]);
  const [friendList, setFriendList] = useState([]);
  const myData = useSelector((state) => state.signedUserData.UserData);
  
  
  
  // const

  useEffect(() => {
    onValue(ref(db, "userList/"), (snapshot) => {
      let arr = [];
      snapshot.forEach((items) => {
        arr.push({ ...items.val(), id: items.key });
      });
      setUserList(arr);
    });
    onValue(ref(db, "friendList/"), (snapshot) => {
      let arr = [];
      snapshot.forEach((items) => {
        if (
          items.val().creatorId === myData.uid ||
          items.val().participantId === myData.uid
        ) {
          arr.push({ ...items.val(), id: items.key });
        }
      });
      setFriendList(arr);
    });
  }, []);

  return (
    <>
      {/* userList  codes starts here*/}
      {userModal && (
        <div className="absolute w-full rounded-2xl h-[calc(100dvh-63px)] bg-[#000000d1]">
          <div className="absolute md:w-[280px] lg:w-[400px] h-[calc(100dvh-263px)] p-2 z-1  rounded-2xl bg-[#0051f3] left-1/2 top-5">
            <div className="flex gap-2 p-2 pb-5  border-b-2">
              <p className="text-4xl p-1 font-headerFont text-white bg-[#0000008d] ">
                user list{" "}
              </p>
              <button
                onClick={() => setUserModal(false)}
                className="w-fit ml-auto bg-[#000000a2] mr-2 text-white py-1.5 rounded-4xl font-headerFont flex items-center  text-2xl  cursor-pointer px-4 active:bg-transparent transition-all hover:bg-[#000d]"
              >
                back <span className="ml-4">X</span>
              </button>
            </div>
            <div className=" h-[calc(100dvh-365px)] flex flex-col gap-2 rounded-2xl mt-1 overflow-y-auto">
              {userList.map(
                (item) =>
                  item.id !== myData.uid && <User key={item.id} data={item} />
              )}
            </div>
          </div>
        </div>
      )}
      {/* userList  codes ends here*/}
      <section className="border-2 border-[#0000004b] md:w-3xl lg:w-4xl  rounded-2xl h-[calc(100dvh-63px)] bg-[#0051f315] overflow-hidden backdrop-blur-[9px] backdrop-saturate-[120%] shadow-2xl">
        <div>
          <div className="mx-4 mb-2 mt-4 lg:mt-6 flex ">
            <p className="text-white font-headerFont text-3xl tracking-wide">
              chat with friends
            </p>
            <button
              onClick={() => setUserModal(true)}
              className="w-fit ml-auto bg-[#000000a2] mr-2 text-white py-1.5 rounded-4xl font-headerFont flex items-center  text-2xl  cursor-pointer px-4 active:bg-transparent transition-all hover:bg-[#000d]"
            >
              add
              <HiPlusSmall className="font-semibold" />
            </button>
          </div>
          <div className="border-b-2 flex items-center gap-1 border-[#00000024]">
            <SearchBar />
            <div></div>
          </div>
          {/* friendList  codes starts here*/}

          <div className="flex flex-col gap-1 h-[calc(100dvh-55px)]  overflow-y-auto ">
            {friendList.map((item) =>
              item.creatorId === myData.uid ? (
                <Friend
                  key={item.id}
                  conversationId={item.id}
                  userName={item.participantUserName}
                  profilePicture={item.participantPhotoURL}
                  id={item.participantId}
                  lastMessage={item.lastMessage}
                />
              ) : (
                <Friend
                  key={item.id}
                  conversationId={item.id}
                  userName={item.creatorUserName}
                  profilePicture={item.creatorPhotoURL}
                  id={item.creatorId}
                  lastMessage={item.lastMessage}
                />
              )
            )}
          </div>
          {/* friendList  codes ends here*/}
        </div>
      </section>
    </>
  );
};

export default ChatList;
