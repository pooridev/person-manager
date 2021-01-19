import {
	Box,
	Flex,
	IconButton,
	Input,
	Spacer
} from '@chakra-ui/react';
import React, { Component } from 'react';
import { BiTrashAlt } from 'react-icons/bi';
class Person extends Component {
	render() {
		const { name, changed, clicked } = this.props;

		return (
				<Box
					as='li'
					background='#fff'
					borderColor='#d2d6dc'
					borderStyle='solid'
					borderWidth='1px'
					fontSize='1.2rem'
					listStyleType='none'
					my='20px'
					p={4}
					rounded='md'
					textAlign='left'
					w='100%'>
					<Flex alignItems='center'>
						<Box>
							<Input
								size='lg'
								value={name}
								variant='unstyled'
								onChange={changed}
							/>
						</Box>
						<Spacer />
						<Box>
							<IconButton
								icon={<BiTrashAlt size='1.2rem' />}
								outline='none'
								aria-label='Delete Person'
								colorScheme='red'
								ml='8px'
								onClick={clicked}
							/>
						</Box>
					</Flex>
				</Box>
		);
	}
}
export default Person;
