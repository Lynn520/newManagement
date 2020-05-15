import React,{ Component } from 'react' 
import { connect } from 'react-redux';
import Chart from '../Chart/Chart';
import { SAVE_LOAN, SAVE_MAP } from '../../redux/types';
// import { RAMListDispatch, RAMTotalDispatch } from '../../redux/modules/events/';

const loan = require('mock/loan');
const userConver = require('mock/userConver');
const product = require('mock/product');
const cooperator = require('mock/cooperator');
const equipment = require('mock/equipment');
function mapStateToProps(state){
    return{
        appReducer: state.appReducer,
        mapReducer: state.mapReducer,
        loanReducer: state.loanReducer,
    }
}

function mapDispatchToProps(dispatch){
    return{
        // RAMListDispatch:(params) => dispatch(RAMListDispatch(params)),
        // RAMTotalDispatch: () => dispatch(RAMTotalDispatch()),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Chart);
