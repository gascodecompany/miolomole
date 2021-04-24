import React from 'react';
import * as S from './Hamburger.style';

export default function Hamburger({ isOpen, toggle }) {

	return (
		<S.Hamburger className="hamburger" onClick={() => toggle(!isOpen)}>
			<S.HamburgerBread isOpen={isOpen} >
				<S.HamburgerMeat isOpen={isOpen} />
			</S.HamburgerBread>
		</S.Hamburger>
	);
}
