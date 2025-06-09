import React from "react";

function Chat() {
  return (
    <div>
      <div className="chat chat-start">
        <div className="chat-bubble chat-bubble-primary">
          What kind of nonsense is this
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-bubble chat-bubble-secondary">
          Put me on the Council and not make me a Master!??
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-bubble chat-bubble-accent">
          That's never been done in the history of the Jedi.
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-bubble chat-bubble-neutral">It's insulting!</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble chat-bubble-info">Calm down, Anakin.</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble chat-bubble-success">
          You have been given a great honor.
        </div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble chat-bubble-warning">
          To be on the Council at your age.
        </div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble chat-bubble-error">
          It's never happened before.
        </div>
      </div>
    </div>
  );
}

export default Chat;
