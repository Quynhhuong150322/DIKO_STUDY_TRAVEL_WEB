import React from 'react'
import Picture from '../../assets/images/LangdingPage/Picture.png'

const Langding = () => {
  return (
    <div>
      <div className=''>
        {/* <img src={Picture} alt="" className=''> */}
        <div className="bg-cover bg-center w-full h-full"
          style={{ backgroundImage: `url(${Picture})` }}>
        </div>
        {/* </img> */}
      </div>
    </div>
  )
}

export default Langding