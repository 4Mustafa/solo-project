import React, { Component } from 'react'

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Swal from 'sweetalert2'



class myResults extends Component {



    componentDidMount() {
        this.handleRefresh()
    }

    handleRefresh() {
        this.props.dispatch({ type: 'GET_MYRESULTS', payload: this.props.reduxStore.user.id });


    }

    handleEdit = (item) => {
        if (item.user_id === this.props.reduxStore.user.id) {
            this.props.history.push('/EditPage')
            this.props.dispatch({ type: 'HOLD_ITEM', payload: item });
            console.log('item is', item);
        } else {
            alert('cannot edit other users Marks')
        }

    }
    handleDelete = (item) => {
        if (item.user_id === this.props.reduxStore.user.id) {
            console.log('in handle delete', item);
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
                    this.props.dispatch({ type: 'DELETE_ITEM', payload: { item_id: item.id, user_id: this.props.reduxStore.user.id } });
                    Swal.fire(
                        'Smart Mark Deleted!',

                        'success'
                    )
                    this.props.dispatch({ type: 'GET_MYRESULTS', payload: this.props.reduxStore.user.id });
                }
            })
        } else {
            alert('cannot delete other users Marks')
        }
    }




    displayItems = (list) => {

        if (list) {
            return (
                <div>
                    <h1>  MY MARKS</h1>
                    {list.map(item =>
                        <table>
                            <tr>
                                <th>Topic</th>
                                <th>Error-Code</th>
                                <th>Site-Name</th>
                                <th>Link</th>
                                <th>Edit Mark</th>
                                <th>Delete Mark </th>



                            </tr>
                            <tr>
                                <td>{item.topic}</td>
                                <td>{item.errorcode}</td>
                                <td>{item.site}</td>

                                <td><a href={item.url}>{item.url}</a></td>
                                <td> <button onClick={() => this.handleEdit(item)}>Edit</button></td>
                                <td>   <button onClick={() => this.handleDelete(item)}>Delete</button></td>

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
                {this.displayItems(this.props.getMine)}
            </div>
        )
    }
}
const putPropsOnRedux = (reduxStore) => ({
    getMine: reduxStore.getMine,
    reduxStore
})
export default withRouter(connect(putPropsOnRedux)(myResults));
