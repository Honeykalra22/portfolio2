import React from 'react';

const ProjectItem = (e) => {
    return (
        <a
            href={e.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block max-w-sm mx-auto cursor-pointer overflow-hidden bg-gray-700 text-white rounded-lg shadow-md transition-transform transform hover:scale-105"
        >
            <div className="p-4">
                {/* Project Name */}
                <h1 className="text-xl font-bold mb-3 text-center">{e.name}</h1>
            </div>
            {/* Project Image */}
            <img
                src={e.image}
                alt="Project Thumbnail"
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                {/* Project Description */}
                <p className="text-md">{e.des}</p>
            </div>
        </a>
    );
};

export default ProjectItem;
