import React from "react";

const Item = ({ Links, title }) => {
    return (
        <ul>
            <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">{title}</h1>
            {Links.map((link) => (
                <li key={link.name} className='flex flex-col gap-3'>
                    <a
                        className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 "
                        href={link.link}
                    >
                        {link.name}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default Item;