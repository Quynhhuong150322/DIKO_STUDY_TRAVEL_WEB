import React from 'react'
import Picture from '../../assets/images/LangdingPage/Picture.png'

const Langding = () => {
  return (
    <div>
      <div className=''>
        <img src={Picture} alt="" className='' />
        <div className=''>
          <h1 className='text-[40px] w-1/3'>
            Discover Your Trip Worldwide !
          </h1>
          <thead>
            <tr>
              <th>Song</th>
              <th>Artist</th>
              <th>Year</th>
            </tr>
          </thead>
        </div>
      </div>
    </div>
  )
}

export default Langding