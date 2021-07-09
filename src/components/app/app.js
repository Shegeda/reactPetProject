import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import { CharacterPage, BooksPage, HousesPage } from '../pages';
import gotService from '../../services/gotService';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './app.css';


export default class App extends Component {
    gotService = new gotService()

    state = {
        showRandomChar: true,
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    toggleRundomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
        })
    }

    render() {
        const char = this.state.showRandomChar ? <RandomChar /> : null;

        if (this.state.error) {
            return <ErrorMessage />
        }

        return (
            <Router>
                <div className='app'>
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <Row>
                            <Col lg={{ size: 5, offset: 0 }}>
                                {char}
                                <button
                                    className="toggle-btn"
                                    onClick={this.toggleRundomChar}
                                >Toggle random character</button>
                            </Col>
                        </Row>
                        <Route path='/characters' component={CharacterPage}/>
                        <Route path='/books' component={BooksPage}/>
                        <Route path='/houses' component={HousesPage}/>
                        {/* <CharacterPage /> */}
                        {/* <BooksPage /> */}
                        {/* <HousesPage /> */}
                    </Container>
                </div>
            </Router>
        );
    }
};