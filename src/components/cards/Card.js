import React, { useMemo } from 'react'
// import './Card.css'

const Card = ({ children, cardType, className }) => {
  const renderCardType = useMemo(() => {
    if (cardType === 'login') return 'md:bg-azap-light h-auto 2-96 mx-auto'
    return 'bg-azap-light'
  }, [cardType])

  return (
    <div className={`md:rounded-2xl md:shadow-xl ${renderCardType} ${className}`}>
      <div className={`${cardType === 'login' ? 'md:px-16 md:py-12 h-full' : 'h-full p-8 pt-0 md:pt-8'}`}>
        {children}
      </div>
    </div>
  )
}

export default Card
