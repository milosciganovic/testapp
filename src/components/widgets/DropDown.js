import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {selectPackages, selectOption} from 'redux/packetsSlice';

import './DropDown.scss';

const DropDown = () => {
	const dispatch = useDispatch();
	const options = useSelector(selectPackages);

	const {contract_length_options, selectedOption} = options;

	const [showOptions, setShowOptions] = useState(false);

	useEffect(() => {}, []);

	const changeDropDownOption = item => {
		dispatch(selectOption(item));
		setShowOptions(false)
	};

	let show = showOptions ? 'block' : 'none';

	const CLASS = '-st-DropDown';

	return (
		<div className={CLASS}>
			<p onClick={() => setShowOptions(!showOptions)}>{selectedOption && selectedOption}</p>
			<div className={CLASS + '-Options'} style={{display: show}}>
				{contract_length_options &&
					contract_length_options.map(item => (
						<p key={item} onClick={() => changeDropDownOption(item)}>{item}</p>
					))}
			</div>
		</div>
	);
};

export default DropDown;
