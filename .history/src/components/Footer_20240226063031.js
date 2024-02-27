import React from 'react'

const AboutUsList = [
  {
    id: 1,
    title: "Our Story",
    link: "/#",
  },
  {
    id: 2,
    title: "Home",
    link: "/#",
  },
  {
    id: 3,
    title: "Press & media",
    link: "/#",
  },
  {
    id: 4,
    title: "Home",
    link: "/#",
  },
]

const Footer = () => {
  return (
    <div>
      <div className="py-8 px-4">
        <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
          About Us
        </h1>
        <ul className="flex flex-col gap-3">
          {AboutUsList.map((link) => (
            <li
              className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 "
              key={link.title}
            >
              <span>{link.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Footer