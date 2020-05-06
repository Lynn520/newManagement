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
    
    .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab{
        color: #fff;
        background: #1A3BB7;
    }
    .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab-active{
        color: #fec920;
    }
    
}
`

class  UserManagement extends Component{
    render(){
        const { theme } = this.props
        return(
            <RAMListStyled>
                <Tabs defaultActiveKey="1" onChange={this.callback} type="card">
                    <TabPane tab="机构用户" key="1">
                        <TabPaneComponent theme={theme}/>
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
