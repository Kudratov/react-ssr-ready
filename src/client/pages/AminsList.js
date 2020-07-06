import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchAdmins} from './../actions/index';

import requireAuth from './../components/hocs/requireAuth';

class AdminsList extends Component {
    componentDidMount(){
        this.props.fetchAdmins();
    }

    renderAdmins(){
        this.props.admins.map(admin => {
            return <li key={admin.id}>{admin.name}</li>
        })
    }

    render(){
        return (
            <div>
                <h3>Protectes List of Admins</h3>
                <ul>{this.props.admins.map(admin => {
            return <li key={admin.id}>{admin.name}</li>
        })}</ul>
            </div>
        )
    }
}

function mapStateToProps({admins}){
    return {admins}
}

export default {
    component: connect(mapStateToProps, {fetchAdmins})(requireAuth(AdminsList)),
    loadData: ({dispatch}) => {
        dispatch(fetchAdmins())
    }
}