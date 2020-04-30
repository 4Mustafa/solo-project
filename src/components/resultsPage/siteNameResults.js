import React, { Component } from 'react'

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class siteName extends Component {
    handleBack = () => {
        this.props.history.push('/searchTopic');
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
                                <td><a href={item.url}></a></td>
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
                {this.displayItems(this.props.site)}
            </div>
        )
    }
}
const putPropsOnRedux = (reduxStore) => ({
    site: reduxStore.site
})
export default withRouter(connect(putPropsOnRedux)(siteName));
