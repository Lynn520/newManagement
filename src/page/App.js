import React, { Component } from 'react';
// import { Layout } from 'antd';
import { Layout, Loader } from '../components';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import routesConfig from './routes/config';
import { setMinHeight } from '$utils/setMinHeight'
import { classnames, config } from '$utils'
import styled, { ThemeProvider } from 'styled-components'
import Theme from './css/theme'
import { createGlobalStyle } from 'styled-components'
import idx from 'idx'

// const { Header, Content } = Layout;
const { Header, HeadMenu, styles } = Layout;

const ThemeProviderStyled = styled.div`
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
    .userManagementModal{
        .ant-modal-header{
            border: none;
            background: none;
        }
        .ant-modal-content{
            box-shadow: inset 0px 0px 10px 10px rgba(153, 204, 255,0.25);
            border: 1px solid #99CCFF;
            background: rgba(14,25,43,0.8)
        }
        .ant-form-item-label > label{
            color: #fff;
        }
        .ant-input{
            color: #fff;
            background: none;
        }
        .ant-select-single:not(.ant-select-customize-input) .ant-select-selector{
            color: #fff;
            background: none;
        }
        .ant-radio-wrapper{
            color: #fff;
        }
        
    }
    .addAuthorizationModal{
        .ant-modal-header{
            border: none;
            background: none;
        }
        .ant-modal-title{
            color: #fff;
        }
        .ant-modal-content{
            box-shadow: inset 0px 0px 10px 10px rgba(153, 204, 255,0.25);
            border: 1px solid #99CCFF;
            background: rgba(14,25,43,0.8)
        }
        .ant-checkbox-wrapper{
            color: #fff;
        }
    }
    .ant-menu{
        background: none;
    }
    .ant-menu-submenu-popup > .ant-menu{
        background: none;
    }
    .ant-menu-vertical.ant-menu-sub .ant-menu-item{
        color: yellow
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
                    <div
                        className={classnames(styles.layout)}>
                        <Globalstyle />
                        <div className={styles.main}>
                            <Header history={history} >
                                <HeadMenu theme={Theme} />
                            </Header>
                            <div className={styles.container}>
                                <div className={styles.content}>
                                    <RouteWithSubRoutes routes={routesConfig} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <Layout className={`layout`}>
                        <Globalstyle />
                        <Header className={`header`}>
                            <MenuContainer history={history} />
                        </Header>
                        <Content className={`content`} >
                            <RouteWithSubRoutes routes={routesConfig} />
                        </Content>
                    </Layout> */}
                </ThemeProvider>
            </ThemeProviderStyled>
        );
    }
}

export default MainLayout
