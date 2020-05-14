import React,{ Component } from 'react' 
import { connect } from 'react-redux';
import UserManagement from '../components/UserManagement';
import { userListDispatch } from '../../redux/modules/events/userListReducer';
function mapStateToProps(state){
    return{
        userListReducer: state.userListReducer,
    }
}

function mapDispatchToProps(dispatch){
    return{
        userListDispatch:(params) => dispatch(userListDispatch(params)),
       
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserManagement);
