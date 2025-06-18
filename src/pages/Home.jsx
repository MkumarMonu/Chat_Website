import React, { useEffect, useState } from "react";
import UserCard from "../components/UserCard.jsx";
import { useSelector } from "react-redux";
import { getYourConnections } from "../features/auth/authApi.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Home() {
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user?.user);

  const [connections, setConnections] = useState([]);
  const getconnections = async () => {
    try {
      const response = await getYourConnections();
      if (response.success) {
        setConnections(response.data);
        toast.success(response.message||"Your all friend fetched successgully!")
      }else{
        toast.error(response.message||"Failed to fetch your friend")
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getconnections();
  }, []);

  const connectToUser = async (targetUserId, chatWithUser) => {
    console.log("Connected to the server");
    navigate(`/chat/${targetUserId}/${chatWithUser}`);
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
              connectToUser(value?._id, value?.username);
            }}
          />
        </div>
      ))}
    </div>
    // <div className="mt-10">this is home page</div>
  );
}

export default Home;
