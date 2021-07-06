import React, { Component } from 'react';
import gotService from '../../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

import './itemList.css';

export default class ItemList extends Component {
    gotService = new gotService()

    state = {
        charList: null,
        error: false
    }

    componentDidMount() {
        this.gotService.getAllCharacters()
            .then((charList) => {   
                this.setState({
                    charList,
                    error: false
                })
            })
            .catch(() => {this.onError()})
    }

    // renderItems(arr) {
    //     return arr.map((item) => {
    //         const {id, name} = item;
    //         return (
    //             <li
    //                 key={id}
    //                 className="list-group-item"
    //                 onClick={() => this.props.onCharSelected(id)}
    //                 >
    //                 {name}
    //             </li>
    //         )
    //     })
    // }

    renderItems = (arr) => {
        return arr.map((item, i) => {
            return (
                <li
                    key={i}
                    className="list-group-item"
                    onClick={() => this.props.onCharSelected(41 + i)}>
                    {item.name}
                </li>
            )
        })
    }

    render() {
        const { charList, error } = this.state;

        if (error) {
            return <ErrorMessage />
        }

        if (!charList) {
            return <Spinner />
        }
 
        const items = this.renderItems(charList)

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}