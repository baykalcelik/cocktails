import SearchBar from '../components/SearchBar';
import CocktailList from '../components/CocktailList';
import './home.css';

export default function Home(){
    return (
        <div className="homeCover">
            <SearchBar/>
            <CocktailList/>
        </div>
    )
}