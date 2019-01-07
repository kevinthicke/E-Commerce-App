import React, { Component } from 'react';
import { Grid, Row, Col, Navbar } from 'react-bootstrap';
import ProductList from './components/ProductList';
import ShoppingList from './components/ShoppingList';

export default class App extends Component {
  render() {
    return (
        <div>
          <Navbar inverse collapseOnSelect>
            <Navbar.Brand>
            <a href="#">Redux-Commerce</a>
            </Navbar.Brand>
          </Navbar>

          <Grid>
            <Row>
              <Col xs={12} md={6}>
                <ProductList/>
              </Col>
              <Col cs={12} md={6}>
                <ShoppingList/>
              </Col>
            </Row>
          </Grid>
        </div>
      );
  }
}
