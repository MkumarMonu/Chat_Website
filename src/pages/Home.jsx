import React, { useEffect, useState } from "react";
import UserCard from "../components/UserCard.jsx";
import { connect, useSelector } from "react-redux";
import { getYourConnections } from "../features/auth/authApi.js";
import { useNavigate } from "react-router-dom";
import { socket } from "../../socket.js";

function Home() {
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user?.user);

  const [connections, setConnections] = useState([]);
  const getconnections = async () => {
    try {
      const response = await getYourConnections();
      console.log(response.data);
      setConnections(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getconnections();
  }, []);

  const connectToUser = async (targetUserId) => {
    // if (!socket.connected) {
    //   socket.connect(); // Only if you're using manual connection
    // }
    console.log("Connected to the server");
    navigate(`/chat/${targetUserId}`);
  };
  return (
    <div className="flex flex-wrap gap-4 p-4">
      {/* <UserCard /> */}
      {connections.map((value, index) => (
        <div key={index}>
          <UserCard
            username={value.username}
            email={value.email}
            text={"chat"}
            apiFunction={() => {
              connectToUser(value?._id);
            }}
          />
        </div>
      ))}
    </div>
    // <div className="mt-10">this is home page</div>
  );
}

export default Home;
