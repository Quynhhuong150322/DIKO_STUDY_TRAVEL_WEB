import React from "react";

const Item = ({ Name, title }) => {
    return (
        <ul>
            <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">{title}</h1>
            {Name.map((data) => (
                <li key={data.id} className='flex flex-col gap-3'>
                    <a
                        className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 "
                        href={data.link}
                    >
                        {data.name}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default Item;