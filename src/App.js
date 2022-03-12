import './App.css';
import Product from "./Components/Product";
import styled from "styled-components";
import Home from "./Components/Home";
import useApi from "./hooks/useApi";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductDetail from "./Components/ProductDetail";
import NotFound from "./Components/NotFound";
import Products from "./Components/Products";


const AppFrame = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

function App() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/detailProduct/:id"  element={<ProductDetail/>}/>
                <Route path="/product" element={<Products/>}/>
                <Route exact path="/" element={<Home/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
