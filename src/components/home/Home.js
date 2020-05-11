import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {loadPackets, selectPackages} from 'redux/packetsSlice';

import PacketBox from 'components/packets/PacketBox';

import DropDown from 'components/widgets/DropDown';
import Error from 'components/widgets/Error';
import Spiner from 'components/widgets/Spiner';
import PacketFeatured from 'components/packets/PacketFeatured';

import './Home.scss';

const Home = () => {
	const dispatch = useDispatch();
	const packets = useSelector(selectPackages);

	const {loading, data, selectedOption, assets, error} = packets;

	// call fetch data reducer
	useEffect(() => {
		dispatch(loadPackets());
	}, []);

		if (loading) return <Spiner /> // check loading
	if (error) return <Error error={error}/> // handle error

	const CLASS = 'tp-home';

	return (
		<div className={CLASS}>
			<DropDown />
			<div className={CLASS + '-BoxContainer'}>
				<div className={CLASS + '-BoxContainerWrapper'}>
					{data &&
						data.items.map(item => (
							<React.Fragment key={item.id}>
								<PacketFeatured isFeatured={item.is_featured} text={data.promo_text}/>
								<PacketBox
									promotions={item.promotions}
									old_price_promo_text={item.prices.old_price_promo_text}
									price_recurring={item.prices.price_recurring}
									selectOption={selectedOption}
									is_featured={item.is_featured}
									net={assets.net_category}
									tv={assets.tv_category}
									title={item.name}
									included={item.included}
									key={item.id}
									old_price_recurring={item.prices.old_price_recurring}
								/>
							</React.Fragment>
						))}
				</div>
			</div>
		</div>
	);
};

export default Home;
