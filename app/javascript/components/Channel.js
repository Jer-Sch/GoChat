import React from "react";
import { useParams } from "react-router-dom";
import Messages from "./Messages";

function Channel() {
    // let { id } = useParams();
  
    return (
      <>
      {/* <h3>ID: {id}</h3> */}
      <div
      className="top-0 bottom-0 left-0 right-0 flex flex-col flex-1 overflow-hidden bg-transparent bg-bottom bg-cover">
        <Messages />
      </div>
    </>
    )
  }

  export default Channel;