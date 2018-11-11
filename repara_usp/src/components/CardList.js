import React from 'react';
import Card from './Card';

const CardList = ({ problemas }) => {
	return (
		<div>
			{
				problemas.map((user, i) => {
					return (
						<Card
							key={i}
							id = {problemas[i].id}
							image={problemas[i].image}
          					category={problemas[i].category}
          					description={problemas[i].description}
          					local={problemas[i].local}
          					dateSubmitted={problemas[i].dateSubmitted}
          					upvotes = {problemas[i].upvotes}
          					downvotes = {problemas[i].downvotes}
          				/>
					);
				})
			}
		</div>
	)
}

export default CardList;