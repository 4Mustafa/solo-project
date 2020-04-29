import React, { Component } from 'react'

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class errorResult extends Component {
    handleBack = () => {
        this.props.history.push('/searchError');
    }




    render() {
        return (
            <div>
                {JSON.stringify(this.props.topic)}
                <header>RESULTS</header>
                {this.props.topic.map(item =>
                    <tr>
                        <h1>topic:{item.topic}</h1>
                        <h1>error code:{item.errorcode}</h1>
                        <h1>url{item.url}</h1>
                        <h1>site name{item.site}</h1>
                    </tr>


                )}
                <button onClick={this.handleBack}>BACK</button>
            </div>
        )
    }
}
const putPropsOnRedux = (reduxStore) => ({
    topic: reduxStore.topic
})
export default withRouter(connect(putPropsOnRedux)(errorResult));

