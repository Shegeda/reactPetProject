import React, { Component } from 'react'

import './titlePage.css';
import img from './title.jpg';

export default class TitlePage extends Component {
    render() {
        return (
            <>
                <img src={img} className='titleImg' alt='title'></img>
                <span className='titleSpan'>
                    Welcome to the Game of Thrones DB
                </span>
            </>
        )
    }
}