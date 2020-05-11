import React from 'react';

const Error = ({error}) => {
	return (
		<div>
			<h1 style={{color: 'tomato'}}>{error.message}</h1>
		</div>
	);
};

export default Error;
