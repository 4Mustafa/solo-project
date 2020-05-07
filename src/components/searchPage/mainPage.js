import React, { Component } from 'react';
//Connect to the redux store
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Swal from 'sweetalert2'

export class MainPage extends Component {

    state = {
        option: '',
    }
    handleChange = (event) => {
        this.setState({
            ...this.state,
            option: event.target.value

        })
        console.log(event.target.value);


    }

    handleSubmit = (event) => {
        if (this.state.option === '1') {
            this.props.history.push('/searchSite');

        } else if (this.state.option === '2') {
            this.props.history.push('/searchError');

        } else if (this.state.option === '3') {
            this.props.history.push('/searchTopic');
        } else if (this.state.option === '4') {
            this.props.history.push('/searchWord');

        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'please select a search type!',
            })
        }
        console.log(this.state.option);

    }
    render() {
        return (
            <div>
                <h1>SELECT A SEARCH TYPE</h1>
                <select onChange={this.handleChange} value={this.state.option}>
                    <option value='' >Select</option>
                    <option value='1'>SITE NAME</option>
                    <option value='2'>ERROR CODE</option>
                    <option value='3'>TOPIC</option>
                    <option value='4'>Refrence-Words</option>

                </select>
                <button onClick={this.handleSubmit}>SELECT </button>



            </div>
        )
    }
}




const putPropsOnReduxStore = (reduxStore) => ({
    reduxStore

});



export default withRouter(connect(putPropsOnReduxStore)(MainPage));