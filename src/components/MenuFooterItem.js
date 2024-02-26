import React from "react";

const Item = ({ Name, title }) => {
    return (
        <div className='py-8 px-4'>
            <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">{title}</h1>
            {Name.map((data) => (
                <ul key={data.id} className='flex flex-col gap-3 py-2'>
                    <li
                        className="font-light cursor-pointer hover:text-primary hover:font-medium hover:translate-x-1 duration-300 "
                        href={data.link}
                    >
                        {data.name}
                    </li>
                </ul>
            ))}
        </div>
    );
};

export default Item;