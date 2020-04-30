import React, { Component } from 'react'

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class allResults extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'GET_ALLRESULTS' });
    }
    handleBack = () => {
        this.props.history.push('/home');
    }
    displayItems = (list) => {

        if (list) {
            return (
                <div>
                    <header> RESULTS</header>
                    {list.map(item =>
                        <table>
                            <tr>
                                <th>Topic</th>
                                <th>Error-Code</th>
                                <th>Url</th>
                                <th>Site-Name</th>
                            </tr>
                            <tr>
                                <td>{item.topic}</td>
                                <td>{item.errorcode}</td>
                                <td>{item.url}</td>
                                <td>{item.site}</td>
                                <button onClick={this.handleEdit}>EDIT</button>
                            </tr>
                        </table>
                    )}
                    <button onClick={this.handleBack}>BACK</button>
                </div>
            )


        }
    }
    render() {
        return (
            <div>
                {this.displayItems(this.props.getItem)}
            </div>
        )
    }
}
const putPropsOnRedux = (reduxStore) => ({
    getItem: reduxStore.getItem
})
export default withRouter(connect(putPropsOnRedux)(allResults));
