import React, { Component } from 'react'
import { connect } from 'react-redux';
import MenuComponent from './menuComponent/MenuComponent'
import { menuSearch } from '../../../redux/modules/events/menuSearchReducer'

class MenuContainer extends Component {
    render() {
        const { settingLang, language, menuSearchDispatch, menuSearchState, history } = this.props;
        return (
            <MenuComponent
                settingLang={settingLang}
                language={language}
                menuSearchDispatch={menuSearchDispatch}
                menuSearchState={menuSearchState}
                history={history}
            />

        )
    }
}

function mapStateToProps(state) {
    return {
        menuSearchState: state.menuSearchReducer,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        menuSearchDispatch: (params) => dispatch(menuSearch(params)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuContainer);