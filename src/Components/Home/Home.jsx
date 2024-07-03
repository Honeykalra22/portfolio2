import React from "react";

const Home = () => {
    return (
        <div className=" bg-black text-white w-full flex flex-col items-center justify-center">
            <div className=" mt-16 mb-5">
                <h1 className="text-3xl sm:text-[50px] uppercase font-semibold selection:bg-gray-500 selection:text-black  underline-offset-8 tracking-[16px] md:tracking-[35px]">hitesh kalra</h1>
            </div>

            <div className=" mt-10"> 
                <ul className=" flex justify-evenly gap-4 sm:gap-8 text-sm sm:text-lg">
                    <li className=" text-blue-400 underline cursor-none">Programmer</li>
                    <li className=" text-blue-400 underline cursor-none">Web Developer</li>
                    <li className=" text-blue-400 underline cursor-none">Software Developer</li>
                </ul>
            </div>

            <div className=" my-10">
                <ul className=" flex gap-4 sm:gap-8">

                    <li>
                        <a href="https://www.linkedin.com/in/hitesh-kalra-511b24242/" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" className="fill-gray-600 h-8 w-8 cursor-pointer hover:fill-gray-500 hover:scale-105" height="100" viewBox="0 0 24 24">
                                <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"></path>
                            </svg>
                        </a>
                    </li>

                    <li>
                        <a href="https://leetcode.com/u/honey_kalra_2/" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="leetcode" className="h-8 w-8 fill-gray-600 cursor-pointer hover:fill-gray-500 hover:scale-105">
                                <path d="M20.1,16.007h-9.187c-1.047,0-1.899-0.897-1.899-2s0.853-2,1.899-2H20.1c1.048,0,1.9,0.897,1.9,2S21.147,16.007,20.1,16.007z M10.913,13.507c-0.217,0-0.399,0.229-0.399,0.5s0.183,0.5,0.399,0.5H20.1c0.217,0,0.4-0.229,0.4-0.5s-0.184-0.5-0.4-0.5H10.913z"></path><path d="M10.538,24c-1.621,0-3.011-0.55-4.021-1.589l-3.949-4.09C1.557,17.278,1,15.803,1,14.167c0-1.61,0.557-3.072,1.568-4.117l9.174-9.47C12.104,0.206,12.592,0,13.113,0c0,0,0,0,0.001,0c0.54,0,1.049,0.218,1.434,0.614c0.766,0.792,0.78,2.061,0.032,2.828l-1.443,1.511C13.549,5.18,13.985,5.5,14.511,5.95l2.361,1.963c0.804,0.824,0.788,2.093,0.024,2.882c-0.386,0.397-0.895,0.615-1.435,0.615c-0.001,0-0.001,0-0.002,0c-0.521,0-1.007-0.207-1.367-0.581l-2.377-1.876c-0.668-0.497-0.783-0.534-1.19-0.534c-0.422,0-0.803,0.159-1.164,0.486l-3.886,4.069c-0.282,0.291-0.43,0.702-0.43,1.191c0,0.498,0.155,0.945,0.427,1.226l3.937,4.091c0.251,0.26,0.627,0.392,1.116,0.392c0.49,0,0.866-0.132,1.116-0.392l2.461-2.454c0.351-0.363,0.836-0.569,1.357-0.57c0,0,0.001,0,0.002,0c0.539,0,1.049,0.219,1.434,0.616c0.765,0.79,0.78,2.058,0.034,2.825l-2.365,2.469C13.542,23.422,12.113,24,10.538,24z M13.113,1.5c-0.079,0-0.194,0.021-0.294,0.124l-9.173,9.469C2.907,11.856,2.5,12.948,2.5,14.167c0,1.244,0.407,2.349,1.146,3.11c0.001,0.001,0.001,0.001,0.001,0.002l3.948,4.089c0.72,0.74,1.737,1.132,2.943,1.132c1.183,0,2.202-0.405,2.946-1.173l2.365-2.469c0.188-0.193,0.172-0.531-0.032-0.741c-0.1-0.103-0.226-0.159-0.356-0.159l0,0c-0.078,0-0.192,0.021-0.29,0.122l-2.46,2.454c-0.526,0.546-1.285,0.84-2.186,0.84c-0.898,0-1.658-0.294-2.195-0.85l-3.937-4.091c-0.546-0.565-0.848-1.371-0.848-2.268c0-0.874,0.302-1.667,0.849-2.231l3.921-4.104c0.67-0.609,1.421-0.912,2.21-0.912c0.878,0,1.315,0.258,2.104,0.845l2.468,1.957c0.172,0.168,0.285,0.189,0.364,0.189l0,0c0.131,0,0.258-0.057,0.357-0.159c0.202-0.21,0.219-0.549,0.034-0.739l-2.311-1.915c-1.026-0.881-1.474-1.02-1.844-1.086c-0.271-0.05-0.51-0.247-0.595-0.51c-0.086-0.263-0.036-0.554,0.155-0.753l2.241-2.347c0.189-0.195,0.173-0.533-0.03-0.743C13.372,1.557,13.245,1.5,13.113,1.5z"></path>
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


            <div className="mb-16 hover:scale-100">
                <a href="https://drive.google.com/file/d/1D-l7mSVuDY6t96od5C3WWPQj0mU4avRN/view?usp=sharing" target="_blank" className="bg-red-600 px-20 py-3 font-semibold rounded-full text-xl hover:bg-red-800">My Resume </a>
            </div>

        </div>
    )
}
export default Home