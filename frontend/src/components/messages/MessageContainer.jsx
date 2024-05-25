import React, { useState } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import NoChatSelected from "./NoChatSelected";

const MessageContainer = () => {
    const [noChatSelected, setNoChatSelected] = useState(true);

  return (
    <div className="w-full">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <div className="w-full h-full ml-5 text-white">
        <div className="">
          <span>To: </span>
          <span>Little Kong</span>
        </div>
        <Messages />
        <MessageInput />
      </div>
      )}
    </div>
  );
};

export default MessageContainer;
