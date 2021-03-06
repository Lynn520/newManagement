import React,{ Component } from 'react';
import { Layout, Pagination, Button, Modal, Icon, Form, Input, Dropdown, Menu, Tabs, Select, } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import styled, { withTheme } from 'styled-components';
import UserManagementTable from './components/UserManagementTable'
import TabPaneComponent from './components/TabPaneComponent'
import { PlusCircleOutlined, EllipsisOutlined, } from '@ant-design/icons';
import idx from 'idx'
const { TabPane } = Tabs;
const { Option } = Select;
const RAMListStyled = styled.div`
    .ant-tabs{
        color: #fff;
    }
    .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab{
        color: #fff;
        background: #1A3BB7;
    }
    .ant-tabs-nav .ant-tabs-tab-active{
        color: #FEC920;
    }
    .ant-tabs-ink-bar{
        background-color: #FEC920;
    }
    .ant-tabs-nav .ant-tabs-tab:hover{
        color: #FEC920;
    }
    .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab-active{
        color: #fec920;
    }
}
`

class  UserManagement extends Component{
    render(){
        const { theme, userListDispatch, } = this.props
        console.log('this.props===>',this.props)

        return(
            <RAMListStyled>
                <Tabs defaultActiveKey="1" onChange={this.callback} type="line">
                    <TabPane tab="机构用户" key="1">
                        <TabPaneComponent theme={theme} userListDispatch={userListDispatch}/>
                    </TabPane>
                    <TabPane tab="企业用户" key="2">
                        <TabPaneComponent theme={theme}/>
                    </TabPane>
                </Tabs> 
            </RAMListStyled>
        )
    }
}

export default withTheme(UserManagement);
