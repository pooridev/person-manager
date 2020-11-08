import React from 'react';

import { Alert, Badge } from 'react-bootstrap';

const Header = ({ personsLength }) => {
	let badgeStyle = '';
	if (personsLength >= 3) badgeStyle = 'success';
	if (personsLength <= 2) badgeStyle = 'warning';
    if (personsLength <= 1) badgeStyle = 'danger';
    
	return (
		<div>
			<Alert variant='info'>
				<h2>Person Manager</h2>
			</Alert>

			<Alert variant='light'>
				Number of persons :
				<Badge pill variant={badgeStyle}>
					{personsLength}
				</Badge>
			</Alert>
		</div>
	);
};

export default Header;
