import React, { useContext } from 'react';

import SimpleContext from './../../context/SimpleContext';

import { Button } from 'react-bootstrap';

const NewPerson = () => {
	const context = useContext(SimpleContext);
	const { setPerson, handleNewPerson } = context;

	return (
		<div className='m-2 p-2'>
			<form
				className='form-inline justify-content-center'
				onSubmit={event => event.preventDefault()}>
				<div className='input-group col-6 col-md-4'>
					<input
						type='text'
						placeholder='Give me a name'
						className='taskInput form-control'
						onChange={setPerson}
						value={context.state.person}
					/>

					<div className='input-group-prepend'>
						<Button
							type='submit'
							variant='success'
							size='md'
							className='fa fa-plus-square'
							onClick={handleNewPerson}
						/>
					</div>
				</div>
			</form>
		</div>
	);
};

export default NewPerson;
