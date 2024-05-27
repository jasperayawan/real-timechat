import React, { useState } from "react";
import useSendMessage from "../../hooks/useSendMessage";
import { setMessages } from "../../state/reducers/useConversation.slice";
import { useDispatch } from "react-redux";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const MessageInput = ({ messages, selectedConversation }) => {
  const { loading, sendMessage } = useSendMessage();
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!message) return;
    await sendMessage(setMessages, selectedConversation, dispatch, messages, message);
    setMessage("")
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="absolute bottom-0 left-0 w-full flex flex-row gap-x-2 mt-10 pr-5"
    >
      <input
        type="text"
        placeholder="Send a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="px-5 py-3 text-black border-slate-500 border-[1px] w-full rounded-full"
      />
      <button
        type="submit"
        disabled={loading}
        className="px-5 py-3 flex justify-center items-center bg-slate-800 rounded-full text-white"
      >
        {loading ? <AiOutlineLoading3Quarters fontSize={25}/> : 'Submit'}
      </button>
    </form>
  );
};

export default MessageInput;
