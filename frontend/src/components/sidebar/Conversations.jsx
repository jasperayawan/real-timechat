import React from "react";
import Conversation from "./Conversation";
import useGetConversation from "../../hooks/useGetConversation";
import { setSelectedConversation } from "../../state/reducers/useConversation.slice";
import { useDispatch, useSelector } from "react-redux";

const Conversations = () => {
  const { loading, conversations } = useGetConversation();


  return (
    <div className="flex flex-col overflow-auto">
      {conversations.map((conversation, i) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          lastIdx={i === conversation.length - 1}
        />
      ))}
    </div>
  );
};

export default Conversations;
