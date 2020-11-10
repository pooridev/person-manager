import { createContext } from 'react';

const SimpleContext = createContext({
	persons: [],
	person:'',
	handleChangePerson: () => {},
	handleDeletePerson: () => {},
	handleNewPerson: () => {},
	setPerson: () => {}
});

export default SimpleContext;
