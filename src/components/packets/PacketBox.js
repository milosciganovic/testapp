import React, {useEffect, useState} from 'react';

import Button from 'components/widgets/Button';
import PacketPrice from './PacketPrice';
import PacketSection from './PacketSection';
import PacketTitle from './PacketTitle';

import './PacketSection.scss';
import PacketPromotions from './PacketPromotions';

const PacketBox = props => {
	const [internet, setInternet] = useState([]);
	const [other, setOther] = useState([]);

	const {
		title,
		included,
		selectOption,
		price_recurring,
		old_price_promo_text,
		old_price_recurring,
		net,
		tv,
		promotions,
	} = props;

	const isInternet = included => {
		let internetArr = [];
		let otherArr = [];

		included.map(item => {
			if (item.long_name.includes('internet')) {
				internetArr.push(item);
			} else {
				otherArr.push(item);
			}
		});

		setInternet(internetArr);
		setOther(otherArr);
	};

	useEffect(() => {
		isInternet(included);
	}, []);

	const CLASS = '-tp-PacketSection';

	return (
		<>
			<div className={CLASS + ' -SectionHeader'}>
				<PacketTitle title={title} />
			</div>
			<div className={CLASS + ' -TvList'}>
				<PacketSection src={tv} list={other} />
			</div>
			<div className={CLASS + ' -NetList'}>
				<PacketSection src={net} list={internet} />
				<PacketPromotions promotions={promotions} />
			</div>
			<div className={CLASS + ' -Price'}>
				<PacketPrice
					old_price_recurring={old_price_recurring}
					price_recurring={price_recurring}
					selectOption={selectOption}
					old_price_promo_text={old_price_promo_text}
				/>
			</div>
			<div className={CLASS + ' -SectionFooter'}>
				<Button text="Naručite" />
			</div>
		</>
	);
};

export default PacketBox;
