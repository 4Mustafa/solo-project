import React, { Component } from 'react'

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Swal from 'sweetalert2'

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
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                this.props.dispatch({ type: 'DELETE_ITEM', payload: { item_id: id, user_id: this.props.reduxStore.user.id } });
                Swal.fire(
                    'Smart Mark Deleted!',

                    'success'
                )
            }
        })

    }




    displayItems = (list) => {

        if (list) {
            return (
                <div>
                    <h1>  ALL MARKS</h1>
                    {list.map(item =>
                        <table>
                            <tr>
                                <th>Topic</th>
                                <th>Error-Code</th>
                                <th>Site-Name</th>
                                <th>link</th>
                                <th>delete result </th>
                                <th>edit result</th>

                            </tr>
                            <tr>
                                <td>{item.topic}</td>
                                <td>{item.errorcode}</td>
                                <td>{item.site}</td>

                                <td><a href={item.url}>{item.url}</a></td>
                                <td> <button onClick={() => this.handleEdit(item)}>Edit</button></td>
                                <td>   <button onClick={() => this.handleDelete(item.id)}>Delete</button></td>
                            </tr>
                        </table>
                    )
                    }
                </div >
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
    getItem: reduxStore.getItem,
    reduxStore
})
export default withRouter(connect(putPropsOnRedux)(allResults));
