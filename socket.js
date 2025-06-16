import { io } from "socket.io-client";

export const socket = io("http://localhost:3000", {
  transports: ["websocket"],
  reconnectionAttempts: 5,
  timeout: 5000,
});

// export const chatWithUser = socket.on("connect", (userId, targetUserId) => {
//   console.log("✅ Connected to server");

//   try {
//     socket.emit("joinChat", userId, targetUserId);
//     socket.emit("sendMessage", userId, targetUserId, "hello from user1");
//   } catch (err) {
//     console.error("❌ Error while emitting:", err.message);
//   }
// });

socket.on("connect_error", (err) => {
  console.error("❌ Connection error:", err.message);
});

// socket.on("messageRecieved", (data) => {
//   console.log("📩 Message received:", data.message);
// });
