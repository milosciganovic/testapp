import React from 'react'

const PacketTitle = ({title}) => {

	const CLASS = '-tp-SectionContent';

	return (
		<div className={CLASS}>
			<h1 className={CLASS + "-Title"}>{title}</h1>
		</div>
	)
}

export default PacketTitle;
