import React from "react";

export default () => (
<div className="relative flex w-full h-screen overflow-hidden antialiased bg-gray-200">
    <div className="relative flex flex-col hidden h-full bg-white border-r border-gray-300 shadow-xl md:block transform transition-all duration-500 ease-in-out"
        style={{width: "24rem"}}>
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
        <div className="fixed absolute bottom-0 right-0 z-40 mb-6 mr-4">
            <button
                className="flex items-center justify-center w-12 h-12 mr-3 text-xl font-semibold text-white bg-blue-500 rounded-full focus:outline-none flex-no-shrink">
                <svg className="w-6 h-6 text-white fill-current" xmlns="http://www.w3.org/2000/svg" width="24"
                    height="24" viewBox="0 0 32 32">
                    <path fillRule="nonzero"
                        d="M31 12h-11v-11c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v11h-11c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h11v11c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-11h11c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1 Z" />
                </svg>
            </button>
        </div>
    </div>
    <div className="relative flex flex-col flex-1">
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-4">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <div className="font-semibold text-xl tracking-tight p-4"><span href="#"
                        class="bg-black text-white font-bold text-xl p-4">GoChat</span></div>
            </div>
            <div className="block lg:hidden">
                <button
                    className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <a href="https://github.com/Jer-Sch/GoChat"
                        className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        GitHub Repo
                    </a>
                </div>
                <a className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
                    rel="nofollow" data-method="delete" href="/users/sign_out">
                    Log out
                </a>
            </div>
        </nav>
        <div
            className="top-0 bottom-0 left-0 right-0 flex flex-col flex-1 overflow-hidden bg-transparent bg-bottom bg-cover">
            <div className="self-center flex-1 w-full max-w-xl">
                <div className="relative flex flex-col px-3 py-1 m-auto">
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
                </div>
            </div>
            <div
                className="relative flex items-center self-center w-full max-w-xl p-4 overflow-hidden text-gray-600 focus-within:text-gray-400">
                <div className="w-full">
                    <span className="absolute inset-y-0 right-0 flex items-center pr-6">
                        <button type="submit" className="p-1 focus:outline-none focus:shadow-none hover:text-blue-500">
                            <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 24 24">
                                <path fillRule="nonzero"
                                    d="M6.43800037,12.0002892 L6.13580063,11.9537056 C5.24777712,11.8168182 4.5354688,11.1477159 4.34335422,10.2699825 L2.98281085,4.05392998 C2.89811796,3.66698496 2.94471512,3.2628533 3.11524595,2.90533607 C3.53909521,2.01673772 4.60304421,1.63998415 5.49164255,2.06383341 L22.9496381,10.3910586 C23.3182476,10.5668802 23.6153089,10.8639388 23.7911339,11.2325467 C24.2149912,12.1211412 23.8382472,13.1850936 22.9496527,13.6089509 L5.49168111,21.9363579 C5.13415437,22.1068972 4.73000953,22.1534955 4.34305349,22.0687957 C3.38131558,21.8582835 2.77232686,20.907987 2.9828391,19.946249 L4.34336621,13.7305987 C4.53547362,12.8529444 5.24768451,12.1838819 6.1356181,12.0469283 L6.43800037,12.0002892 Z M5.03153725,4.06023585 L6.29710294,9.84235424 C6.31247211,9.91257291 6.36945677,9.96610109 6.44049865,9.97705209 L11.8982869,10.8183616 C12.5509191,10.9189638 12.9984278,11.5295809 12.8978255,12.182213 C12.818361,12.6977198 12.4138909,13.1022256 11.8983911,13.1817356 L6.44049037,14.0235549 C6.36945568,14.0345112 6.31247881,14.0880362 6.29711022,14.1582485 L5.03153725,19.9399547 L21.6772443,12.0000105 L5.03153725,4.06023585 Z" />
                            </svg>
                        </button>
                    </span>
                    <input type="search"
                        className="w-full py-2 pl-10 text-sm bg-white border border-transparent appearance-none rounded-tg placeholder-gray-800 focus:bg-white focus:outline-none focus:border-blue-500 focus:text-gray-900 focus:shadow-outline-blue"
                        style={{borderRadius: '25px'}} placeholder="Message..." autoComplete="off" />
                </div>
            </div>
        </div>
    </div>
</div>
);