import React from "react";
import c_plus from '../../assets/c_plus.png'
import js from '../../assets/js.svg'
import css from '../../assets/css.svg'
import html from '../../assets/html.svg'
import react2 from '../../assets/react.svg'
import tcss from '../../assets/tcss.svg'
import git from '../../assets/git.svg'
import github from '../../assets/github.svg'
import vs from '../../assets/vs.svg'


const Skills = () => {
    return (
        <div className=" bg-slate-500 h-full">
            <div className="bg-slate-500">
                <h1 className=" uppercase font-bold text-3xl sm:text-[50px] flex justify-center underline selection:bg-gray-700 selection:text-white">language</h1>
                <div className="flex flex-wrap justify-evenly my-10">
                    <img className="w-20 h-20 sm:w-32 sm:h-32" src={c_plus} alt="" />
                    <img className="w-20 h-20 sm:w-32 sm:h-32" src={js} alt="" />
                </div>
                <p className=" text-white flex justify-center text-xl mb-5">My favorite languages for system programming and front-end development</p>
            </div>
            <hr />
            <div className="bg-slate-500">
                <h1 className=" uppercase font-bold text-3xl sm:text-[50px] flex justify-center underline selection:bg-gray-700 selection:text-white">front-end</h1>
                <div className="flex flex-wrap justify-evenly my-10">
                    <img className="w-20 h-20 sm:w-32 sm:h-32" src={html} alt="" />
                    <img className="w-20 h-20 sm:w-32 sm:h-32" src={css} alt="" />
                    <img className="w-20 h-20 sm:w-32 sm:h-32" src={tcss} alt="" />
                    <img className="w-20 h-20 sm:w-32 sm:h-32" src={react2} alt="" />
                </div>
                <p className=" text-white flex justify-center text-xl mb-5">My favorite languages for system programming and front-end development</p>
            </div>
            <hr />
            <div className="bg-slate-500">
                <h1 className=" uppercase font-bold text-3xl sm:text-[50px] flex justify-center underline selection:bg-gray-700 selection:text-white">tools</h1>
                <div className="flex flex-wrap justify-evenly my-10 gap-4">
                    <img className="w-20 h-20 sm:w-32 sm:h-32" src={git} alt="" />
                    <img className="w-20 h-20 sm:w-32 sm:h-32" src={github} alt="" />
                    <img className="w-20 h-20 sm:w-32 sm:h-32" src={vs} alt="" />
                </div>
                <p className=" text-white flex justify-center text-xl pb-3">My favorite languages for system programming and front-end development</p>
            </div>
        </div>
    )
}
export default Skills