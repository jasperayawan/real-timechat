import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import useGetConversation from "../../hooks/useGetConversation";
import useConversationSlice, {
  setSelectedConversation,
} from "../../state/reducers/useConversation.slice";
import { useDispatch } from "react-redux";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { conversations } = useGetConversation();
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      dispatch(setSelectedConversation(conversation))
      setSearch("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex justify-center items-center gap-x-3"
    >
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search px-5 py-3 rounded-full border-slate-400 border-[1px] w-full"
      />
      <button type="submit">
        <CiSearch
          className="h-full text-white cursor-pointer"
          fontSize={25}
        />  
      </button>
    </form>
  );
};

export default SearchInput;
