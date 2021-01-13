import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import classes from './Header.module.css';

const Header = () => {
	return (
		<Box
			as='header'
			bg='#F6FBFF'
			boxShadow='1px 1px 3px #fefefe'
			mb='1.2rem'
			py='3rem'>
			<Heading>Person Manager</Heading>
		</Box>
	);
};

export default Header;
