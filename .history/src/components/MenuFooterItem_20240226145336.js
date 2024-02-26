import React from "react";

const Item = ({ Title, title }) => {
    return (
        <ul>
            <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">{title}</h1>
            {Title.map((data) => (
                <li key={data.title} className='flex flex-col gap-3'>
                    <a
                        className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 "
                        href={data.link}
                    >
                        {data.title}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default Item;