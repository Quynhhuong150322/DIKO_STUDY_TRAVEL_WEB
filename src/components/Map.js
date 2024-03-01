import React from 'react'
import MapImg from '../assets/images/AboutUs/Map.jpg';
import {CardMapList} from '../dummyData';

const MapBg = {
    backgroundImage: `url(${MapImg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "498px",
    width: "100%",
  };

const Map = () => {
  return (
    <div className='max-container' style={MapBg}>
      <div className='bg-transparent '>
        <div className='bg-transparent flex flex-wrap gap-10'>
            {CardMapList.map((data)=> (
                <div className='flex gap-2 w-[273px] h-[140px] rounded-lg ' key={data.id}>
                    <img src={data.img} alt=""/>
                    <div className=''>
                        <h3 className=''>{data.location}</h3>
                        <p className=''>{data.title}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Map
