import React, { useEffect, useState } from "react";
import UserCard from "../components/userCard";
import { useSelector } from "react-redux";
import { getYourConnections } from "../features/auth/authApi.js";

function Home() {
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
  return (
    <div className="flex flex-wrap gap-4 p-4">
      {/* <UserCard /> */}
      {connections.map((value, index) => (
        <div key={index}>
          <UserCard username={value.username} email={value.email} />
        </div>
      ))}
    </div>
    // <div className="mt-10">this is home page</div>
  );
}

export default Home;
