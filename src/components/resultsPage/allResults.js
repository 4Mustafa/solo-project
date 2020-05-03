import React, { Component } from 'react'

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import axios from 'axios';

class allResults extends Component {

    componentDidMount() {
        this.handleRefresh()
    }
    handleRefresh() {
        this.props.dispatch({ type: 'GET_ALLRESULTS' });

    }

    handleEdit = (item) => {
        this.props.history.push('/EditPage')
        this.props.dispatch({ type: 'HOLD_ITEM', payload: item });

        console.log('item is', item);

    }
    handleDelete = (id) => {
        console.log('in handle delete', id);
        axios.delete(`/main/${id}`)
            .then((response) => {
                this.handleRefresh()
            })
            .catch((error) => {
                alert('Error on delete');
                console.log('Error on DELTE', error);
            })
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
                                <button onClick={() => this.handleEdit(item)}>Edit</button>
                                <button onClick={() => this.handleDelete(item.id)}>Delete</button>
                            </tr>
                        </table>
                    )}
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
