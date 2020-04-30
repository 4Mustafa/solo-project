import React, { Component } from 'react'

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class errorResult extends Component {
    handleBack = () => {
        this.props.history.push('/searchTopic');
    }
    displayItems = (list) => {
        if (list) {
            return (
                <div>
                    <header> RESULTS</header>
                    {list.map(item =>
                        <div>
                            <h1>topic:{item.topic}</h1>
                            <h1>error code:{item.errorcode}</h1>
                            <h1>url:{item.url}</h1>
                            <h1>site name:{item.site}</h1>
                        </div>


                    )}
                    <button onClick={this.handleBack}>BACK</button>
                </div>
            )


        }
    }
    render() {
        return (
            <div>
                {this.displayItems(this.props.error)}
            </div>
        )
    }
}
const putPropsOnRedux = (reduxStore) => ({
    error: reduxStore.error
})
export default withRouter(connect(putPropsOnRedux)(errorResult));
