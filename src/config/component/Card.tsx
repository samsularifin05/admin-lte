import React from 'react'

interface props {
  title: string
  footer?: string
}
const Card: React.FC<props> = (props) => {
  return (
    <div className='card'>
      <div className='card-header'>
        <h3 className='card-title'>{props.title}</h3>
      </div>
      <div className='card-body'>{props.children}</div>
      {props.footer && <div className='card-footer'>{props.footer}</div>}
    </div>
  )
}

export default Card;

