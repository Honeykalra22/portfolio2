import React from "react";
import netflix from '../../assets/netflix.png'
import ecommerce from '../../assets/ecomerce.png'
import password from '../../assets/password.png'

const Project = () => {
    return (
        <div className=" bg-gray-900 text-white flex flex-col items-center gap-10">
            <h1 className=" text-3xl sm:text-[50px] uppercase underline font-bold my-10">my projects</h1>
            <div className=" flex flex-wrap justify-around items-center">
                <div className=" flex flex-col items-center text-center mx-2">
                    <h1 className=" uppercase mb-4 text-lg text-red-600 underline">netflix home page</h1>
                    <a href="https://github.com/Honeykalra22/netflix/tree/main/Netflix " target="_blank"><img className="w-[450px] h-[240px] hover:scale-105" src={netflix} alt="netflix" /></a>
                    <p className=" sm:w-2/3 capitalize">This webpage is made with HTML/CSS</p>
                    <p className=" sm:w-2/3 capitalize">This is a UI clone of NETFLIX </p>
                </div>

                <div className=" flex flex-col items-center mx-2 ">
                    <h1 className=" uppercase mb-4 text-lg text-red-600 underline">e-commerce website</h1>
                    <a href="https://myclothes-hitesh-kalras-projects.vercel.app/" target="_blank"><img className="w-[450px] h-[240px] mb-5 hover:scale-105" src={ecommerce} alt="netflix" /></a>
                    <p className=" sm:w-2/3 text-sm mb-2 capitalize">This project is an E – Commerce type app, cart is being functional. And user can check total amount of cart
                        items.</p>
                    <p className=" sm:w-2/3 text-sm mb-5 capitalize">
                        This project made with the help of React Js and Tailwind CSS, hooks and context API is used in this
                        app.
                    </p>
                </div>

                <div className=" flex flex-col items-center mx-2 ">
                    <h1 className=" uppercase mb-4 text-lg text-red-600 underline">password generator app</h1>
                    <a href="https://github.com/Honeykalra22/password-generator" target="_blank"><img className="w-[450px] h-[240px] mb-5 hover:scale-105" src={password} alt="netflix" /></a>
                    <p className=" sm:w-2/3 text-sm mb-2 capitalize">
                        password generator app is an app that gives user a strong password of given length by user.
                    </p>
                    <p className=" sm:w-2/3 text-sm mb-5 capitalize">
                        This project made with the help of React Js and Tailwind CSS and hooks
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Project