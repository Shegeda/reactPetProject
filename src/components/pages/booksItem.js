import React, { Component } from 'react'
import gotService from '../../services/gotService'
import ItemDetails, { Field } from '../itemDetails/itemDetails'
import Spinner from '../spinner'

export default class BooksItem extends Component {
    gotService = new gotService()

    state = {
        loading: true
    }

    componentDidMount() {
        this.updateItem()
    }

    updateItem() {
        this.setState({
            loading: false
        })
    }

    render() {

        if (this.state.loading) {
            return (
                <div className="char-details rounded">
                    <Spinner />
                </div>
            )
        }

        return (
            <ItemDetails
                itemId={this.props.bookId}
                getData={this.gotService.getBook} >
                <Field field='numberOfPages' label='Number of pages' />
                <Field field='publisher' label='Publisher' />
                <Field field='released' label='Released' />
            </ItemDetails>
        )
    }
}