import  {useEffect, useState} from "react";

const URL_CHARACTER = "https://rickandmortyapi.com/api/character/";
export default function useFetchCharacter(){
	const [posts, setPosts] = useState([])
	useEffect(() => {
		fetch(URL_CHARACTER)
			.then(response => response.json())	
			.then(json => setPosts(json.results))	
	}, [])
	return posts;
}