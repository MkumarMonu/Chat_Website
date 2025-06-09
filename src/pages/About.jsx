import React, { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import {
  acceptRequestAPI,
  getRequestAPI,
} from "../features/sendRequest.js/requestApi";
import { toast } from "react-toastify";

function About() {
  const [requests, setRequests] = useState([]);
  const fetchAllRequest = async () => {
    try {
      const response = await getRequestAPI();
      // console.log("response", response?.requests);
      setRequests(response?.requests);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    fetchAllRequest();
  }, []);

  const handleAcceptRequest = async (requestId) => {
    try {
      const response = await acceptRequestAPI(requestId);
      if (response.success) {
        toast.success(response.message);
        await fetchAllRequest();
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error(response.message);
      console.log(error);
    }
  };

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {requests?.map((value, index) => (
        <div key={index}>
          <UserCard
            email={value?.fromUser?.email}
            username={value?.fromUser?.username}
            text={"accept request"}
            apiFunction={() => {
              handleAcceptRequest(value?._id);
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default About;
