import React, { useState } from "react";
import netflix from '../../assets/netflix.png';
import ecommerce from '../../assets/ecomerce.png';
import password from '../../assets/password.png';
import qr_code from '../../assets/qr_code.png';
import hotstar from '../../assets/hotstar.png';
import to_doimg from '../../assets/to_doimg.png';
import tidewave from '../../assets/tidewave.png';
import ProjectItem from "../../Pages/ProjectItem";

const Project = () => {
    const store = [
        {
            name: 'Tide-Wave',
            image: tidewave,
            des: 'A modern backend architecture for a scalable web platform, featuring secure JWT-based authentication and API design.',
            link: 'https://github.com/Honeykalra22/Tide_wave/tree/main'
        },
        {
            name: 'Wear_Well',
            image: ecommerce,
            des: 'An elegant e-commerce front-end with product browsing, cart management, and user-friendly navigation built with React.js and Tailwind CSS.',
            link: 'https://myclothes-hitesh-kalras-projects.vercel.app/'
        },
        {
            name: 'Password Generator',
            image: password,
            des: 'A React-based app to generate secure, customizable passwords with options for length, special characters, and easy copying.',
            link: 'https://github.com/Honeykalra22/password-generator',
        },
        {
            name: 'Hotstar-clone',
            image: hotstar,
            des: 'A fully responsive Hotstar-inspired video streaming UI with optimized layout and design fidelity.',
            link: 'https://hotstar-clone-ruddy.vercel.app/'
        },
        {
            name: 'To-Do list',
            image: to_doimg,
            des: 'A dynamic To-Do list app enabling users to manage tasks efficiently with a seamless video demonstration of features.',
            link: 'https://to-do-list-fn1d-hitesh-kalras-projects.vercel.app/'
        },
        {
            name: 'QR Code Generator',
            image: qr_code,
            des: 'A simple and intuitive QR Code Generator allowing users to create scannable codes from custom input.',
            link: 'https://github.com/Honeykalra22/QR-code'
        },
        {
            name: 'Netflix Home Page',
            image: netflix,
            des: 'A pixel-perfect replica of Netflix’s homepage created using HTML, CSS, and JavaScript to showcase frontend design skills.',
            link: 'https://github.com/Honeykalra22/netflix/tree/main/Netflix'
        },
    ];

    return (
        <div className="bg-gray-900 text-white min-h-screen py-10">
            <h1 className="text-4xl font-bold text-center mb-10">
                My Projects
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
                {store.map((e, index) => (
                    <ProjectItem 
                        key={index} 
                        name={e.name} 
                        des={e.des} 
                        image={e.image} 
                        link = {e.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default Project;