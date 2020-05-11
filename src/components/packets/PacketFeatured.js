import React from 'react';


const PacketFeatured = ({isFeatured, text}) => {
	const CLASS = 'tp-home';

	if (isFeatured === 1) {
		return (
			<div className={CLASS + '-Featured'}>
				<div>
					<p>{text}</p>
				</div>
			</div>
		);
	}
	return <div className={CLASS + '-FeaturedEmpty'}></div>;
};


export default PacketFeatured;
