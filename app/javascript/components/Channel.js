import React from "react";
import { useParams } from "react-router-dom";
import ChatBubbles from "./ChatBubbles";
import MessageForm from "./MessageForm";

function Channel() {
    let { id } = useParams();
  
    return (
      <>
      <h3>ID: {id}</h3>
      <div
      className="top-0 bottom-0 left-0 right-0 flex flex-col flex-1 overflow-hidden bg-transparent bg-bottom bg-cover">
      <div className="self-center flex-1 w-full max-w-xl">
        <div className="relative flex flex-col px-3 py-1 m-auto">
          <ChatBubbles />
        </div>
      </div>
      <MessageForm />
    </div>
    </>
    )
  }

  export default Channel;