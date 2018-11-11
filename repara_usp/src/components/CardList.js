import React from 'react';
import Card from './Card';
import { problemas } from '../problemas'

const CardList = ({ problemas }) => {
	return (
		<div>
			{
				problemas.map((user, i) => {
					return (
						<Card
							key={i}
							image={problemas[i].image}
          					category={problemas[i].category}
          					description={problemas[i].description}
          				/>
					);
				})
			}
		</div>
	)
}

export default CardList;