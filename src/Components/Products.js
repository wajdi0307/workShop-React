import styled from "styled-components";
import Home from "./Home";
import React, {useEffect, useState} from "react";
import Product from "./Product";
import axios from "axios";

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
        </AppFrame>

    )
}

export default Products