import React from 'react';
import { CopyrightList } from '../dummyData';
const CopyRight = () => {
    return (
        <div className="bg-gray-300 h-16 ">
            <div className="max-container text-black flex gap-2 items-center justify-between text-sm bg-transparent ">
                {CopyrightList.map((data) => (
                    <div className="flex gap-2 items-center justify-center bg-transparent mt-6" key={data.id}>
                        <img src={data.icons} alt="" className="bg-transparent" />
                        <p className="bg-transparent">{data.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CopyRight;
