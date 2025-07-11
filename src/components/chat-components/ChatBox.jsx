import React, { useEffect, useState } from "react";
import { FaSmile, FaArrowRight } from "react-icons/fa";
import MyMassage from "../other_components/massages/MyMassage";
import OtherMassage from "../other_components/massages/SenderMassage";
import { useSelector } from "react-redux";
import {
  getDatabase,
  onValue,
  push,
  ref,
  set,
  update,
} from "firebase/database";
import EmojiPicker from "emoji-picker-react";

const ChatBox = () => {
  const db = getDatabase();
  const friendData = useSelector((state) => state.friendUserData.UserData);
  const myData = useSelector((state) => state.signedUserData.UserData);

  const [emoji, setEmoji] = useState(false);
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  // message send function
  const handleSendMessage = () => {
    set(push(ref(db, "messages/")), {
      chatMessage: message,
      senderId: myData.uid,
      receiverId: friendData.id,
    });

    update(ref(db, "friendList/" + friendData.conversationId), {
      lastMessage: message,
    });

    setMessage("");
    setEmoji(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  useEffect(() => {
    onValue(ref(db, "messages/"), (snapshot) => {
      let arr = [];
      snapshot.forEach((items) => {
        if (
          (items.val().senderId === myData.uid ||
            items.val().receiverId === myData.uid) &
          (items.val().senderId === friendData.id ||
            items.val().receiverId === friendData.id)
        ) {
          arr.push({ ...items.val(), id: items.key });
        }
      });
      setMessageList(arr);
    });
  }, [friendData, myData]);

  return (
    <section className="w-full h-[calc(100dvh-63px)] ml-3 rounded-2xl border-2 border-[#00000047] bg-[#0051f315] overflow-hidden backdrop-blur-[9px] backdrop-saturate-[120%] shadow-2xl">
      <div>
        <div className="flex items-center gap-5 justify-center py-1 border-b-2 border-[#ffffff3a]">
          <img
            src="/friends.png"
            alt="my-image"
            className="w-18 rounded-full"
          />
          <p className="bg-[#0000003a] text-2xl font-headerFont tracking-wide text-[#fff] p-1">
            {friendData.userName}
          </p>
        </div>

        <div className="px-2 h-[calc(100dvh-225px)] w-full overflow-y-auto">
          {messageList.map((item) =>
            item.senderId === myData.uid ? (
              <MyMassage key={item.id} message={item.chatMessage} />
            ) : (
              <OtherMassage key={item.id} message={item.chatMessage} />
            )
          )}
        </div>

        <div className="relative">
          {emoji && (
            <div className="absolute scale-75 sm:scale-100 md:scale-75 lg:scale-100 bottom-2 right-10 z-50">
              <EmojiPicker
                onEmojiClick={(e) => setMessage((prev) => prev + e.emoji)}
                className="bg-black rounded-xl shadow-md !"
              />
            </div>
          )}
        </div>

        <div>
          <div className="flex items-center gap-2 p-2 bg-[#1c1c1c] rounded-b-xl">
            <div className="w-full flex gap-2 items-center">
              <div className="w-full">
                <input
                  type="text"
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="type your message"
                  value={message}
                  onKeyPress={handleKeyPress}
                  className="w-full flex-grow px-4 py-4 text-xl rounded-full bg-[#2b2b2b] text-white placeholder:text-gray-400 outline-none shadow-inner shadow-black"
                />
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setEmoji(!emoji)}
                  className="w-6 h-6 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border border-white text-white active:bg-transparent hover:bg-white/10"
                >
                  <FaSmile className="text-2xl cursor-pointer" />
                </button>
                <button
                  onClick={handleSendMessage}
                  disabled={!message}
                  className="w-6 h-6 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border border-white text-white active:bg-transparent hover:bg-white/10"
                >
                  <FaArrowRight className="text-2xl cursor-pointer" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatBox;
