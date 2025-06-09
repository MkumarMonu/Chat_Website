function UserCard({ username, email, apiFunction, text }) {
  return (
    <div className="card card-dash bg-base-300 w-96 mt-18">
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
            {/* {request ? "accept request" : "Send Request" || "chat"} */}
            {text || "Chat"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
