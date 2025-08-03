import React, { useEffect, useState } from "react";
import UserCard from "../components/UserCard.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getConnectios } from "../features/connectionApi/connectionApiSlice.js";
import { h1 } from "framer-motion/client";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth?.user);
  // console.log(user);
  // const [connections, setConnections] = useState([]);
  const { connections, loading, error } = useSelector(
    (state) => state.connections
  );

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
      {connections?.length !== 0 ? (
        connections?.map((value, index) => (
          <UserCard
            username={value.username}
            key={value._id || index}
            email={value.email}
            text={"chat"}
            apiFunction={() => {
              connectToUser(value?._id, value?.username);
            }}
          />
        ))
      ) : (
        <div className="flex justify-center items-center w-full h-72">
          <h1 className="text-black font-semibold text-3xl text-center">
            `<span className="text-red-600 text-4xl">{user?.username}</span> ,
            You have no any connection till now!`
          </h1>
        </div>
      )}
    </div>
    // <div className="mt-10">this is home page</div>
  );
}

export default Home;
