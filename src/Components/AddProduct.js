import React, {useState} from 'react';
import Home from "./Home";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import axios from "axios";
import product from "./Product";

function AddProduct(props) {
    const [newProduct, setnewProduct] = useState({
        title:''
    });

    function AddNewProduct(e) {
        e.preventDefault();
        console.log(newProduct.title)
        const postData = {
            title: newProduct.title,
            description: newProduct.description,
            price: newProduct.price,
        }
        axios.post(`${process.env.REACT_APP_API_URL}/product`, postData).then((response)=> console.log(response));

    };
    const handleChange = (event) => {
        setnewProduct({
            ...newProduct,
            [event.target.name]: event.target.value
        });
    }
    return (

        <div>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                crossOrigin="anonymous"
            />
            <Home/>
            <html>
            <head>
                <title>Add Product</title>
            </head>
            <body>
            <Container>
                <Row>
                    <Col>
                        <h1>
                            <center>Add Product</center>
                        </h1>
                        <Form onSubmit={AddNewProduct}>
                            <Form.Group className="mb-3" controlId={newProduct.title}>
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="Enter Title"
                                              value={newProduct.title}
                                              onChange={handleChange}/>
                                <Form.Text className="text-muted">
                                    Enter the title
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" placeholder="Description"
                                              value={newProduct.description}
                                              onChange={handleChange}/>
                                <Form.Text className="text-muted">
                                    Enter the Description
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="text" placeholder="Price"
                                              value={newProduct.price}
                                              onChange={handleChange}/>
                                <Form.Text className="text-muted">
                                    Enter the price
                                </Form.Text>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Save
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            </body>
            </html>
        </div>
    );
}

export default AddProduct;