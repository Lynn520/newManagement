import React, { Component } from 'react';
// import { Layout } from 'antd';
import { Layout, Loader } from 'components';
import PropTypes from 'prop-types';

import { classnames, config } from '$utils'
import styled, { ThemeProvider } from 'styled-components'
import { createGlobalStyle } from 'styled-components'

// const { Header, Content } = Layout;
const { Header, HeadMenu, styles } = Layout;
import Theme from '../css/theme'


class Index extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            grid: false
        }
    }

    render() {
        const { grid } = this.state;
        return (
            <div
                className={classnames(styles.layout, { [styles.grid]: grid })}>
                <div className={styles.main}>
                    <Header history={history} grid={grid}>
                        <HeadMenu theme={Theme} />
                    </Header>
                    {this.props.children}

                </div>
            </div>
        )
    }
}

export default Index
