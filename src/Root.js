import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store from './redux/configureStore';
import { createBrowserHistory } from 'history';
import AppContainer from './page/routes/';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
var history = createBrowserHistory();

export default class Root extends Component {
  componentWillMount() {
      const ismatch = window.location.pathname.match(/zh|ja|en/)
      const langVal = {
          'zh': 'Chinese',
          'en': 'English',
          'ja': 'Japanese'
      }

  }
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <ConfigProvider locale={zhCN}>
            <AppContainer />
          </ConfigProvider>
        </ConnectedRouter>
      </Provider>
    );
  }
}
