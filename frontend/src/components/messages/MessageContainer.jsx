import React, { useState } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import NoChatSelected from "./NoChatSelected";
import { useSelector } from "react-redux";

const MessageContainer = () => {
    const selectedConversation = useSelector((state) => state.UseConversation.selectedConversation);
    const Auth = useSelector((state) => state.Auth);
    const user = JSON.parse(Auth.userData)
    const message = useSelector((state) => state.UseConversation.messages);

  return (
    <div className="w-full">
      {!selectedConversation ? (
        <NoChatSelected user={user.fullName}/>
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
