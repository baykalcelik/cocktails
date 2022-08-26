
import './App.css';
import {createContext, useEffect, useState} from 'react';
import CocktailApp from './CocktailApp';
import Yukleniyor from './components/Yukleniyor';


export const MerkezVeri  = createContext();


function App() {

  const [cocktails, setCocktails] = useState([]);
  const [yukleniyor, setYukleniyor] = useState(true);
  const [aranan, setAranan] = useState("m");
  
const veriGetir = async (aranan) => {
  let data = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + aranan);
  let veri = await data.json();
  console.log(veri.drinks);
  setCocktails(veri.drinks);
  setYukleniyor(false);
}


  useEffect(()=>{
    veriGetir(aranan);

  },[])


  return (
    <MerkezVeri.Provider value={{cocktails, setAranan, veriGetir }}>
      {!yukleniyor ? <CocktailApp/> : <Yukleniyor/>}
    </MerkezVeri.Provider>
  );
}

export default App;
