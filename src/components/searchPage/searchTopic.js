import React, { Component } from 'react';
//Connect to the redux store
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


export class searchTopic extends Component {
    state = {
        topic: '',
    }
    handleChange = (event) => {
        this.setState({
            ...this.state,
            topic: event.target.value

        })

    }
    handleSubmit = (event) => {

        event.preventDefault();
        console.log(this.state.topic);
        this.props.dispatch({ type: 'GET_TOPIC', payload: { newTopic: this.state.topic } })
        /*         this.props.history.push('/');
         */
    }

    render() {
        return (
            <div>
                <h1>search By Topic</h1>
                <input type='text'
                    value={this.state.topic}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleSubmit}>SEARCH </button>

            </div>
        )
    }
}




const putPropsOnReduxStore = (reduxStore) => ({
    reduxStore

});



export default withRouter(connect(putPropsOnReduxStore)(searchTopic));
