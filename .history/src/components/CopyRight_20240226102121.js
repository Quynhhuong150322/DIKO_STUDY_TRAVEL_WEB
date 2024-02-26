import React from 'react'
import iconEmail from '../assets/images/Footer/icons/copyright.png'
import iconEmail2 from '../assets/images/Footer/icons/email-down.png'
import iconEmail3 from '../assets/images/Footer/icons/local-two.png'
import iconEmail4 from '../assets/images/Footer//icons/phone-call.png'

const CopyrightList = [
    {
        id: 1,
        icons: iconEmail,
        title: 'Copyright EasySet24',
    },
    {
        id: 2,
        icons: iconEmail2,
        title: 'easyset24@gmail.com',
    },
    {
        id: 3,
        icons: '',
        title: '"EasySet24: Seamless Journeys, Unrivalled Travel Wisdom!"',
    },
    {
        id: 4,
        icons: iconEmail3,
        title: '123 Oxford Street,London',
    },
    {
        id: 5,
        icons: iconEmail4,
        title: '+44 20 7123 4567',
    },
]

const CopyRight = () => {
    return (
        <div>
            <div className='bg-gray-300 py-5 px-[100px]'>
                <div className='text-primary flex gap-2 text-sm items-center justify-between' >
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
