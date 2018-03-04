import React from 'react';
import {Text} from 'react-native';

export default() =>{
	const first = Math.floor(Math.random() * 12);
	const second = Math.floor(Math.random() * 12);
	const opChoose = Math.floor(Math.random() * 3);
	let operands = [first, second, '='];
	if (opChoose == 0){
		operands[2] = '+';
	} else if ( opChoose == 1){
			 operands[2] = '-';
	} else {
		operands[2] = '*';
	}

	return operands;
}
