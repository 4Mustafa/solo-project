import React, { Component } from 'react';
//Connect to the redux store
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Swal from 'sweetalert2'


export class searchSite extends Component {
    state = {
        site: '',
    }
    handleChange = (event) => {
        this.setState({
            ...this.state,
            site: event.target.value

        })

    }
    handleSubmit = (event) => {
        if (this.state.site === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'please enter in a site!',
            })
        } else {
            event.preventDefault();
            console.log(this.state.site);
            this.props.dispatch({ type: 'GET_SITE', payload: { newSite: this.state.site } })
            this.props.history.push('/siteNameResults');
        }
    }
    handleBack = () => {
        this.props.history.push('/home');
    }

    render() {
        return (
            <div>
                <h1>search by Site Name</h1>
                <input type='text'
                    value={this.state.site}
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



export default withRouter(connect(putPropsOnReduxStore)(searchSite));
