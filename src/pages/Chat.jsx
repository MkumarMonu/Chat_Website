import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { socket } from "../../socket.js";
import { getChatApi } from "../features/chatApi/chatApi.js";

function Chat() {
  const { targetUserId, chatWithUser } = useParams();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const user = useSelector((state) => state.auth.user);
  const userId = user?.user?._id;
  const senderName = user?.user?.username;
  const messagesEndRef = useRef(null);

  const handleSendMessage = () => {
    if (message.trim() === "") return;
    socket.emit("sendMessage", senderName, userId, message, targetUserId);
    setMessage("");
  };

  const getChatHistory = async () => {
    try {
      const response = await getChatApi(targetUserId);
      setMessages(
        response.messages.map((msg) => ({
          senderId: msg.senderId._id,
          senderName: msg.senderId.username,
          message: msg.message,
        }))
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    getChatHistory();
    if (!userId || !targetUserId) return;

    if (!socket.connected) socket.connect();
    socket.emit("joinChat", senderName, userId, targetUserId);

    const handleMessageReceived = (data) => {
      setMessages((prev) => [
        ...prev,
        {
          senderId: data.senderId,
          message: data.message,
          senderName: data.senderName,
        },
      ]);
    };

    socket.on("messageRecieved", handleMessageReceived);

    return () => {
      socket.off("messageRecieved", handleMessageReceived);
    };
  }, [userId, targetUserId]);

  return (
    <div className="flex justify-center   max-w-3xl mx-auto my-5 bg-white shadow rounded-lg flex-col  h-[80vh]">
      <div className="flex flex-col w-full h-full">
        <div className="bg-blue-600 text-white text-xl font-semibold py-3 px-5 rounded-t-lg ">
          Chat with {chatWithUser}
        </div>
        <div className="flex-1 overflow-y-auto px-4 py-2 space-y-3 mt-2 bg-gray-50">
          {messages.map((msg, index) => {
            const isSentByUser = msg.senderId === userId;
            return (
              <div
                key={index}
                className={`chat ${isSentByUser ? "chat-end" : "chat-start"}`}
              >
                <div className="chat-header text-sm font-semibold text-gray-700">
                  {isSentByUser ? "You" : msg.senderName}
                </div>
                <div
                  className={`chat-bubble text-white ${
                    isSentByUser ? "chat-bubble-success" : "chat-bubble-primary"
                  }`}
                >
                  {msg.message}
                </div>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>

        <div className="border-t p-3 flex gap-2">
          <input
            type="text"
            className="input input-bordered w-full"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSendMessage();
            }}
          />
          <button
            className="btn btn-primary min-w-24"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
