import React, { Component } from 'react';
//Connect to the redux store
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


export class searchWord extends Component {
    state = {
        word: '',
    }
    handleChange = (event) => {
        this.setState({
            ...this.state,
            word: event.target.value

        })

    }
    handleSubmit = (event) => {
        if (this.state.word === '') {
            alert('Please enter a search type')
        } else {
            event.preventDefault();
            console.log(this.state.word);
            this.props.dispatch({ type: 'GET_WORD', payload: { newWord: this.state.word } })
            this.props.history.push('/wordResults');

        }
    }
    handleBack = () => {
        this.props.history.push('/home');
    }

    render() {
        return (
            <div>
                <h1>search by Refrence-Words</h1>
                <input type='text'
                    value={this.state.word}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleSubmit}>SEARCH </button>
                <button onClick={this.handleBack}>BACK</button>

            </div>
        )
    }
}




const putPropsOnReduxStore = (reduxStore) => ({
    reduxStore

});



export default withRouter(connect(putPropsOnReduxStore)(searchWord));
