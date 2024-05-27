import React, { useState } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import NoChatSelected from "./NoChatSelected";
import { useSelector } from "react-redux";

const MessageContainer = () => {
    const selectedConversation = useSelector((state) => state.UseConversation.selectedConversation);
    let chatUser = localStorage.getItem("chat-user")
    chatUser = JSON.parse(chatUser)

    const message = useSelector((state) => state.UseConversation.messages);

  return (
    <div className="w-full h-full overflow-hidden">
      {!selectedConversation ? (
        <NoChatSelected user={chatUser.fullName}/>
      ) : (
        <div className="w-full relative h-full ml-5 text-white">
        <div className="">
          <span>To: </span>
          <span>{selectedConversation.fullName}</span>
        </div>
        <Messages selectedConversation={selectedConversation}/>
        <MessageInput messages={message} selectedConversation={selectedConversation}/>
      </div>
      )}
    </div>
  );
};

export default MessageContainer;
