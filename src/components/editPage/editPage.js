import React, { Component } from 'react';
import { connect } from 'react-redux';

class editPage extends Component {

    state = ({
        id: this.props.edit.id,
        errorCode: this.props.edit.errorcode,
        url: this.props.edit.url,
        siteName: this.props.edit.site,
        topic: this.props.edit.topic
    })



    handleChange = name => (event) => {
        this.setState({
            [name]: event.target.value,
        })

    }



    handleClick = (event) => {
        /*        if (this.state.errorCode === '' || this.state.url === '' || this.state.siteName === '' || this.state.topic === '') {
                   alert('Please enter a search type')
               } else {
                   event.preventDefault();
                   console.log('In add form', this.state);
                   this.props.dispatch({
                       type: 'ADD_ITEM', payload: {
                           errorCode: this.state.errorCode,
                           url: this.state.url,
                           siteName: this.state.siteName,
                           topic: this.state.topic
       
                       }
                   })
               } */

        this.setState({
            errorCode: '',
            url: '',
            siteName: '',
            topic: ''
        })
    }

    render() {
        return (
            <form>
                <p>EDIT</p>
                <input
                    type="text"
                    name="errorCode"
                    placeholder=" error Code"
                    onChange={this.handleChange('errorCode')}
                    value={this.state.errorCode} />
                <input
                    type="text"
                    name="url"
                    placeholder="url"
                    onChange={this.handleChange('url')}
                    value={this.state.url} />
                <input
                    type="text"
                    name="siteName"
                    placeholder="site Name"
                    onChange={this.handleChange('siteName')}
                    value={this.state.siteName} />
                <input
                    type="text"
                    name="topic"
                    placeholder="topic"
                    onChange={this.handleChange('topic')}
                    value={this.state.topic} />

                <button onClick={this.handleClick}>Submit</button>
            </form>

        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    edit: reduxState.edit
});

export default connect(mapReduxStateToProps)(editPage);