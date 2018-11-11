import React from 'react';
import Card from './Card';

const CardList = ({ problemas, pagina }) => {
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
	          					local={problemas[i].local}
	          					date={problemas[i].date}
	          				/>
						);
					})
			}
		</div>
	)
}

export default CardList;