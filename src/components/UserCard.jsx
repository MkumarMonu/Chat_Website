import { Link } from "react-router-dom";

function UserCard({ username, email, apiFunction, text }) {
  return (
    <div className="card card-dash bg-base-300 w-xl m-5">
      <div className="card-body">
        <h2 className="card-title">
          {text == "accept request" && <p>You got the request from</p>}
          {username.toUpperCase() || "No Username"}
        </h2>
        <h3>{email || "No email provided"}</h3>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary"
            onClick={() => {
              apiFunction();
            }}
          >
            {text}
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
