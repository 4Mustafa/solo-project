
import React, { Component } from 'react'

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Swal from 'sweetalert2'



class allResults extends Component {



    componentDidMount() {
        this.handleRefresh()
    }


    handleAdd = (item) => {
        if (item.has_voted === true && item.direction === 1) {
            console.log('cannot add')
        } else {
            console.log('plus one ');
            this.props.dispatch({ type: 'ADD_RATING', payload: item.id });
        }
    }



    handleMinus = (item) => {
        if (item.has_voted === true && item.direction === 2 || item.rating === 0) {
            console.log('cannot minus')
        } else {
            console.log('minus one ');
            this.props.dispatch({ type: 'MINUS_RATING', payload: item.id });
        }
    }
    setFav = (item) => {
        this.props.dispatch({ type: 'ADD_FAV', payload: { item: item, ID: this.props.reduxStore.user.id } });
        Swal.fire({
            position: 'middle-end',
            icon: 'success',
            title: 'added to Favorites',
            showConfirmButton: false,
            timer: 1500
        })

    }


    handleRefresh() {
        this.props.dispatch({ type: 'GET_ALLRESULTS' });

    }

    handleEdit = (item) => {
        if (item.user_id === this.props.reduxStore.user.id) {
            this.props.history.push('/EditPage')
            this.props.dispatch({ type: 'HOLD_ITEM', payload: item });
            console.log('item is', item);
        } else {
            Swal.fire({
                position: 'middle-end',
                icon: 'error',
                title: 'cannot edit other users Marks',
                showConfirmButton: false,
                timer: 1600
            })
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
                }
            })
        } else {
            Swal.fire({
                position: 'middle-end',
                icon: 'error',
                title: 'cannot delete other users Marks',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }




    displayItems = (list) => {

        if (list) {
            return (
                <div>
                    <h1>  All Marks</h1>
                    <table>
                        <tr>
                            <th>Topic</th>
                            <th>Error-Code</th>
                            <th>Site-Name</th>
                            <th>Link</th>
                            <th>Edit Mark</th>
                            <th>Delete Mark </th>
                            <th>Rating</th>
                            <th>Favorite</th>



                        </tr>
                        {list.map(item =>

                            <tr>
                                <td>{item.topic}</td>
                                <td>{item.errorcode}</td>
                                <td>{item.site}</td>

                                <td><a href={item.url}>{item.url}</a></td>
                                <td> <button onClick={() => this.handleEdit(item)}>Edit</button></td>
                                <td>   <button onClick={() => this.handleDelete(item)}>Delete</button></td>
                                <td><span onClick={() => this.handleAdd(item)}>&#8679;</span> {item.rating}
                                    <span onClick={() => this.handleMinus(item)}>&#8681;</span>
                                </td>
                                <td onClick={() => this.setFav(item)}>&#10035;</td>

                            </tr>
                        )
                        }
                    </table>
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