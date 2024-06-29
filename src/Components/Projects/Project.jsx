import React from "react";
import netflix from '../../assets/netflix.png'
import ecommerce from '../../assets/ecomerce.png'
import password from '../../assets/password.png'

const Project = () => {
    return (
        <div className=" bg-gray-900 text-white flex flex-col items-center gap-10 pt-5 pb-20">
            <h1 className=" text-3xl sm:text-[50px] uppercase underline font-bold my-10">my projects</h1>
            <div className=" flex flex-wrap justify-around items-center">
                <div className=" flex flex-col items-center text-center mx-2 lg:w-1/4">
                    <h1 className=" uppercase mb-4 text-lg text-red-600 underline">netflix home page</h1>
                    <a href="https://github.com/Honeykalra22/netflix/tree/main/Netflix " target="_blank"><img className="w-[450px] h-[240px] hover:scale-105 mb-5" src={netflix} alt="netflix" /></a>
                    <p className=" text-lg mb-2 capitalize text-center">
                        crafted a dynamic netflix homepage replica using HTML for structure, CSS for styling, and javaScript for interactive elements, ensuring a user-friendly and visually engaging browsing experience.
                    </p>
                </div>

                <div className=" flex flex-col items-center mx-2 lg:w-1/4">
                    <h1 className=" uppercase mb-4 text-lg text-red-600 underline">e-commerce website</h1>
                    <a href="https://myclothes-hitesh-kalras-projects.vercel.app/" target="_blank"><img className="w-[450px] h-[240px] mb-5 hover:scale-105" src={ecommerce} alt="netflix" /></a>
                    <p className=" text-lg mb-2 capitalize text-center">
                        designed a modern e-commerce website UI leveraging react for seamless interactivity and tailwind css for efficient styling, ensuring a responsive and visually appealing user experience.
                    </p>
                </div>

                <div className=" flex flex-col items-center mx-2 lg:w-1/4">
                    <h1 className=" uppercase mb-4 text-lg text-red-600 underline">password generator app</h1>
                    <a href="https://github.com/Honeykalra22/password-generator" target="_blank"><img className="w-[450px] h-[240px] mb-5 hover:scale-105" src={password} alt="netflix" /></a>
                    <p className="text-lg mb-2 capitalize text-center">
                        developed a robust password generator application using react for dynamic user interface and tailwind css for streamlined styling, ensuring both functionality and aesthetic appeal meet modern standards. 
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Project