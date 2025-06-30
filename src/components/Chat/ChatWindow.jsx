import { useEffect, useRef, useState } from "react";
import MessageInput from "./MessageInput.jsx";
import MessageList from "./MessageList.jsx";
import logo from "../../assets/logo.png";
import { io } from "socket.io-client";
const ChatWindow = () => {
  const [isTyping, setIsTyping] = useState(true);
  //socket
  const socket = useRef(io("http://localhost:5000")).current;

  const messagesEndRef = useRef(null);
  // calculate current time
  const time = new Date();
  let hours = time.getHours();
  hours = hours % 12;
  hours = hours.toString().padStart(2, "0");
  let min = time.getMinutes();
  const ampm = time.getHours() > 12 ? "PM" : "AM";

  const currentTime = `${hours}:${min} ${ampm}`;

  const [message, setMessage] = useState([]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  useEffect(() => {
    const waitMsg = { sender: "bot", text: "wait", time: currentTime };
    setMessage((prev) => [waitMsg]);
    setIsTyping(true);

    const timer = setTimeout(() => {
      const data = [
        {
          sender: "bot",
          text: "Hello !! welcome to my portfolio",
          time: currentTime,
        },
        {
          sender: "bot",
          text: "Let's start with your name.",
          time: currentTime,
        },
      ];
      setMessage((prev) => {
        let updated = [...prev];
        if (updated[updated.length - 1].text === "wait") {
          updated.pop();
        }
        updated.push(...data);
        return updated;
      });
      setIsTyping(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  console.log("message", message);
  return (
    <>
      <div className=" border-1 rounded-full w-sm">
        <div className="h-16 rounded-tr-md rounded-tl-md bg-purple-600 text-white shadow flex items-center ">
          <img
            src={logo}
            alt="Chatbot Logo"
            className="h-10 w-10 rounded-full border-2 mr-3 ml-2"
          />
          <div className="flex flex-col ">
            <h1 className="font-semibold ">Chatbot</h1>
            <p className="text-[11px] text-gray-200">Online</p>
          </div>
        </div>

        <MessageList
          message={message}
          messagesEndRef={messagesEndRef}
          isTyping={isTyping}
        />
        <MessageInput
          setMessage={setMessage}
          currentTime={currentTime}
          setIsTyping={setIsTyping}
          socket={socket}
        />
      </div>
    </>
  );
};

export default ChatWindow;
