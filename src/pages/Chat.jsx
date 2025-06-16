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
    <div className="w-full  bg-amber-600 mt-3 flex justify-center">
      <div className="w-1/2 h-[80vh] bg-amber-300 ">
        <div className="chat chat-start">
          <div className="chat-bubble chat-bubble-primary">
            What kind of nonsense is this
          </div>
        </div>
        <div className="chat chat-start">
          <div className="chat-bubble chat-bubble-secondary">
            Put me on the Council and not make me a Master!??
          </div>
        </div>
        {messages?.map((value, index) => {
          return (
            <div key={index} className="chat chat-end">
              <div className="chat-bubble chat-bubble-warning">
                {value?.message}
              </div>
            </div>
          );
        })}

        <div className="chat chat-end">
          <div className="chat-bubble chat-bubble-error">
            It's never happened before.
          </div>
        </div>

        <div className="flex gap-2 fixed bottom-44 ">
          <input
            type="text"
            className="input input-bordered w-full"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
          />
          <button
            className="btn btn-primary min-w-28"
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
