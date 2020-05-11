import React from 'react';
import numberConvertor from 'scripts/numberConvertor';
import ReactHtmlParser from 'react-html-parser';

import './PacketPrices.scss';

const PacketPrice = props => {
	const {old_price_recurring, price_recurring, selectOption, old_price_promo_text} = props;

	const CLASS = '-tp-Price';

	const renderPrice = () => {
		let old_price = old_price_recurring[selectOption];
		let new_price = price_recurring[selectOption];

		let price_for_render;

		if (old_price === '') {
			// render just one price
			price_for_render = <h1>{numberConvertor(new_price)} rsd / mes.</h1>;
		} else {
			// render old and new price
			price_for_render = (
				<>
					<div className={CLASS + '-PriceOldWrapper'}>
						<span>
							<span>
								<b>
									<i>{numberConvertor(old_price)} rsd/mes.</i>
								</b>
							</span>
						</span>
						<h1>
							<i>{numberConvertor(new_price)} rsd/mes.</i>
						</h1>
					</div>
					<div style={{marginTop: -25, marginBottom: 20}}>
						{ReactHtmlParser(old_price_promo_text)}
					</div>
				</>
			);
		}

		return price_for_render;
	};

	return (
		<>
			<div className={CLASS}>{renderPrice()}</div>
		</>
	);
};

export default PacketPrice;
