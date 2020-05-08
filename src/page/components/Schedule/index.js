import React,{ Component } from 'react';
import { Layout, Pagination, Button, Modal, Icon, Form, Input, Dropdown, Menu, Tabs, Select, } from 'antd';
import styled, { withTheme } from 'styled-components';
import SchedulePlan from './components/SchedulePlan'
import ScheduleInfo from './components/ScheduleInfo'
import { PlusCircleOutlined, EllipsisOutlined, } from '@ant-design/icons';
const ScheduleStyled = styled.div`
    width: 92%;
    margin: 0 auto;
}
`

class  UserManagement extends Component{
    render(){
        const { theme } = this.props
        return(
            <ScheduleStyled>
                <SchedulePlan theme={theme} />
                <ScheduleInfo theme={theme} />
            </ScheduleStyled>
        )
    }
}

export default withTheme(UserManagement);
