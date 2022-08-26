
import './cocktailapp.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import SingleCocktail from './pages/SingleCocktail';
import Nopage from './pages/Nopage';



function CocktailApp() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path='cocktail/:id' element={<SingleCocktail />} />
          <Route path="*" element={<Nopage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default CocktailApp;