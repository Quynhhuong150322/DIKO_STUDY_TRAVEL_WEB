import React from 'react'
import Picture from '../../assets/images/LangdingPage/Picture.png'
import { LuHotel } from "react-icons/lu";

const Langding = () => {
  return (
    <div>
      <div className=''>
        <img src={Picture} alt="" className='' />
        <div className=''>
          <h1 className='text-[40px] w-1/3'>
            Discover Your Trip Worldwide !
          </h1>
          <tbody>
            <tr>
              <th>
                <LuHotel />
                <p>Where Are you Going to?</p>
              </th>
              <th>Artist</th>
              <th>Year</th>
              <th>Search</th>
            </tr>
          </tbody>
        </div>
      </div>
    </div>
  )
}

export default Langding