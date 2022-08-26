import './cocktaillist.css';
import CocktailCard from './CocktailCard';
import {useContext} from 'react';
import {MerkezVeri} from '../App.js';


export default function CocktailList(){
    const veri = useContext(MerkezVeri);

    // console.log("bak bakalım : ", veri.cocktails.length);

    if(veri.cocktails !== null ){
        return(
            <div className='clCover'>
                <p className='clHeader'>Cocktails</p>
                <div className='clcArea'>
                    { veri.cocktails.map((item, index)=>{return <CocktailCard key={index} cardData={item} /> })} 
                    
                </div>
            </div>
        )
    }else{
        return  <h1 className='clHeader'>No Cocktails Matched Your Search Criteria</h1>
    }



}