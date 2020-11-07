import React from 'react';

const Person = ({ fullName, personDelete, changed }) => {
	return (
		<div className='card text-white bg-info my-3 col-6 col-md-4 mx-auto'>
			<div className='card-body text-center'>
				<p className='d-block'>{`${fullName}`}</p>
				<div className='input-group'>
					<input
						type='text'
						className='form-control'
						placeholder={fullName}
						onChange={changed}
					/>
					<div className='input-group-prepend'>
						<button
							className='btn btn-danger fa fa-trash'
							onClick={personDelete}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Person;
