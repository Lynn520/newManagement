import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store from './redux/configureStore';
// import { socket } from './utils/socket';
import { createBrowserHistory } from 'history';
// import AppContainer from './page/routes/';
import App from './page/App';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
var history = createBrowserHistory();
// socket.init({
//   wsHost: '/',
//   onConn: () => {
//     socket.wsEmit({ name: 'msg' });
//     socket.wsEmit({ name: 'loan' });
//     socket.wsEmit({ name: 'userConver' });
//     socket.wsEmit({ name: 'product' });
//     socket.wsEmit({ name: 'cooperator' });
//     socket.wsEmit({ name: 'equipment' });
//   },
//   onReceiveMsg: data => {
//     const contentTypeMap = {
//       msg: SAVE_MAP,
//       loan: SAVE_LOAN,
//       userConver: SAVE_LOAN,
//       product: SAVE_LOAN,
//       cooperator: SAVE_LOAN,
//       equipment: SAVE_LOAN,
//     };

//     const action = contentTypeMap[data.contentType];

//     if (action) {
//       store.dispatch({ type: action, payload: { ...data.data } });
//     } else {
//       console.error(`ws resp ${data.contentType} not match...`);
//     }
//   },
//   onDisconn() {},
// });

// socket.initWs();

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
            {/* <AppContainer /> */}
            <App />
          </ConfigProvider>
        </ConnectedRouter>
      </Provider>
    );
  }
}
