import styled from "styled-components";
import Home from "./Home";
import useApi from "../hooks/useApi";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

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
const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 25px;
`;
const AppFrame = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

function DetailProduct(props) {
    const url = "https://previews.123rf.com/images/eugene78/eugene781702/eugene78170200180/71940602-blank-plastic-water-bottle.jpg";
    let {id} = useParams();
    const [product, SetProduct] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data: response} = await axios.get(`${process.env.REACT_APP_API_URL}/product/` + id);
                SetProduct(response);
            } catch (error) {
                console.error(error)
            }
        };
        fetchData().then(product);

    }, []);

    console.log(product)
    return (
        <AppFrame>
            <Home/>
            <Container>
                <ContentBox>
                    <Content1>
                        <ProductImage src={url}/>
                    </Content1>
                    <Content2>
                        <H1>
                            {product.title}
                        </H1>
                        <H3>
                            {product.description}
                        </H3>
                    </Content2>

                </ContentBox>
            </Container>
        </AppFrame>
    );
}

export default DetailProduct