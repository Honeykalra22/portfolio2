import React from "react";

const Home = () => {
    return (
        <div className=" bg-black text-white w-full flex flex-col items-center justify-center">
            <div className=" mt-16 mb-5">
                <h1 className="text-3xl sm:text-[60px] uppercase font-semibold selection:bg-gray-500 selection:text-black underline underline-offset-8">hitesh kalra</h1>
            </div>

            <div className=" mt-10">
                <ul className=" flex justify-evenly gap-4 sm:gap-8 text-sm sm:text-lg">
                    <li className=" text-blue-400">Programmer</li>
                    <li className=" text-blue-400">Web Developer</li>
                    <li className=" text-blue-400">Software Developer</li>
                </ul>
            </div>

            <div className=" my-10">
                <ul className=" flex gap-4 sm:gap-8">
                    <li>
                        <a href="https://www.instagram.com/hitesh_kalra8/" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="h-8 w-8 fill-gray-600 cursor-pointer hover:fill-gray-500 hover:scale-105" width="100" height="100" viewBox="0 0 24 24">
                                <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
                            </svg>
                        </a>
                    </li>


                    <li>
                        <a href="https://www.linkedin.com/in/hitesh-kalra-511b24242/" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" className="fill-gray-600 h-8 w-8 cursor-pointer hover:fill-gray-500 hover:scale-105" height="100" viewBox="0 0 24 24">
                                <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"></path>
                            </svg>
                        </a>
                    </li>

                    <li>
                        <a href="https://www.facebook.com/hitesh.kalra.374/" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" className="fill-gray-600 h-8 w-8 cursor-pointer hover:fill-gray-500 hover:scale-105" viewBox="0 0 24 24">
                                <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"></path>
                            </svg>
                        </a>
                    </li>
                    
                    <li>
                        <a href="https://github.com/Honeykalra22" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" className="fill-gray-600 h-8 w-8 cursor-pointer hover:fill-gray-500 hover:scale-105" height="100" viewBox="0 0 48 48">
                                <path d="M44,24c0,8.96-5.88,16.54-14,19.08V38c0-1.71-0.72-3.24-1.86-4.34c5.24-0.95,7.86-4,7.86-9.66c0-2.45-0.5-4.39-1.48-5.9 c0.44-1.71,0.7-4.14-0.52-6.1c-2.36,0-4.01,1.39-4.98,2.53C27.57,14.18,25.9,14,24,14c-1.8,0-3.46,0.2-4.94,0.61 C18.1,13.46,16.42,12,14,12c-1.42,2.28-0.84,4.74-0.3,6.12C12.62,19.63,12,21.57,12,24c0,5.66,2.62,8.71,7.86,9.66 c-0.67,0.65-1.19,1.44-1.51,2.34H16c-1.44,0-2-0.64-2.77-1.68c-0.77-1.04-1.6-1.74-2.59-2.03c-0.53-0.06-0.89,0.37-0.42,0.75 c1.57,1.13,1.68,2.98,2.31,4.19C13.1,38.32,14.28,39,15.61,39H18v4.08C9.88,40.54,4,32.96,4,24C4,12.95,12.95,4,24,4 S44,12.95,44,24z"></path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:hiteshkalra229489@gmail.com?subject=subject&message=message">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" className="fill-gray-600 h-8 w-8 cursor-pointer hover:fill-gray-500 hover:scale-105" height="100" viewBox="0 0 50 50">
                                <path d="M 5.5 7 C 3.03125 7 1.011719 9.015625 1 11.484375 C 1 11.484375 1 11.488281 1 11.492188 C 1 11.496094 1 11.496094 1 11.5 L 1 38.5 C 1 40.972656 3.027344 43 5.5 43 L 44.5 43 C 46.972656 43 49 40.972656 49 38.5 L 49 11.5 C 49 11.496094 49 11.496094 49 11.492188 C 49 11.488281 49 11.484375 49 11.484375 C 48.988281 9.015625 46.96875 7 44.5 7 Z M 8.101563 9 L 41.902344 9 L 25 20.78125 Z M 4.773438 9.117188 L 25 23.21875 L 45.230469 9.117188 C 46.253906 9.425781 46.992188 10.355469 47 11.488281 C 46.996094 11.699219 46.78125 12.121094 46.46875 12.460938 C 46.152344 12.804688 45.84375 13.019531 45.84375 13.019531 L 45.839844 13.027344 L 25 27.777344 L 4.160156 13.027344 L 4.15625 13.019531 C 4.15625 13.019531 3.847656 12.804688 3.53125 12.460938 C 3.21875 12.121094 3.003906 11.699219 3 11.488281 C 3.007813 10.355469 3.746094 9.425781 4.773438 9.117188 Z M 3 14.652344 C 3 14.652344 3.007813 14.660156 3.007813 14.660156 L 3.015625 14.664063 L 3.015625 14.667969 L 6 16.777344 L 6 41 L 5.5 41 C 4.109375 41 3 39.890625 3 38.5 Z M 47 14.652344 L 47 38.5 C 47 39.890625 45.890625 41 44.5 41 L 44 41 L 44 16.777344 L 46.984375 14.667969 L 46.984375 14.664063 C 46.984375 14.664063 47 14.652344 47 14.652344 Z M 8 18.191406 L 25 30.222656 L 42 18.191406 L 42 41 L 8 41 Z"></path>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>

            <a href="https://leetcode.com/u/honey_kalra_2/" className=" uppercase mb-10 underline text-gray-500 hover:scale-105 hover:text-gray-400 font-semibold">leet code</a>

            <div className="mb-16 hover:scale-105">
                <a href="https://drive.google.com/file/d/1D-l7mSVuDY6t96od5C3WWPQj0mU4avRN/view?usp=sharing" target="_blank" className="bg-red-600 px-4 py-2 font-semibold rounded-sm text-lg hover:bg-red-800 ">My Resume </a>
            </div>

        </div>
    )
}
export default Home