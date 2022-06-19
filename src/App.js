import React, {useState} from 'react';
import CharacterList from './components/CharacterList';
import Header from './components/Header';
import ThemeContext from './context/ThemeContext';
function App() {
	const [theme, setTheme] = useState('dark')
	return (
		<ThemeContext.Provider value={{theme,setTheme}}>
			<div className="App container-fluid">
				<Header />
				<CharacterList />
			</div>
		</ThemeContext.Provider>
	);
}

export default App;
