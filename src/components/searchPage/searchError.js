import React, { Component } from 'react';
//Connect to the redux store
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Swal from 'sweetalert2'


export class searchError extends Component {
    state = {
        error: '',
    }
    handleChange = (event) => {
        this.setState({
            ...this.state,
            error: event.target.value

        })

    }
    handleSubmit = (event) => {
        if (this.state.error === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'please enter in a error!',
            })
        } else {
            event.preventDefault();
            console.log(this.state.error);
            this.props.dispatch({ type: 'GET_ERROR', payload: { newError: this.state.error } })
            this.props.history.push('/errorResults');

        }
    }
    handleBack = () => {
        this.props.history.push('/home');
    }

    render() {
        return (
            <div>
                <h1>search by Error</h1>
                <input type='text'
                    value={this.state.error}
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



export default withRouter(connect(putPropsOnReduxStore)(searchError));
