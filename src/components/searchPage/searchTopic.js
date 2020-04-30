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
        if (this.state.topic === '') {
            alert('Please enter a search type')
        } else {
            event.preventDefault();
            console.log(this.state.topic);
            this.props.dispatch({ type: 'GET_TOPIC', payload: { newTopic: this.state.topic } })
            this.props.history.push('/topicResults');
        }
    }
    handleBack = () => {
        this.props.history.push('/home');
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
                <button onClick={this.handleBack}>BACK</button>

            </div>
        )
    }
}




const putPropsOnReduxStore = (reduxStore) => ({
    reduxStore

});



export default withRouter(connect(putPropsOnReduxStore)(searchTopic));
