import Character from './Character';
import useFetchCharacter from '../effects/useFetchCharacter';

const CharacterList = () => {
	const posts = useFetchCharacter();
	return ( 
		<div className='row'>
			{posts.map(post => (
				<Character key={post.id} post={post} />
			))}
		</div>
	 );
}
 
export default CharacterList;