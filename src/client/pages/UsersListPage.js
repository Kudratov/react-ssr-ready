import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchUsers} from './../actions/index';

class UsersList extends Component {
    componentDidMount(){
        this.props.fetchUsers();
    }

    renderUsers(){
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>
        })
    }
    
    render() {
        return (
            <div>
                Here is big list of users
                <ul>{this.renderUsers()}</ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        users: state.users
    }
}

function loadData(store) {
    return store.dispatch(fetchUsers('33'));
}

export default {
    loadData,
    component: connect(mapStateToProps, {fetchUsers})(UsersList)
}