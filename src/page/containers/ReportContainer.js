import React,{ Component } from 'react' 
import { connect } from 'react-redux';
import Report from '../components/Report';
import { RAMListDispatch, RAMTotalDispatch } from '../../redux/modules/events/RAMListReducer';
function mapStateToProps(state){
    return{
        RAMListReducer: state.RAMListReducer,
    }
}

function mapDispatchToProps(dispatch){
    return{
        RAMListDispatch:(params) => dispatch(RAMListDispatch(params)),
        RAMTotalDispatch: () => dispatch(RAMTotalDispatch()),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Report);
