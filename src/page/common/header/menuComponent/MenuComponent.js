import React, { Component } from 'react'
import { Link } from "react-router-dom";
import styled, { withTheme } from 'styled-components'
import debounce from 'lodash/debounce';
import { QueryPC, QueryMobile } from '$components/QueryComponents'
import { Menu, Icon, Select, Modal } from 'antd';
const { Option, OptGroup } = Select;
import MenuMenu from './MenuMenu';


const MenuComponentStyled = styled.div`
    .ant-menu{
        display:flex!important;
        background: none;
        border: 0;
    }
    .mainMenu{
        display: flex;
        height: 64px;
        background: url(${({ theme }) => theme.images.titleBg});
        background-size: 100% 100%;
    }
    .timeBox{
        display: flex;
        flex-direction: column;
        width: 200px;
    }
    .timeBox div{
        display: flex;
        height: 32px;
        line-height: 32px;
        color: #39d6fe;
        font-size: 12px;
    }
`

class MenuComponent extends Component {
    constructor() {
        super()
    }

    render() {
        const { theme, language, settingLang, menuSearchDispatch, menuSearchState, history } = this.props;
        return (
            <MenuComponentStyled className={`menuComponent`}>
                <div className={`mainMenu`}>
                    <div className="timeBox">
                        <div>2020/04/17 周一</div>
                        <div>09:35:26 北京 23度 晴</div>
                    </div>
                    <MenuMenu theme={theme} />
                </div>
            </MenuComponentStyled>

        )
    }
}

export default withTheme(MenuComponent)
