import React from 'react';
import { Table, Switch } from 'antd';
import { Link } from "react-router-dom";
import styled, { withTheme } from 'styled-components'
const ComponentStyled = styled.div`
margin-top: 16px;
width:auto;
table{
    border-spacing: 0px 10px;
}
.ant-table{
    background: none;
}
.ant-table-pagination.ant-pagination{
  float:none;
}
table a {
    color: ${({ theme }) => theme.colors.linkTextColor};
}
table a:hover{
    color: ${({ theme }) => theme.colors.normalTextColor};
}
tr th{
    padding: 0;
    height: 56px;
    line-height: 56px;
    text-align: center;
    color: #fff;
    border-bottom: none;
    background:rgba(12,110,193,0.15);
}
.ant-table-tbody > tr.ant-table-row:hover > td{
    background:rgba(12,110,193,0.5);
}
tr td{
    padding: 0;
    height: 54px;
    line-height: 54px;
    font-size: ${({ theme }) => theme.fonts.font16};
    text-align: center;
    color: #fff;
    border-top: 1px solid #0c6ec1;
    border-bottom: 1px solid #0c6ec1;
    background:
    linear-gradient( 
        rgba(12,110,193,0.35) 0%, 
        rgba(12,110,193,0.35) 10%, 
        rgba(12,110,193,0) 20%, 
        rgba(12,110,193,0) 80%, 
        rgba(12,110,193,0.35) 90%,
        rgba(12,110,193,0.35) 100%)
    }

tr td:nth-child(1){
    color: ${({ theme }) => theme.colors.smallTitleColor};
    border-radius: 8px 0 0 8px;
    border-left: 1px solid #0c6ec1;
}
tr td:last-child{
    color: ${({ theme }) => theme.colors.smallTitleColor};
    border-radius:0 8px 8px 0;
    border-right: 1px solid #0c6ec1;
}
ul{
    float: none;
    margin: 40px auto 20px;
    text-align: center;
}
.ant-pagination-options-quick-jumper{
    position:relative;
    input{
        position:relative;
        z-index:3;
    }
    .gotoBtn{
        position:absolute;
        z-index:2;
        width:100%;
        height:100%;
        left:0;
        top:0;
        background:rgba(255,255,255,0)
    }
}
`
class RAMListTable extends React.Component {
    state = {
        pageNum: 1,
        pageSize: 15,
        soreFieldStr: 'ramQuota',
        asc: 0,
    }

    getRamDisplayFormart = (ramQuotaBytes) => {
        if (ramQuotaBytes > 1024 * 1024 * 1024) {
            return `${(ramQuotaBytes / (1024 * 1024 * 1024)).toFixed(2)}GB`
        } else if (ramQuotaBytes > (1024 * 1024)) {
            return `${(ramQuotaBytes / (1024 * 1024)).toFixed(2)}MB`
        } else if (ramQuotaBytes > 1024) {
            return `${(ramQuotaBytes / 1024).toFixed(2)}KB`
        }
    }

    componentDidMount() {
        this.props.userListDispatch()
    }

    render() {
        const { language, RAMListReducer } = this.props
        let mockData = [{
            num:'1',
            account: 'zhangsan',
            name: '张三',
            phoneNum: '15990908080',
            area: '东北大区/吉林省/辽宁市',
            companyName:'公司名称',
            staff: '管理员/值班员',
            creator: '莉丝',
            status:'有效',
            action: ''
        },{
            num:'1',
            account: 'zhangsan',
            name: '张三',
            phoneNum: '15990908080',
            area: '东北大区/吉林省/辽宁市',
            companyName:'公司名称',
            staff: '管理员/值班员',
            creator: '莉丝',
            status:'有效',
            action: ''
        },{
            num:'1',
            account: 'zhangsan',
            name: '张三',
            phoneNum: '15990908080',
            area: '东北大区/吉林省/辽宁市',
            companyName:'公司名称',
            staff: '管理员/值班员',
            creator: '莉丝',
            status:'有效',
            action: ''
        },{
            num:'1',
            account: 'zhangsan',
            name: '张三',
            phoneNum: '15990908080',
            area: '东北大区/吉林省/辽宁市',
            companyName:'公司名称',
            staff: '管理员/值班员',
            creator: '莉丝',
            status:'有效',
            action: ''
        },{
            num:'1',
            account: 'zhangsan',
            name: '张三',
            phoneNum: '15990908080',
            area: '东北大区/吉林省/辽宁市',
            companyName:'公司名称',
            staff: '管理员/值班员',
            creator: '莉丝',
            status:'有效',
            action: ''
        },{
            num:'1',
            account: 'zhangsan',
            name: '张三',
            phoneNum: '15990908080',
            area: '东北大区/吉林省/辽宁市',
            companyName:'公司名称',
            staff: '管理员/值班员',
            creator: '莉丝',
            status:'有效',
            action: ''
        },{
            num:'1',
            account: 'zhangsan',
            name: '张三',
            phoneNum: '15990908080',
            area: '东北大区/吉林省/辽宁市',
            companyName:'公司名称',
            staff: '管理员/值班员',
            creator: '莉丝',
            status:'有效',
            action: ''
        },{
            num:'1',
            account: 'zhangsan',
            name: '张三',
            phoneNum: '15990908080',
            area: '东北大区/吉林省/辽宁市',
            companyName:'公司名称',
            staff: '管理员/值班员',
            creator: '莉丝',
            status:'有效',
            action: ''
        }];
       
        
        const columns = [{
            title: '序号',
            dataIndex: 'num',
            key: 'num',
        }, {
            title: '账户',
            dataIndex: 'account',
            key: 'account',
            
        }, {
            title: '姓名',
            key: 'name',
            dataIndex: 'name',
        }, {
            title: '手机号',
            dataIndex: 'phoneNum',
            key: 'phoneNum',
            
        }, {
            title: '区域',
            dataIndex: 'area',
            key: 'area',
            
        }, {
            title: '公司名',
            key: 'companyName',
            dataIndex: 'companyName',
            
        }, {
            title: '用户',
            key: 'staff',
            dataIndex: 'staff',
        }, {
            title: '创建者',
            key: 'creator',
            dataIndex: 'creator',
            
        }, {
            title: '用户状态',
            key: 'status',
            dataIndex: 'status',
        }, {
            title: '操作',
            key: 'action',
            dataIndex: 'action',
            render: (text, record) => (
                <span>
                  <a style={{ marginRight: 16 }}>详情</a>
                  <a style={{ marginRight: 16 }}>编辑</a>
                  <a style={{ marginRight: 16 }}>删除</a>
                  <Switch checkedChildren="启用" unCheckedChildren="禁用" defaultChecked />
                </span>
              ),
        }];
        return <ComponentStyled theme={this.props.theme} >
            <Table
                columns={columns}
                dataSource={mockData}
                onChange={this.props.onChange}
                pagination={{
                    showQuickJumper: { goButton: <div className="gotoBtn"></div> },
                    pageSize: 15,
                    defaultCurrent: Number(this.props.pageNum) || 1,
                    current: Number(this.props.pageNum) || 1
                }}
                loading={!mockData.length}
            />
        </ComponentStyled>
    }
}
export default withTheme(RAMListTable)
