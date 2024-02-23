import React from 'react'
import Picture from '../../assets/images/LangdingPage/Picture.png'

const Langding = () => {
  return (
    <div>
      <div className=''>
        {/* <img src={Picture} alt="" className=''> */}
        <div
          className="bg-cover bg-center"
          style={{
            backgroundImage: `url(${Picture})`,
            // width: '100%', // Thay đổi kích thước theo yêu cầu
            // height: '500px' // Thay đổi kích thước theo yêu cầu
          }}
        >
          HHHHHH
        </div>
        {/* </img> */}
      </div>
    </div>
  )
}

export default Langding