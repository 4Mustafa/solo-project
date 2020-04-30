import React, { Component } from 'react'

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class allResults extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'GET_ALLRESULTS' });
    }


    render() {
        return (
            <div>
                <header> ALL RESULTS</header>
                {this.props.all.map(item =>
                    <tr>
                        <h1>topic:{item.topic}</h1>
                        <h1>error code:{item.errorcode}</h1>
                        <h1>url{item.url}</h1>
                        <h1>site name{item.site}</h1>
                    </tr>


                )}
            </div>
        )
    }
}
const putPropsOnRedux = (reduxStore) => ({
    all: reduxStore.getItem
})
export default withRouter(connect(putPropsOnRedux)(allResults));

