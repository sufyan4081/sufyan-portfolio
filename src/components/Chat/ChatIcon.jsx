import React, { useState } from "react";
import logo from "../../assets/logo.png";
import ChatWindow from "./ChatWindow";
import "./chatStyle.css";
const ChatIcon = () => {
  const [open, setOpen] = useState(false);

  const handleOpneChatbot = () => {
    setOpen((prev) => !prev);
  };

  console.log("open", open);
  return (
    <>
      {/* <div className="text-white z-10 fixed bottom-18 right-10 animate-pulse">
        💬 Connect with me!
      </div>
      <div
        onClick={handleOpneChatbot}
        className="fixed text-white margin bottom-6 right-6 z-1 cursor-pointer"
      >
        {" "}
        <img src={logo} alt="chatbot-logo" className="w-12 h-12" />
      </div> */}

      <div className="fixed bottom-6 right-6 z-10 flex flex-col items-end gap-2">
        {!open && (
          <div className="bg-purple-600 text-white px-3 py-1 rounded-lg text-sm shadow-md animate-pulse">
            💬 Connect with me!
          </div>
        )}

        <div
          onClick={handleOpneChatbot}
          className="cursor-pointer hover:scale-110 transition-transform duration-300"
        >
          <img
            src={logo}
            alt="chatbot-logo"
            className="w-12 h-12 rounded-full"
          />
        </div>
      </div>

      {open && (
        <div className="fixed bottom-10 right-20 z-10  slide-in">
          <ChatWindow />
        </div>
      )}
    </>
  );
};

export default ChatIcon;
