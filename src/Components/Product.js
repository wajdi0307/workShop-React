import styled from "styled-components";
import React, {useEffect, useState} from 'react';
import useApi from "../hooks/useApi";
import Home from "./Home";
import {Link} from "react-router-dom";


const ProductFrame = styled.div`
  border-radius: 25px;
  min-height: 200px;
  min-width: 200px;
  background-color: rgb(110, 110, 110, 0.7);
  margin: 10px;
  display: flex;
  flex-direction: column;

`;

const ProductImageWrapper = styled.div`
  margin: 5px;
  max-width: 200px;
`;
const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 25px;
`;
const ProductInfoWrapper = styled.div`
  margin-top: auto;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;

  & > span {
    text-align: center;
  }
`;
const ProductFrameBest = styled.div`
  border-radius: 25px;
  min-height: 200px;
  min-width: 200px;
  background-color: #DB7093;
  margin: 10px;
  display: flex;
  flex-direction: column;
  animation: clignote 2s linear infinite;
  @keyframes clignote {
    50% {
      opacity: 0.5;
    }
  }
`;
const ProductImageWrapperBest = styled.div`
  margin: 5px;
  max-width: 200px;
`;
const ProductImageBest = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 25px;
`;
const ProductInfoWrapperBest = styled.div`
  color: white;
  margin-top: auto;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;

  & > span {
    text-align: center;
  }
`;
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1.5em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;


const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 0.5fr 0.5fr;
  grid-template-areas:
    "content content"
    "footer footer";
  text-align: left;
  grid-gap: 0.25rem;
  transition: all 0.25s ease-in-out;
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1.2fr 1fr;
    grid-template-areas:
      "content"
      "footer";
  }
  color: black;
`;
const ContentBox = styled.div`
  display: flex;
  gap: 0.25rem;
  padding: 0.25rem;
  align-items: center;
  grid-area: content;
  justify-content: center;
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const Content1 = styled.div`
  background: transparent !important;
  padding: 0.25rem;
  width: 40%;
  height: 100%;
`;
const Content2 = styled.div`
  background: transparent !important;
  padding: 0.25rem;
  width: 60%;
  height: 100%;
`;
;
const Footer = styled.footer`
  background: transparent;
  grid-area: footer;
  padding: 0.25rem;
  text-align: right !important;
`;


const H1 = styled.h1`
  font-size: 3.5em;
  font-weight: bold;
`;

const H3 = styled.h3`
  color: palevioletred;
  font-size: 1.25em;
  font-weight: bold;
`;
const Span = styled.span`
  color: grey;
  font-size: 1.25em;
`;

const ProductsWrapper = styled.div`
  text-align: center;
  display: flex;
`;
const AppFrame = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

function Product(props) {

    const [products, err] = useApi("products");
    const [like, setLike] = useState(0);

    var addLikes = () => {
        setLike(like + 1)
    }
    useEffect(() => {
    }, []);

    /*  const detail = () => {
          return <Redirect to="/ProductDetail"/>
      }*/
    if (like < 5) {
        return (
            <AppFrame>
                <Home/>
                <ProductsWrapper>

                    {products &&
                    products.map(product => (
                        <ProductFrame>
                            <ProductImageWrapper>
                                <ProductImage src={product.image}/>
                            </ProductImageWrapper>
                            <ProductInfoWrapper>

                                {product.title}<br/>
                                <li><Link to={'/detailProduct/'+ product._id}> detailProduct</Link></li>
                                {product.price}<br/>
                                Like : {like}
                            </ProductInfoWrapper>
                            <Button onClick={addLikes}>Like</Button>
                        </ProductFrame>

                    ))
                    }
                </ProductsWrapper>

            </AppFrame>
        )
    } else {
        return (

            <AppFrame>
                <Home/>
                <ProductsWrapper>
                    {products &&
                    products.map(product => (
                        <ProductFrameBest>
                            <ProductImageWrapperBest>
                                <ProductImage src={product.image}/>
                            </ProductImageWrapperBest>
                            <ProductInfoWrapperBest>
                                {product.title}<br/>
                                <li><Link to={'/detailProduct/'+ product._id}> detailProduct</Link></li>
                                {product.price}<br/>
                                Like : {like}
                            </ProductInfoWrapperBest>
                            <Button onClick={addLikes}>Like</Button>
                        </ProductFrameBest>
                    ))
                    }
                </ProductsWrapper>
            </AppFrame>


        )
    }


}

export default Product
