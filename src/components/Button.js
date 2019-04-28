//import
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

//create component
const Button = ({onPress,children}) => {
	const { buttonStyle, textStyle } = styles;


	return (
			  <TouchableOpacity onPress={onPress} style={buttonStyle}>
			 	<Text style ={textStyle}>
					{children}
			  </Text>
			  	</TouchableOpacity>

	);
};

const styles = {
	textStyle: {
		alignSelf: 'center',
		color: '#007aff',
		fontSize: 10,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10
	},
	buttonStyle: {

		width: '15%',
		alignItems:'center',
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007aff',
		marginLeft: 5,
		marginRight: 5

	}
}
//export
export default Button;