import React from "react";
import netflix from '../../assets/netflix.png'
import ecommerce from '../../assets/ecomerce.png'
import password from '../../assets/password.png'
import qr_code from '../../assets/qr_code.png'
import hotstar from '../../assets/hotstar.png'
import to_do from '../../assets/to-do.mp4'


const Project = () => {
    return (
        <div className=" bg-gray-900 text-white flex flex-col items-center gap-10 pt-5 pb-20">
            <h1 className=" text-3xl sm:text-[50px] uppercase underline font-bold my-10 selection:bg-gray-700 selection:text-white">my projects</h1>
            <div className=" flex flex-wrap justify-around items-center space-y-10">
                <div className=" flex flex-col items-center text-center mx-2 lg:w-1/4">
                    <h1 className=" uppercase mb-4 text-lg text-red-600 underline">netflix home page</h1>
                    <a href="https://github.com/Honeykalra22/netflix/tree/main/Netflix " target="_blank"><img className="w-[450px] h-[240px] hover:scale-105 mb-5" src={netflix} alt="netflix" /></a>
                    <p className=" text-lg mb-2 capitalize text-center">
                        crafted a dynamic netflix homepage replica using HTML for structure, CSS for styling, and javaScript for interactive elements, ensuring a user-friendly and visually engaging browsing experience.
                    </p>
                </div>
                <div className="h-[1px] bg-white my-5 w-full md:hidden"></div>

                <div className=" flex flex-col items-center mx-2 lg:w-1/4">
                    <h1 className=" uppercase mb-4 text-lg text-red-600 underline">e-commerce website</h1>
                    <a href="https://myclothes-hitesh-kalras-projects.vercel.app/" target="_blank"><img className="w-[450px] h-[240px] mb-5 hover:scale-105" src={ecommerce} alt="netflix" /></a>
                    <p className=" text-lg mb-2 capitalize text-center">
                        designed a modern e-commerce website UI leveraging react for seamless interactivity and tailwind css for efficient styling, ensuring a responsive and visually appealing user experience.
                    </p>
                </div>

                <div className="h-[1px] bg-white my-5 w-full md:hidden"></div>
                <div className=" flex flex-col items-center mx-2 lg:w-1/4">
                    <h1 className=" uppercase mb-4 text-lg text-red-600 underline">password generator app</h1>
                    <a href="https://github.com/Honeykalra22/password-generator" target="_blank"><img className="w-[450px] h-[240px] mb-5 hover:scale-105" src={password} alt="netflix" /></a>
                    <p className="text-lg mb-2 capitalize text-center">
                        developed a password generator application using react for dynamic user interface and tailwind css for streamlined styling, ensuring both functionality and aesthetic appeal meet modern standards. 
                    </p>
                </div>

                <div className="h-[1px] bg-white my-5 w-full md:hidden"></div>
                <div className=" flex flex-col items-center mx-2 lg:w-1/4">
                    <h1 className=" uppercase mb-4 text-lg text-red-600 underline">QR Code generator app</h1>
                    <a href="https://github.com/Honeykalra22/QR-code" target="_blank"><img className="w-[450px] h-[240px] mb-5 hover:scale-105" src={qr_code} alt="netflix" /></a>
                    <p className="text-lg mb-2 capitalize text-center">
                    Developed a dynamic and user-friendly QR Code Generator using React. This application enables users to effortlessly create custom QR codes for URLs, text, and other data inputs. Key features include real-time QR code generation, customization options for size and color, and the ability to download generated QR codes as image files. The project showcases proficiency in React, state management, and modern web development practices, offering a seamless user experience and responsive design.
                    </p>
                </div>
                <div className="h-[1px] bg-white my-5 w-full md:hidden"></div>

                <div className=" flex flex-col items-center mx-2 lg:w-1/4">
                    <h1 className=" uppercase mb-4 text-lg text-red-600 underline">hotstar app</h1>
                    <a href="https://hotstar-clone-ruddy.vercel.app/" target="_blank"><img className="w-[450px] h-[240px] mb-5 hover:scale-105" src={hotstar} alt="netflix" /></a>
                    <p className="text-lg mb-2 capitalize text-center">
                    Designed and developed the frontend of a Hotstar clone using ReactJS and Tailwind CSS. The project showcases a sleek, modern user interface with responsive design principles. Key features include dynamic content rendering, custom video player integration, and interactive carousel sliders. ReactJS was utilized for its efficient component-based architecture and state management, while Tailwind CSS provided a utility-first approach to styling, ensuring a clean and consistent user experience across all devices.
                    </p>
                </div>

                <div className="h-[1px] bg-white my-5 w-full md:hidden"></div>
                <div className=" flex flex-col items-center mx-2 lg:w-1/4">
                    <h1 className=" uppercase mb-4 text-lg text-red-600 underline">to-do list</h1>
                    <a href="https://to-do-list-fn1d-hitesh-kalras-projects.vercel.app/" target="_blank">
                        <video src={to_do} autoPlay muted loop type="video/mp4" className="h-[45vh] w-[20vw]" ></video>
                    </a>
                    <p className="text-lg mb-2 capitalize text-center">
                    Created an intuitive and interactive To-Do List application using ReactJS and Tailwind CSS. This project features a clean, modern user interface with responsive design. Key functionalities include task creation, editing, deletion, and real-time updates, all managed efficiently through ReactJS's component-based architecture and state management. Tailwind CSS was employed to achieve a utility-first, minimalist design that enhances user experience and accessibility across various devices.
                    </p>
                </div>
                <div className="h-[1px] bg-white my-5 w-full md:hidden"></div>
            </div>
        </div>
    )
}
export default Project