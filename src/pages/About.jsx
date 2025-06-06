// import React, { useEffect } from "react";
// import UserCard from "../components/userCard";
// import { getRequestAPI } from "../features/sendRequest.js/reequestApi";
// import { useSelector } from "react-redux";

// function About() {
//   // let userId;
//   // console.log(userId, "userID");
//   const fetchAllRequest = async () => {
//     try {
//       const response = await getRequestAPI();
//       console.log("response", response);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     const data = async () => {
//       const res = await fetchAllRequest();
//       console.log(res, "res");
//     };
//     console.log(data, "data");
//   }, []);
//   const chat = true;
//   return (
//     <div>
//       <UserCard chat={chat} />
//     </div>
//   );
// }

// export default About;

import React, { useEffect, useState } from "react";
import UserCard from "../components/userCard";
import {
  acceptRequestAPI,
  getRequestAPI,
} from "../features/sendRequest.js/requestApi";

function About() {
  const [requests, setRequests] = useState([]);
  useEffect(() => {
    const fetchAllRequest = async () => {
      try {
        const response = await getRequestAPI();
        // console.log("response", response?.requests);
        setRequests(response?.requests);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchAllRequest();
  }, []);

  const request = true;
  const handleAcceptRequest = async (requestId) => {
    try {
      console.log(requestId, "./././//.");
      const response = await acceptRequestAPI(requestId);
      console.log("response from handle request", response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {requests?.map((value, index) => (
        <div key={index}>
          {console.log(value, "///////////////")}
          <UserCard
            email={value?.fromUser?.email}
            username={value?.fromUser?.username}
            request={request}
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
