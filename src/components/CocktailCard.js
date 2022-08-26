import './cocktailcard.css';
import {Link} from 'react-router-dom';
// import {useContext} from 'react';
// import {MerkezVeri} from '../App.js';

export default function CocktailCard(props){

    // const veri = useContext(MerkezVeri);
    // console.log(props.cardData);
    // console.log("card içindeki merkezveri ", veri);
    // veri.setSelectedCocktailid(props.cardData.idDrink);

    let id=props.cardData.idDrink;

    return(
        <div className='ccardCover'>
            <img className='ccardPhoto' src={props.cardData.strDrinkThumb} alt="card"/>
            {/* <img className='ccardPhoto' src={props.item.strDrinkThumb} alt="card"/> */}

            <div className='ccardContextArea'>
                    <p className='cocktailName2'>{props.cardData.strDrink}</p>
                    <p className='glassType'>{props.cardData.strGlass}</p>
                    <p className='drinkType'>{props.cardData.strAlcoholic}</p>
                    
                    <Link className='ccardBtnm' to={`cocktail/${id}`}>Details</Link>

            </div>
        </div>
    )
}