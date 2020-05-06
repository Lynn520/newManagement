import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom';
import routesConfig from '../routes/config';
import { setMinHeight } from '$utils/setMinHeight'
import MenuContainer from '../common/header/MenuContainer';
import styled, { ThemeProvider } from 'styled-components'
import Theme from '../css/theme'
import { createGlobalStyle } from 'styled-components'
import idx from 'idx'

const { Header, Content } = Layout;

const ThemeProviderStyled = styled.div`
    .layout{
        min-width: 1920px;
        background: #000c40;
        position:relative;
        box-sizing:border-box;
        min-height:100vh;
    }
    .ant-layout-header{
        padding: 0;
    }
    .ant-layout-content{
        margin-top: 20px;
    }
    /*危险化学品监测系统*/
    /*顶部导航*/
    
    .ant-menu-horizontal > .ant-menu-item, .ant-menu-horizontal > .ant-menu-submenu{
        padding-top: 16px;
    }
    .ant-menu-horizontal > .ant-menu-item-selected{
        border: none;
    }
    .ant-menu-horizontal > .ant-menu-item, .ant-menu-horizontal > .ant-menu-submenu{
        padding: 30px 0 0;
        border: 0;
    }
    .ant-menu-horizontal > .ant-menu-item:hover, .ant-menu-horizontal > .ant-menu-submenu:hover, .ant-menu-horizontal > .ant-menu-item-active, .ant-menu-horizontal > .ant-menu-submenu-active, .ant-menu-horizontal > .ant-menu-item-open, .ant-menu-horizontal > .ant-menu-submenu-open, .ant-menu-horizontal > .ant-menu-item-selected, .ant-menu-horizontal > .ant-menu-submenu-selected{
        border: 0;
    }
    .ant-menu-horizontal > .ant-menu-item-active a{
        border-bottom: 1px solid #fec920;
    }
    .ant-menu-horizontal > .ant-menu-item > a ,.ant-menu-submenu-title{
        padding: 0 10px 5px;
        height: 16px;
        line-height: 16px;
        color: #fff;
        border-right: 1px solid #1A3BB7!important;
    }
    .ant-menu-horizontal > .ant-menu-item-selected > a{
        color: #fec920;
    }
    .ant-menu-horizontal > .ant-menu-item > a:hover,.ant-menu-submenu-title:hover,.ant-menu-item a:hover{
        color: #fec920;
    }
    /*顶部导航*/

    /*表单部分*/
    
`

const Globalstyle = createGlobalStyle`　
body{
    font-size: 16px;
    color: #fff;

    h1,h2,h3,h4,h5,h6{
        margin: 0;
        padding: 0;
        color: #fff;
    }
    p{
        color: #fff;
    }
}
`
const RouteWithSubRoutes = ({ routes }) => {
    return (
        // 循环3套子路由，最后一套没有子路由的重定向
        <Switch>
            {
                routes.map(route => {
                    return (
                        route.routes.map(subRoute => {
                            return (
                                <Route path={`${subRoute.path}`}
                                    render={() =>
                                        <div>
                                            <Switch>
                                                <Route {...subRoute} path={`${subRoute.path}`} ></Route>
                                            </Switch>
                                        </div>
                                    }
                                >
                                </Route>
                            )
                        })
                    )
                })
            }
            <Route component={() => <div>not found</div>} />
        </Switch>
    )
};
RouteWithSubRoutes.propTypes = {
    routes: PropTypes.array.isRequired,
};

class MainLayout extends Component {


    componentDidMount() {
        setMinHeight()
    }
    componentWillReceiveProps(nextProps) {
        const currentRoute = idx(this.props, _ => _.location.pathname);
        const nextRoute = idx(nextProps, _ => _.location.pathname);
        if (currentRoute !== nextRoute) {

            if (this.props.history.action !== 'POP') {
                this.scrollTimeout = null;
                window.scrollTo(0, 0);
                //向RN发送路由改变的消息
                let ua = window.navigator.userAgent
                if ((ua.search('FSCiOS') > -1) || (ua.search('FSCAndroid') > -1)) {
                    let messageObj = { ...nextProps.location }
                    messageObj.action = 'history';
                    (window["ReactNativeWebView"] || window).postMessage(JSON.stringify(messageObj))
                }
            }
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps != this.props) {
            setMinHeight()
        }
    }

    render() {
        const { history } = this.props
        return (
            <ThemeProviderStyled>
                <ThemeProvider theme={Theme}>
                    <Layout className={`layout`}>
                        <Globalstyle />
                        <Header className={`header`}>
                            <MenuContainer history={history} />
                        </Header>
                        <Content className={`content`} >
                            <RouteWithSubRoutes routes={routesConfig} />
                        </Content>
                    </Layout>
                </ThemeProvider>
            </ThemeProviderStyled>
        );
    }
}

export default MainLayout