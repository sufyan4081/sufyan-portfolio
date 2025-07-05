const MessageList = ({ message, messagesEndRef, isTyping }) => {
  console.log("isTyping", isTyping);
  return (
    <div className="chat-bg-img h-[39vh] lg:h-[52.5vh] overflow-y-auto  p-3 custom-scrollbar flex flex-col gap-3">
      {message.map((item, i) => (
        <div
          key={i}
          className={`max-w-sm py-1 text-sm px-2 rounded-lg shadow-md ${
            item.sender === "You"
              ? "self-end bg-green-400 text-black"
              : "self-start bg-purple-600 text-white"
          }`}
        >
          {item.text === "wait" ? (
            <div className="flex space-x-1">
              <span className="h-2 w-2 bg-white rounded-full animate-bounce [animation-delay:.1s]"></span>
              <span className="h-2 w-2 bg-white rounded-full animate-bounce [animation-delay:.3s]"></span>
              <span className="h-2 w-2 bg-white rounded-full animate-bounce [animation-delay:.5s]"></span>
            </div>
          ) : (
            <>
              <strong className="block text-xs opacity-60 ">
                {item.sender}
              </strong>
              <p>{item.text}</p>
              <p className="text-xs opacity-60">{item.time}</p>
            </>
          )}
        </div>
      ))}

      {/* scroll target on new msg */}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageList;
