import { useEffect, useRef, useState } from "react";
import { IoIosSend } from "react-icons/io";

const MessageInput = ({ setMessage, currentTime, setIsTyping, socket }) => {
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    const handleBotReplay = (data) => {
      const waitMsg = { sender: "Bot", text: "wait", time: currentTime };
      setMessage((prev) => [...prev, waitMsg]);
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);

        setMessage((prev) => {
          let updated = [...prev];
          updated[updated.length - 1] = data;
          return updated;
        });
      }, 2000);
    };

    socket.on("received_message", handleBotReplay);

    return () => {
      socket.off("received_message", handleBotReplay);
    };
  }, [socket, currentTime, setMessage]);

  const handleSend = (userInput) => {
    if (userInput.trim() === "") return;

    const data = { sender: "You", text: userInput, time: currentTime };
    socket.emit("send_message", data); // send to server
    setMessage((prev) => [...prev, data]);
    setUserInput("");
  };

  return (
    <div className="flex w-full items-center justify-between gap-1 px-2 pb-2 bg-white">
      <input
        type="text"
        name="userInput"
        id="userInput"
        placeholder="Type your message here..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend(userInput)}
        className="border-1 rounded-md w-full pl-3 flex pb-1 outline-0"
      />
      <button
        className="bg-purple-600 text-white p-1 cursor-pointer rounded-md"
        type="submit"
        onClick={() => handleSend(userInput)}
      >
        <IoIosSend className="text-[22px]" />
      </button>
    </div>
  );
};

export default MessageInput;
