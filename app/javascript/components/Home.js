import React from "react";
import Channels from "./Channels";
import Navbar from "./Navbar";
import ChatBubbles from "./ChatBubbles";
import MessageForm from "./MessageForm";
import NewChannelButton from "./NewChannelButton";

export default () => (
  <div className="relative flex w-full h-screen overflow-hidden antialiased bg-gray-200">
    <div className="relative flex flex-col hidden h-full bg-white border-r border-gray-300 shadow-xl md:block transform transition-all duration-500 ease-in-out"
      style={{ width: "24rem" }}>
      <div className="flex justify-between px-3 pt-1 text-white">
        <div className="flex items-center w-full py-2">
        </div>
      </div>
      <div className="border-b shadow-bot">
        <div className="flex flex-row items-center inline-block px-2 list-none select-none">
          <div className="flex-auto px-1 mx-1 -mb-px text-center rounded-t-lg last:mr-0">
            <div
              class="flex items-center justify-center block py-5 text-xl font-semibold leading-normal tracking-wide border-b-2 border-transparent">
              Channels
                    </div>
          </div>
        </div>
      </div>
      <Channels />
      <NewChannelButton />
    </div>
    <div className="relative flex flex-col flex-1">
      <Navbar />
      <div
        className="top-0 bottom-0 left-0 right-0 flex flex-col flex-1 overflow-hidden bg-transparent bg-bottom bg-cover">
        <div className="self-center flex-1 w-full max-w-xl">
          <div className="relative flex flex-col px-3 py-1 m-auto">
            <ChatBubbles />
          </div>
        </div>
        <MessageForm />
      </div>
    </div>
  </div>
);