import React from 'react'

interface Props{
  children: JSX.Element | string
}

export const Backdrop = (props: Props) => {
  return (
    <div className='fixed top-0  left-0 bg-gray-600 w-full bg-opacity-60 h-screen'>{props.children}</div>
  )
}
