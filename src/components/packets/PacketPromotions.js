import React, {useState, useEffect} from 'react';
import ReactHtmlParser from 'react-html-parser';

import {useSelector} from 'react-redux';
import {selectPackages} from 'redux/packetsSlice';

import './PacketSection.scss';
import './PacketPromotion.scss';

const PacketPromotions = ({promotions}) => {
	const packets = useSelector(selectPackages);
	const {selectedOption} = packets;

	const [promo, setPromo] = useState([]);

	useEffect(() => {
		let promoItems = [];
		if (promotions.length) {
			promotions.map(item => {
				item.discount_variations.map(discount => {
					if (discount === selectedOption) {
						promoItems.push(item);
					}
				});
			});
		}
		setPromo(promoItems);
	}, [selectedOption]);

	const CLASS = '-tp';

	return promo.length ? (
		<div className={CLASS + '-SectionContent PromoSection'}>
			{promo.map(item => (
				<div key={item.id} className="PromoBox">
					<img src={item.promotion_image} alt="promotion_image"/>
					<span>{ReactHtmlParser(item.promo_text)}</span>
				</div>
			))}
		</div>
	) : null;
};

export default PacketPromotions;
