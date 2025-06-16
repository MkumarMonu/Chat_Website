import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Socket } from "socket.io-client";
import { socket } from "../../socket.js";

function Chat() {
  const { targetUserId } = useParams();
  const [message, setMessage] = React.useState("");
  const [messages, setMessages] = useState([]);
  const user = useSelector((state) => state.auth.user);
  const userId = user?.user?._id;
  const senderName = user?.user?.username;

  const handleSendMessage = () => {
    if (message.trim() === "") return;
    console.log("✅ Socket connected?", socket.connected); // should be true

    socket.emit("sendMessage", senderName, userId, message, targetUserId);
    console.log("📤 Sent:", message);

    setMessages((prev) => [...prev, { senderId: userId, message }]);
    setMessage("");
  };

  useEffect(() => {
    if (!userId || !targetUserId) return;

    // Connect only if not already connected
    if (!socket.connected) socket.connect();

    socket.emit("joinChat", senderName, userId, targetUserId);

    const handleMessageReceived = (data) => {
      console.log("📩 Message received:", data.message);
      setMessages((prev) => [
        ...prev,
        { senderId: targetUserId, message: data.message },
      ]);
    };

    socket.on("messageRecieved", handleMessageReceived);

    return () => {
      socket.off("messageRecieved", handleMessageReceived); // ✅ clean only the event listener
      // DO NOT call socket.disconnect()
    };
  }, [userId, targetUserId]);

  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-4 flex flex-col justify-between h-[80vh]">
        {/* Message Area */}
        <div className="flex-1 overflow-y-auto space-y-2">
          {messages.map((msg, index) => {
            const isSentByUser = msg.senderId === userId;
            return (
              <div
                key={index}
                className={`chat ${isSentByUser ? "chat-end" : "chat-start"}`}
              >
                <div
                  className={`chat-bubble ${
                    isSentByUser ? "chat-bubble-success" : "chat-bubble-primary"
                  }`}
                >
                  {msg.message}
                </div>
              </div>
            );
          })}
        </div>

        {/* Input Area */}
        <div className="flex gap-2 pt-4">
          <input
            type="text"
            className="input input-bordered w-full"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
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

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import socket from "../socket";

// function Chat() {
//   const { id: targetUserId } = useParams(); // get the ID from URL
//   const user = useSelector((state) => state.auth.user?.user);

//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     if (!user || !targetUserId) return;

//     // Join the chat room
//     socket.emit("joinChat", user._id, targetUserId);

//     // Listen for messages
//     socket.on("messageRecieved", (data) => {
//       setMessages((prev) => [
//         ...prev,
//         { senderId: targetUserId, message: data.message },
//       ]);
//     });

//     return () => {
//       socket.disconnect();
//     };
//   }, [user, targetUserId]);

//   const handleSendMessage = () => {
//     if (message.trim() === "") return;

//     socket.emit("sendMessage", user._id, message, targetUserId);
//     setMessages((prev) => [...prev, { senderId: user._id, message }]);
//     setMessage(""); // Clear input
//   };

//   return (
//     <div className="p-4 space-y-4">
//       <div className="h-[70vh] overflow-y-auto bg-gray-100 p-4 rounded">
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className={`chat ${
//               msg.senderId === user._id ? "chat-end" : "chat-start"
//             }`}
//           >
//             <div
//               className={`chat-bubble ${
//                 msg.senderId === user._id
//                   ? "chat-bubble-info"
//                   : "chat-bubble-primary"
//               }`}
//             >
//               {msg.message}
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="flex gap-2">
//         <input
//           type="text"
//           className="input input-bordered w-full"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           placeholder="Type your message..."
//         />
//         <button onClick={handleSendMessage} className="btn btn-primary">
//           Send
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Chat;
