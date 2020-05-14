import React, { Component } from 'react';
import { Tabs, Menu, Dropdown, } from 'antd';
import styled, { withTheme } from 'styled-components';
import ReportList from './../ReportList/index';
import ReportFilter from './../ReportFilter/index';
import { DownOutlined } from '@ant-design/icons';
const { TabPane } = Tabs;
const ReportStyled = styled.div`
    width: 92%;
    margin: 0 auto;
    .ant-tabs-bar{
        display: none;
    }
    .ant-dropdown-link{
        margin-right: 200px;
        color: #fff;
    }
    .dropDownDiv{
        margin-top: 30px;
        margin-bottom: 26px;
        padding-bottom: 16px;
        border-bottom: 1px solid #454DA8;
    }
    .ant-dropdown-menu{
        border: 1px solid #238EDE;
        background: none;
    }
}
`

class Report extends Component {
    callback = () => {
        console.log('ok')
    }
    state = {
        key: '1',
        dropdownSelected: 1,
    }

    menuOnClick = ({ key }) => {
        this.setState({ key })
        if ((1 <= Number(key)) && (Number(key) <= 4)) {
            this.setState({ dropdownSelected: 1 }, () => { console.log(1) })
        } else {
            this.setState({ dropdownSelected: 2 }, () => { console.log(2) })
        }
    }
    render() {
        const { theme } = this.props
        const menu = (
            <Menu onClick={this.menuOnClick}>
                <Menu.Item key="1">
                    <span>
                        传感器警情
                </span>
                </Menu.Item>
                <Menu.Item key="2">
                    <span>
                        安全承诺警情
                </span>
                </Menu.Item>
                <Menu.Item key="3">
                    <span>
                        设备检查警情
                </span>
                </Menu.Item>
                <Menu.Item key="4">
                    <span>
                        安全证书警情
                </span>
                </Menu.Item>
            </Menu>
        );
        const menu2 = (
            <Menu onClick={this.menuOnClick}>
                <Menu.Item key="5">
                    <span>
                        传感器警情
                </span>
                </Menu.Item>
                <Menu.Item key="6">
                    <span>
                        安全承诺警情
                </span>
                </Menu.Item>
                <Menu.Item key="7">
                    <span>
                        设备检查警情
                </span>
                </Menu.Item>
                <Menu.Item key="8">
                    <span>
                        安全证书警情
                </span>
                </Menu.Item>
            </Menu>
        );
        return (
            <ReportStyled>
                <div className='dropDownDiv'>
                    <Dropdown overlay={menu} overlayClassName="reportOverlay">
                        <a className={`ant-dropdown-link`} style={{ color: this.state.dropdownSelected === 1 ? '#FEC920' : '#fff' }} >
                            预警系统
                        </a>
                    </Dropdown>
                    <Dropdown overlay={menu2} overlayClassName="reportOverlay">
                        <a className="ant-dropdown-link" style={{ color: this.state.dropdownSelected === 2 ? '#FEC920' : '#fff' }}>
                            上报警情
                        </a>
                    </Dropdown>
                </div>

                <Tabs defaultActiveKey="1" activeKey={this.state.key} animated={false}>
                    <TabPane tab="Tab 1" key="1">
                        <ReportFilter />
                        <ReportList />
                    </TabPane>
                    <TabPane tab="Tab 2" key="2">
                        <ReportList />
                    </TabPane>
                    <TabPane tab="Tab 3" key="3">
                        Content of Tab Pane 3
                    </TabPane>
                </Tabs>
            </ReportStyled>
        )
    }
}

export default withTheme(Report);
