import React from 'react';
import './Spiner.scss';

const Spiner = () => {
	return (
		<>
			<div className="lds-ripple">
				<div></div>
				<div></div>
			</div>
		</>
	);
};

export default Spiner;
