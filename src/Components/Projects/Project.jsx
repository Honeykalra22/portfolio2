import React from "react";
import netflix from '../../assets/netflix.png'
import ecommerce from '../../assets/ecomerce.png'

const Project = () => {
    return (
        <div className=" bg-gray-900 text-white flex flex-col items-center gap-10">
            <h1 className=" text-3xl sm:text-[50px] uppercase underline font-bold my-10">my projects</h1>

            <div className=" flex flex-col items-center text-center mx-2">
                <h1 className=" uppercase mb-4 text-lg text-red-600 underline">netflix home page</h1>
                <a href="https://github.com/Honeykalra22/netflix/tree/main/Netflix " target="_blank"><img className="w-[450px] h-[240px]" src={netflix} alt="netflix" /></a>
                <p className=" sm:w-2/3">This webpage is made with HTML/CSS</p>
                <p className=" sm:w-2/3">This is a UI clone of NETFLIX </p>
            </div>

            <div className=" flex flex-col items-center mx-2 ">
                <h1 className=" uppercase mb-4 text-lg text-red-600 underline">e-commerce website</h1>
                <a href="https://myclothes-hitesh-kalras-projects.vercel.app/" target="_blank"><img className="w-[450px] h-[240px] mb-5" src={ecommerce} alt="netflix" /></a>
                <p className=" sm:w-2/3 text-sm mb-2">This project is an E – Commerce type app, cart is being functional. And user can check total amount of cart
                    items.</p>
                <p className=" sm:w-2/3 text-sm mb-5">
                    This project made with the help of React Js and Tailwind CSS, hooks and context API is used in this
                    app.
                </p>
            </div>
        </div>
    )
}
export default Project