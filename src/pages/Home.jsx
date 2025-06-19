import React, { useEffect, useState } from "react";
import UserCard from "../components/UserCard.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getConnectios } from "../features/connectionApi/connectionApiSlice.js";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user?.user);

  // const [connections, setConnections] = useState([]);
  const { connections, loading, error } = useSelector(
    (state) => state.connections
  ); // ✅ get from redux

  useEffect(() => {
    // if (!connections || connections.length === 0) {
    dispatch(getConnectios())
      .unwrap()
      .then((res) => {
        toast.success(res.message || "Connections fetched successfully!");
      })
      .catch((err) => {
        toast.error(err.message || "Failed to fetch connections");
      });
    // }
  }, [dispatch]);

  const connectToUser = async (targetUserId, chatWithUser) => {
    console.log("Connected to the server");
    navigate(`/chat/${targetUserId}/${chatWithUser}`);
  };
  return (
    <div className="flex flex-wrap gap-4 p-4">
      {/* <UserCard /> */}
      {connections?.map((value, index) => (
        <UserCard
          username={value.username}
          key={value._id || index}
          email={value.email}
          text={"chat"}
          apiFunction={() => {
            connectToUser(value?._id, value?.username);
          }}
        />
      ))}
    </div>
    // <div className="mt-10">this is home page</div>
  );
}

export default Home;
