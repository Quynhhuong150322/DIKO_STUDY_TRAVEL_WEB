import React from 'react'
import  LazyLoadImage  from 'react-lazy-load-image-component';

const ImageList = ({ListImage}) => {
  return (
    <div>
        <div className="grid grid-cols-3 gap-2 ">
            {ListImage.map((data) => (
              <LazyLoadImage 
                key={data.id}
                src={data.img}
                alt=""
                height="278px"
                width="auto"
                className=" object-contain"
                />
            ))}
        </div>
    </div>
  )
}

export default ImageList
