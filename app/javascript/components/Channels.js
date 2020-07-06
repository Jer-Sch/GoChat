import React from "react";

function Channels() {
    return (
        <div
            className="relative mt-2 mb-4 overflow-x-hidden overflow-y-auto scrolling-touch lg:max-h-sm scrollbar-w-2 scrollbar-track-gray-lighter scrollbar-thumb-rounded scrollbar-thumb-gray">
            <ul className="flex flex-col inline-block w-full h-screen px-2 select-none">
                <li className="flex flex-no-wrap items-center pr-3 text-black rounded-lg cursor-pointer mt-200 py-65 hover:bg-gray-200"
                    style={{paddingTop: "0.65rem", paddingBottom: "0.65rem"}}>
                    <div className="flex justify-between w-full focus:outline-none">
                        <div className="flex justify-between w-full">
                            <div className="items-center flex-1 min-w-0">
                                <div className="flex justify-center mb-1">
                                    <h2 className="text-md font-semibold text-black"># Programming</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="flex flex-no-wrap items-center pr-3 text-black rounded-lg cursor-pointer mt-200 py-65 hover:bg-gray-200"
                    style={{paddingTop: "0.65rem", paddingBottom: "0.65rem"}}>
                    <div className="flex justify-between w-full focus:outline-none">
                        <div className="flex justify-between w-full">
                            <div className="items-center flex-1 min-w-0">
                                <div className="flex justify-center mb-1">
                                    <h2 className="text-md font-semibold text-black"># Ruby</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="flex flex-no-wrap items-center pr-3 text-black rounded-lg cursor-pointer mt-200 py-65 hover:bg-gray-200"
                    style={{paddingTop: "0.65rem", paddingBottom: "0.65rem"}}>
                    <div className="flex justify-between w-full focus:outline-none">
                        <div className="flex justify-between w-full">
                            <div className="items-center flex-1 min-w-0">
                                <div className="flex justify-center mb-1">
                                    <h2 className="text-md font-semibold text-black"># Pythonistas</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="flex flex-no-wrap items-center pr-3 text-black rounded-lg cursor-pointer mt-200 py-65 hover:bg-gray-200"
                    style={{paddingTop: "0.65rem", paddingBottom: "0.65rem"}}>
                    <div className="flex justify-between w-full focus:outline-none">
                        <div className="flex justify-between w-full">
                            <div className="items-center flex-1 min-w-0">
                                <div className="flex justify-center mb-1">
                                    <h2 className="text-md font-semibold text-black"># Rails</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="flex flex-no-wrap items-center pr-3 text-black rounded-lg cursor-pointer mt-200 py-65 hover:bg-gray-200"
                    style={{paddingTop: "0.65rem", paddingBottom: "0.65rem"}}>
                    <div className="flex justify-between w-full focus:outline-none">
                        <div className="flex justify-between w-full">
                            <div className="items-center flex-1 min-w-0">
                                <div className="flex justify-center mb-1">
                                    <h2 className="text-md font-semibold text-black"># Squirrels</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Channels;