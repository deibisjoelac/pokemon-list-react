import ThemeContext from "../context/ThemeContext";
import React, {useContext} from "react";
const Header = () => {
	const { theme,setTheme} = useContext(ThemeContext)
	const toggleTheme = (cadena) => {
		setTheme(cadena)
	}
	return ( 
		<div className="row mt-2">
			<div className="col-xl-12">
				<h4 className={`text-center my-4 ${theme==='light' ? 'text-primary' : 'text-danger'}`} >The Rick and Morty API {theme}</h4>
				<div className="float-right">
					<button className="btn btn-light" onClick={()=> toggleTheme('light')}>Light</button>
					<button className="btn btn-secondary" onClick={()=> toggleTheme('dark')}>Dark</button>
				</div>
			</div>
		</div> 
	);
}
 
export default Header;