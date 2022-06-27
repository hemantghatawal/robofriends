import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{overflow: 'scroll', border:'1px solid aqua', height:'800px'}}>
			{props.children}
		</div>
	);
}

export default Scroll;