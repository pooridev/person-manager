import { Badge, Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const Header = props => {
	// props
	const { personsLength } = props;
	return (
		<Box
			as='header'
			bg='#F6FBFF'
			boxShadow='1px 1px 3px #f2f2f2'
			mb='1.2rem'
			py='2.5rem'>
			<Heading>Person Manager</Heading>
			<Text pt='5' fontSize='1.4rem'>
				Persons number :
				<Badge
					colorScheme={personsLength == 0 ? 'red' : 'teal'}
					fontWeight='500'
					fontSize='1.3rem'>
					{personsLength}
				</Badge>
			</Text>
		</Box>
	);
};

export default Header;
