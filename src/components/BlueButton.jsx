import React from 'react'

export default function BlueButton({children, styles}) {
  return (
    <button className={`bg-mainBlue flex items-center justify-center hover:bg-[#0949C2] duration-[.1s] ${styles}`}>
      { children }
    </button>
  )
}
