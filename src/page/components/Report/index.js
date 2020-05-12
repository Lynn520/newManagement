import React,{ Component } from 'react';
// import { Layout, Pagination, Button, Modal, Icon, Form, Input, Dropdown, Menu, Tabs, Select, } from 'antd';
import styled, { withTheme } from 'styled-components';
import ReportList from './../ReportList/index';
import ReportFilter from './../ReportFilter/index';
import { PlusCircleOutlined, EllipsisOutlined } from '@ant-design/icons';
const ReportStyled = styled.div`
    width: 92%;
    margin: 0 auto;
}
`

class Report extends Component{
    render(){
        const { theme } = this.props
        return(
            <ReportStyled>
                <ReportFilter/>
                <ReportList />
            </ReportStyled>
        )
    }
}

export default withTheme(Report);
