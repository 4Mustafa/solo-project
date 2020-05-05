import React, { Component } from 'react'

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class wordResult extends Component {
    handleBack = () => {
        this.props.history.push('/searchWord');
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
                                <th>Site-Name</th>
                                <th>link</th>
                            </tr>
                            <tr>
                                <td>{item.topic}</td>
                                <td>{item.errorcode}</td>
                                <td>{item.site}</td>
                                <td><a href={item.url}>{item.url}</a></td>

                            </tr>
                        </table>


                    )}
                    <button onClick={this.handleBack}>Back</button>
                </div>
            )


        }
    }
    render() {
        return (
            <div>
                {this.displayItems(this.props.word)}
            </div>
        )
    }
}
const putPropsOnRedux = (reduxStore) => ({
    word: reduxStore.word
})
export default withRouter(connect(putPropsOnRedux)(wordResult));

