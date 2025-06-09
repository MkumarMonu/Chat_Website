import React, { useEffect } from "react";
import UserCard from "../components/userCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUser } from "../features/auth/authSlice";
import { sendRequestAPI } from "../features/sendRequest.js/requestApi";
import { toast } from "react-toastify";

function ContactUs() {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.auth.allUser);
  useEffect(() => {
    if (!allUsers) {
      dispatch(fetchAllUser());
    }
  }, [allUsers, dispatch]);
  const status = "interested";

  const handleSendrequest = async (status, userId) => {
    try {
      const response = await sendRequestAPI(status, userId);
      dispatch(fetchAllUser());
      if (response.success) {
        toast.success(response.message || "Request sent successfully!");
      } else {
        toast.error(response.message || "Failed to send request");
      }
    } catch (error) {
      console.log(error);
      toast.error(response.message || "Failed to send request!");
    }
  };

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {allUsers?.map((user, index) => (
        <UserCard
          key={user._id || index}
          username={user.username}
          email={user.email}
          text={"send request"}
          apiFunction={() => handleSendrequest(status, user._id)}
          // toUserId={user._id}
        />
      ))}
    </div>
  );
}

export default ContactUs;
