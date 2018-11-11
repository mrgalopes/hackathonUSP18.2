import React from 'react';

const Card = ({ image, category, description,date,local }) => {
	return (
		<div className='grow ba br2 pa2 ma2 mh2 dib shadow-5 cardWrap'>
			<div className='fl w-third pa2 br'>
				<img alt='Problem' src={image} />
			</div>
			<div className='fl w-two-thirds pa2 tl '>
				<h2>{category}</h2>
				<p>{date}</p>
				<p>{local}</p>
				<p>{description}</p>
				<p></p>
			</div>
		</div>
	)
}

export default Card