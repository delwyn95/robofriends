import React from 'react'




const Card = ({name, email, username}) => {
	const link =  `https://robohash.org/${username}?200x200`
  return (
      <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-4'>
        <img alt='' src={link} />
        <div>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
  )
}

export default Card
