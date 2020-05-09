import React, { Component } from 'react'

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class siteName extends Component {
    handleBack = () => {
        this.props.history.push('/searchSite');
    }

    handleGsearch = (search) => {
        window.open(
            `https://www.google.com/search?q=${search}`, "_blank");

    }


    displayItems = (list) => {
        if (list) {
            return (
                <div class="move">
                    <table>
                        <tr>
                            <th>Topic</th>
                            <th>Error-Code</th>
                            <th>Site-Name</th>
                            <th>link</th>
                            <th> search on Google</th>

                        </tr>
                        {list.map(item =>


                            <tr>
                                <td>{item.topic}</td>
                                <td>{item.errorcode}</td>
                                <td>{item.site}</td>
                                <td><a href={item.url}>{item.url}</a></td>
                                <td><button onClick={() => this.handleGsearch(item.site)}>Search for {item.site}</button></td>

                            </tr>


                        )}
                        <button onClick={this.handleBack}>Back</button>
                    </table>
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
