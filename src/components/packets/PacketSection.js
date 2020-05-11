import React from 'react';
import ReactHtmlParser from 'react-html-parser';

import './PacketSection.scss';

const PacketSection = props => {
	const {src, list} = props;

	// Handle bold part of text
	const renderItemName = (item, item2) => {
		const title = item.replace(item2, '<b>' + item2 + '</b>');
		return <p>{ReactHtmlParser(title)}</p>;
	};

	const CLASS = '-tp';

	return (
		<div className={CLASS + '-SectionContent'}>
			<div className={CLASS + '-ImgContainer'}>
				<img src={src} alt="packet included icon" />
			</div>
			<ul className={CLASS + '-ListContainer'}>
				{list.map(item => (
					<li key={item.id}>{renderItemName(item.long_name, item.attributes.attribute_value)}</li>
				))}
			</ul>
		</div>
	);
};

export default PacketSection;
