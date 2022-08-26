import './singlecocktail.css';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import Yukleniyor from '../components/Yukleniyor';




let secid = window.location.href.substring(window.location.href.lastIndexOf("/") + 1, window.location.href.length);

export default function SingleCocktail(){

    const [bilgi, setBilgi] = useState({});
    const [bekleme, setBekleme] = useState(true);
    const [hata, setHata] = useState(false);
    const navigate = useNavigate()

    

    useEffect(()=>{
        const secilenveri = async () =>{
            let data = await fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + (window.location.href.substring(window.location.href.lastIndexOf("/") + 1, window.location.href.length)));
            let temizveri = await data.json();
            console.log("temizveri fetch içinden : ", temizveri);
            if(temizveri.drinks !== null){
                setBilgi(temizveri.drinks[0]);
                setBekleme(false);
            }else{
                setHata(true);
            }
            
    
        } 
    
        secilenveri();
    },[]);


    console.log("içerden gelen nesne : ", bilgi);
    console.log("içerden gelen nesne uzunluk : ", bilgi.length);

    if(hata){

        navigate(`/nopage`, { replace: true });


    }else{


    if(!bekleme){
    return (
        <div className="singlecCover">
            <div className="singlecTopArea">

                <Link className="ccardBtn" to="/">Back Home</Link> 

                <p className="cocktailName">{bilgi.strDrink}</p>
            </div>

            <div className='scmiddle'>
            <div className="singlecLeftSide">
                <img className='singlecimg' src={bilgi.strDrinkThumb} alt="scpicture"/>
            </div>

            <div className="singlecRightSide">
                <p className='lineauth'><span className="singlecTextLabel">Name :</span> <span className="singlecText">{bilgi.strDrink}</span></p>
                <p className='lineauth'><span className="singlecTextLabel">Category :</span> <span className="singlecText">{bilgi.strCategory}</span></p>
                <p className='lineauth'><span className="singlecTextLabel">Info :</span> <span className="singlecText">{bilgi.strAlcoholic}</span></p>
                <p className='lineauth'><span className="singlecTextLabel">Glass :</span> <span className="singlecText">{bilgi.strGlass}</span></p>
                <p className='lineauth'><span className="singlecTextLabel">Instructons :</span> <span className="singlecText">{bilgi.strInstructions}</span></p>

                <p className='lineauth'><span className="singlecTextLabel">Ingredients :</span><span className="singlecText">
                {bilgi.strIngredient1 !== null ? bilgi.strIngredient1 + ", " : ""}
                {bilgi.strIngredient2 !== null ? bilgi.strIngredient2 + ", " : ""}
                {bilgi.strIngredient3 !== null ? bilgi.strIngredient3 + ", " : ""}
                {bilgi.strIngredient4 !== null ? bilgi.strIngredient4 + ", " : ""}
                {bilgi.strIngredient5 !== null ? bilgi.strIngredient5 + ", " : ""}
                {bilgi.strIngredient6 !== null ? bilgi.strIngredient6 + ", " : ""}
                {bilgi.strIngredient7 !== null ? bilgi.strIngredient7 + ", " : ""}
                {bilgi.strIngredient8 !== null ? bilgi.strIngredient8 + ", " : ""}
                {bilgi.strIngredient9 !== null ? bilgi.strIngredient9 + ", " : ""}
                {bilgi.strIngredient10 !== null ? bilgi.strIngredient10 + ", " : ""}
                {bilgi.strIngredient11 !== null ? bilgi.strIngredient11 + ", " : ""}
                {bilgi.strIngredient12 !== null ? bilgi.strIngredient12 + ", " : ""}
                {bilgi.strIngredient13 !== null ? bilgi.strIngredient13 + ", " : ""}
                {bilgi.strIngredient14 !== null ? bilgi.strIngredient14 + ", " : ""}
                {bilgi.strIngredient15 !== null ? bilgi.strIngredient15 + ", " : ""}
                </span></p>


            </div>
            </div>





        </div>
    )
}else{

    return <Yukleniyor/>
    // return(
    //     <div className="singlecCover">
    //         <h2> Sabır sabır !</h2>
    //     </div>
    // )
}

}

}