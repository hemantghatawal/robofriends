import React from 'react';

const Card = ({id, name, email}) => {
	return (
		<div className="tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
			<div>
				<img src={`https://robohash.org/${id}?size=200x200`} alt={`robot${id}`} />
			</div>

			<h3>{name}</h3>
			<p>{email}</p>
		</div>
	);
}

export default Card;