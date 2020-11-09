import React, { useContext } from 'react';

import SimpleContext from './../../context/SimpleContext';

import { Alert, Badge } from 'react-bootstrap';

// import context from 'react-bootstrap/esm/AccordionContext';

const Header = () => {
	const context = useContext(SimpleContext);
	const { persons, appTitle } = context.state;

	let badgeStyle = '';
	if (persons.length >= 3) badgeStyle = 'success';
	if (persons.length <= 2) badgeStyle = 'warning';
	if (persons.length <= 1) badgeStyle = 'danger';

	return (
		<div>
			<div>
				<Alert variant='info'>
					<h2>{appTitle}</h2>
				</Alert>

				<Alert variant='light'>
					Number of persons :
					<Badge pill variant={badgeStyle}>
						{persons.length}
					</Badge>
				</Alert>
			</div>
		</div>
	);
};

export default Header;
