import React, { Component } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ChakraProvider } from '@chakra-ui/react';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import Header from '../components/Header/Header';

class App extends Component {
	render() {
		return (
			<SimpleBar style={{ maxHeight: '100vh', textAlign: 'center' }}>
				<ChakraProvider>
					<>
						<Header />
					</>
				</ChakraProvider>
			</SimpleBar>
		);
	}
}

export default App;
