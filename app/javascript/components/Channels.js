import React, { useState, useEffect } from "react";

function Channels() {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    const url = "/channels"
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong with the network response.");
        }
      })
      .then(response => setChannels(response))
  }, [channels])

  const allChannels = channels.map((channel, index) => (
    <li className="flex flex-no-wrap items-center pr-3 text-black rounded-lg cursor-pointer mt-200 py-65 hover:bg-gray-200"
      style={{ paddingTop: "0.65rem", paddingBottom: "0.65rem" }} key={index}>
      <div className="flex justify-between w-full focus:outline-none">
        <div className="flex justify-between w-full">
          <div className="items-center flex-1 min-w-0">
            <div className="flex justify-center mb-1">
              <h2 className="text-md font-semibold text-black">{"# " + channel.name}</h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  ));

  return (
    <div
      className="relative mt-2 mb-4 overflow-x-hidden overflow-y-auto scrolling-touch lg:max-h-sm scrollbar-w-2 scrollbar-track-gray-lighter scrollbar-thumb-rounded scrollbar-thumb-gray">
      <ul className="flex flex-col inline-block w-full h-screen px-2 select-none">
        {allChannels}
      </ul>
    </div>

  );
}

export default Channels