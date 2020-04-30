import React, { Component } from 'react'

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class errorResult extends Component {
    handleBack = () => {
        this.props.history.push('/searchError');
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
                {this.displayItems(this.props.error)}
            </div>
        )
    }
}
const putPropsOnRedux = (reduxStore) => ({
    error: reduxStore.error
})
export default withRouter(connect(putPropsOnRedux)(errorResult));
