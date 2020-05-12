import React, { Component } from 'react';
import { EyeOutlined,BellOutlined } from '@ant-design/icons';
import styled, { withTheme } from 'styled-components';
import { DatePicker, Table, Button, Steps, List} from 'antd';
const ReportListStyled = styled.div`
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
    height: 52px;
    line-height: 52px;
    font-size: ${({ theme }) => theme.fonts.font16};
    text-align: center;
    color: #fff;
    height:52px;
    background:rgba(12,110,193,0.3);
    border-top:1px solid rgba(12,110,193,1);
    border-bottom:1px solid rgba(12,110,193,1);
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



class ReportList extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        const { theme, language, settingLang, menuSearchDispatch, menuSearchState, history } = this.props;
        const columns = [{
            title: '序号',
            dataIndex: 'num',
            key: 'num',
        }, {
            title: '区域',
            dataIndex: 'area',
            key: 'area',
            
        }, {
            title: '企业名称',
            key: 'name',
            dataIndex: 'name',
        }, {
            title: '行业类型',
            dataIndex: 'industy',
            key: 'industy',
            
        }, {
            title: '预警级别',
            dataIndex: 'type',
            key: 'type',
            render:(text,record) =>(
                <span style={{color:text=='high'?'red':text=='low'?'green':''}}>
                    <BellOutlined/>
                </span>
            )
            
        }, {
            title: '发送时间',
            key: 'time',
            dataIndex: 'time',
            
        }, {
            title: '预警原因',
            key: 'reason',
            dataIndex: 'reason',
        }, {
            title: '警情内容',
            key: 'content',
            dataIndex: 'content',
            
        }, {
            title: '警情状态',
            key: 'status',
            dataIndex: 'status',
        }, {
            title: '操作',
            key: 'action',
            dataIndex: 'action',
            render: (text, record) => (
                <span>
                  <EyeOutlined />
                   </span>
              ),
        }];
        let mockData ={
            total:20,
            item:[
                {
                    area:'河南省XXX市XXX区',
                    num:'1',
                    name:'我是企业名称',
                    industy:'行业名称',
                    type:'high',
                    time:'2020/04/28 11:27',
                    reason:'平均消警时长',
                    content:'设备编号+设备名称+报警原因',
                    status:'已消警'
                },
                {
                    num:'1',
                    area:'河南省XXX市XXX区',
                    name:'我是企业名称',
                    industy:'行业名称',
                    type:'normal',
                    time:'2020/04/28 11:27',
                    reason:'平均消警时长',
                    content:'设备编号+设备名称+报警原因',
                    status:'已消警'
                },
                {
                    num:'1',
                    area:'河南省XXX市XXX区',
                    name:'我是企业名称',
                    industy:'行业名称',
                    type:'high',
                    time:'2020/04/28 11:27',
                    reason:'平均消警时长',
                    content:'设备编号+设备名称+报警原因',
                    status:'已消警'
                },
                {
                    num:'1',
                    area:'河南省XXX市XXX区',
                    name:'我是企业名称',
                    industy:'行业名称',
                    type:'high',
                    time:'2020/04/28 11:27',
                    reason:'平均消警时长',
                    content:'设备编号+设备名称+报警原因',
                    status:'已消警'
                },
                {
                    num:'1',
                    area:'河南省XXX市XXX区',
                    name:'我是企业名称',
                    industy:'行业名称',
                    type:'high',
                    time:'2020/04/28 11:27',
                    reason:'平均消警时长',
                    content:'设备编号+设备名称+报警原因',
                    status:'已消警'
                },
                {
                    num:'1',
                    area:'河南省XXX市XXX区',
                    name:'我是企业名称',
                    industy:'行业名称',
                    type:'normal',
                    time:'2020/04/28 11:27',
                    reason:'平均消警时长',
                    content:'设备编号+设备名称+报警原因',
                    status:'已消警'
                },
                {
                    num:'1',
                    area:'河南省XXX市XXX区',
                    name:'我是企业名称',
                    industy:'行业名称',
                    type:'low',
                    time:'2020/04/28 11:27',
                    reason:'平均消警时长',
                    content:'设备编号+设备名称+报警原因',
                    status:'已消警'
                }
            ]
        }
        return (
            <ReportListStyled>

                <Table
                    columns={columns}
                    dataSource={mockData.item}
                    onChange={this.props.onChange}
                    pagination={{
                        showQuickJumper: { goButton: <div className="gotoBtn"></div> },
                        pageSize: 15,
                        defaultCurrent: Number(this.props.pageNum) || 1,
                        current: Number(this.props.pageNum) || 1
                    }}
                    loading={!mockData.item.length}
                />
            </ReportListStyled>
           
        )
    }
}

export default ReportList