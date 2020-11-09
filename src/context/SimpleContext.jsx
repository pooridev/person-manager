import { createContext } from 'react';

const SimpleContext = createContext({
	state: {},
	handleChangePerson: () => {},
	handleDeletePerson: () => {},
	handleNewPerson: () => {},
	setPerson: () => {}
});

export default SimpleContext;
