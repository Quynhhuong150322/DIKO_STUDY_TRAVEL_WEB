import React from 'react'
import { CopyrightList } from '../dummyData'



const CopyRight = () => {
    return (
        <div>
            <div className='bg-gray-300 py-5 px-[250px]'>
                <div className='text-black flex gap-2 text-sm items-center justify-between' >
                    {CopyrightList.map((data) => (
                        <div className='flex flex-row gap-2 items-center justify-center' key={data.id}>
                            <img src={data.icons} alt="" />
                            <p >{data.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CopyRight
