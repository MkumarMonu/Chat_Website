import React, { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import {
  acceptRequestAPI,
  getRequestAPI,
} from "../features/sendRequest.js/requestApi";
import { toast } from "react-toastify";
import { getConnectios } from "../features/connectionApi/connectionApiSlice";
import { useSelector } from "react-redux";

function About() {
  const [requests, setRequests] = useState([]);
  const user = useSelector((state) => state.auth?.user);
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

  console.log("request formt the about page :", requests);
  const handleAcceptRequest = async (requestId) => {
    try {
      const response = await acceptRequestAPI(requestId);
      if (response.success) {
        toast.success(response.message);
        await fetchAllRequest();
        await dispatch(getConnectios());
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
      {requests?.length !== 0 ? (
        requests?.map((value, index) => (
          <UserCard
            email={value?.fromUser?.email}
            key={index}
            username={value?.fromUser?.username}
            text={"accept request"}
            apiFunction={() => {
              handleAcceptRequest(value?._id);
            }}
          />
        ))
      ) : (
        <div className="flex justify-center items-center w-full h-72">
          <h1 className="text-black font-semibold text-3xl text-center">
            `
            <span className="text-red-600 text-4xl">
              {user?.username.charAt(0).toUpperCase() + user?.username.slice(1)}
            </span>{" "}
            , You have no any request till now!`
          </h1>
        </div>
      )}
    </div>
  );
}

export default About;
