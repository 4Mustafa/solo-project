import React, { Component } from 'react'

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class topicResult extends Component {
    handleBack = () => {
        this.props.history.push('/searchTopic');
    }

    handleGsearch = (search) => {
        window.open(
            `https://www.google.com/search?q=${search}`, "_blank");

    }


    displayItems = (list) => {

        if (list) {

            return (

                <div>
                    <header> All Marks Including {list.topic}</header>
                    <table>
                        <tr>
                            <th>Topic</th>
                            <th>Error-Code</th>
                            <th>Site-Name</th>
                            <th>link</th>
                            <th> Did you want to search for "{item.topic}" on Google</th>

                        </tr>
                        {list.map(item =>

                            <tr>
                                <td>{item.topic}</td>
                                <td>{item.errorcode}</td>
                                <td>{item.site}</td>
                                <td><a href={item.url}>{item.url}</a></td>
                                <td><button onClick={() => this.handleGsearch(item.topic)}>Yes</button></td>

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
                {this.displayItems(this.props.topic)}
            </div>
        )
    }
}
const putPropsOnRedux = (reduxStore) => ({
    topic: reduxStore.topic
})
export default withRouter(connect(putPropsOnRedux)(topicResult));

