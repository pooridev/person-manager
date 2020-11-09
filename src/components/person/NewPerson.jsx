import React from 'react';

import SimpleContext from './../../context/SimpleContext';

import { Button } from 'react-bootstrap';

const NewPerson = () => {
	return (
		<SimpleContext.Consumer>
			{context => (
				<div className='m-2 p-2'>
					<form
						className='form-inline justify-content-center'
						onSubmit={event => event.preventDefault()}>
						<div className='input-group col-6 col-md-4'>
							<input
								type='text'
								placeholder='Give me a name'
								className='taskInput form-control'
								onChange={context.setPerson}
								value={context.state.person}
							/>

							<div className='input-group-prepend'>
								<Button
									type='submit'
									variant='success'
									size='md'
									className='fa fa-plus-square'
									onClick={context.handleNewPerson}
								/>
							</div>
						</div>
					</form>
				</div>
			)}
		</SimpleContext.Consumer>
	);
};

export default NewPerson;
