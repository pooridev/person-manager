import { IconButton, Input, InputGroup } from '@chakra-ui/react';
import React from 'react';
import { BiPlus } from 'react-icons/bi';

const Newperson = props => {
	// props
	const { setPerson, newPersonHandler, state } = props;

	return (
		<form onSubmit={newPersonHandler}>
			<InputGroup size='lg' mt='1.2rem'>
				<Input
					id='add-person'
					placeholder='Add new person ...'
					variant='outline'
					onChange={setPerson}
					value={state.person}
				/>
				<IconButton
					aria-label='Add New Person'
					as='button'
					colorScheme='green'
					icon={<BiPlus size='1.2rem' />}
					ml='8px'
					type='submit'
				/>
			</InputGroup>
		</form>
	);
};
export default Newperson;
