import styled from "styled-components";
import Home from "./Home";
import React, {useEffect, useState} from "react";
import Product from "./Product";
import axios from "axios";
import {Link} from "react-router-dom";

const ButtonAdd = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1.5em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;
const HeaderFrame = styled.div`
  min-height: 50px;
  min-width: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;

  & > ul {
    list-style: none;
    display: flex;

    & > li:not(:nth-child(1)) {
      margin-left: 10px;
    }
  }
`;
const WelcomeWrapper = styled.div`
  text-align: center;
  display: flex;
`;
const AppFrame = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;
const ProductsWrapper = styled.div`
  text-align: center;
  display: flex;
`;

function Products() {
    //const [products, err] = useApi("products");
    const [products, SetProducts] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get(`${process.env.REACT_APP_API_URL}/products`);
                SetProducts(response);
            } catch (error) {
                console.error(error)
            }
        };
        fetchData().then(products);

    }, []);

console.log(products)
    return (
        <AppFrame>
            <Home/>
            <ProductsWrapper>
                {products &&
                    products.map((product, index) => (
                        <Product key={index} product={product}/>
                    ))
                }
            </ProductsWrapper>
            <ButtonAdd><Link to={'/AddProduct/'}>Add Product</Link></ButtonAdd>
        </AppFrame>
    )
}

export default Products