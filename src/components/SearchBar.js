import './searchbar.css';
import {useContext} from 'react';
import {MerkezVeri} from '../App.js';

export default function SearchBar(){

const veri = useContext(MerkezVeri);


    return(
        <div className='sbCover'>
            <p className='sbtext'>Search Your Favorite Cocktail</p>
            <input className='sbinput' type="text" placeholder="Cocktail name please !" 
            onChange={(e)=>{   
                // console.log(e.target.value);
                // veri.setAranan(e.target.value);
                veri.veriGetir(e.target.value);
            }}
            />
        </div>
    )
}