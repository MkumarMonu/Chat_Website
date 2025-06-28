# 🔐 ChatConnect - Frontend

This is the **frontend** of a real-time chat application that implements **Authentication & Authorization** using **JWT**. Users can sign up, log in, and chat with their friends in real time using **Socket.IO**.

## 🚀 Features

- 🔒 User authentication with JWT
- 🔐 Role-based authorization
- 💬 Real-time chat using `socket.io-client`
- 👥 Chat with friends (1-to-1 messaging)
- 📦 RESTful API integration
- 🔄 Token-based protected routes
- 🔄 Auto-login via token persistence
- ⚙️ Responsive UI 

## 🛠️ Tech Stack

- **Frontend Framework:** ReactJS 
- **Authentication:** JWT (JSON Web Token)
- **Real-time Communication:** Socket.IO (`socket.io-client`)
- **State Management:** (Redux )
- **Routing:** React Router
- **Styling:** (Tailwind CSS / CSS Modules 
- **API Integration:** Axios or Fetch


## 🔐 Authentication Flow

1. User signs up / logs in.
2. Backend returns a JWT token on successful login.
3. Token is saved to  `cookies`.
4. Socket connection is established **after** authentication.

## 🔌 Real-time Chat with Socket.IO

- Uses `socket.io-client` to connect to the backend server.
- A user can send and receive real-time messages.
- All chat events are handled through socket listeners.
- Socket is initialized only after successful login.





