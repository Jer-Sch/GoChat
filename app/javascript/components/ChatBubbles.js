import React from "react";

function ChatBubbles() {
  return (
    <>
      <div className="self-start w-3/4 my-2">
        <div className="p-4 text-sm bg-white rounded-t-lg rounded-r-lg shadow">
          Anyone here?
    </div>
      </div>
      <div className="self-end w-3/4 my-2">
        <div className="p-4 text-sm bg-white rounded-t-lg rounded-l-lg shadow">
          Hey! Welcome!
    </div>
      </div>
    </>
  );
}

export default ChatBubbles;