import React from 'react';

import SimpleContext from './../../context/SimpleContext';

import { Alert, Badge } from 'react-bootstrap';

// import context from 'react-bootstrap/esm/AccordionContext';

const Header = ({ personsLength }) => {
	let badgeStyle = '';
	if (personsLength >= 3) badgeStyle = 'success';
	if (personsLength <= 2) badgeStyle = 'warning';
	if (personsLength <= 1) badgeStyle = 'danger';

	return (
		<div>
			<SimpleContext.Consumer>
				{context => (
					<div>
						<Alert variant='info'>
							<h2>{context.state.appTitle}</h2>
						</Alert>

						<Alert variant='light'>
							Number of persons :
							<Badge pill variant={badgeStyle}>
								{context.state.persons.length}
							</Badge>
						</Alert>
					</div>
				)}
			</SimpleContext.Consumer>
		</div>
	);
};

export default Header;
