import React from 'react';
import { StyledHamburger, StyledHamburgerBread, StyledHamburgerMeat } from './Hamburger.style';

export default function Hamburger({ isOpen, toggle }) {

	return (
		<StyledHamburger className="hamburger" onClick={() => toggle(!isOpen)}>
			<StyledHamburgerBread isOpen={isOpen} >
				<StyledHamburgerMeat isOpen={isOpen} />
			</StyledHamburgerBread>
		</StyledHamburger>
	);
}
