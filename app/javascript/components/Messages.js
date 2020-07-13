import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import NewMessageForm from "./NewMessage";

function Messages() {
  const [messages, setMessages] = useState([]);
  const [content, setContent] = useState("");
  let { id } = window.location.pathname;

  async function fetchMessages() {
    const res = await fetch(`channels/${id}`);
    res
      .json()
      .then(res => setMessages(res))
  }

  useEffect(() => {
    fetchMessages();
  }, [id])

  // const allMessages = messages.map((message, index) => (
  //   <div className={index % 2 === 0 ? 'self-start w-3/4 my-2' : 'self-end w-3/4 my-2'} key={index}>
  //     <div className="p-4 text-sm bg-white rounded-t-lg rounded-r-lg shadow">
  //       {message.content}
  //     </div>
  //   </div>
  // ));

  return (
    <>
      <div className="self-center flex-1 w-full max-w-xl">
        <div className="relative flex flex-col px-3 py-1 m-auto">
          {/* {allMessages} */}
        </div>
      </div>
      <NewMessageForm />
    </>
  );
}

export default Messages;
