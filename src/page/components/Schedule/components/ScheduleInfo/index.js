import React, { Component } from 'react';
import { DatePicker, Table, Button, Steps, List } from 'antd';
import UserArrange from '../../../UserArrange/index'
import styled, { withTheme } from 'styled-components';
const { RangePicker } = DatePicker;
const { Step } = Steps
import { CheckCircleFilled, FileTextFilled, FileSearchOutlined,CheckOutlined } from '@ant-design/icons';
// import './index.scss';
const ScheduleInfoStyled = styled.div`
    margin-top: 10px;
    padding-top: 24px;
    border-top: 1px solid #454da8;
    .dateDiv{
        width:1697px;
        display: flex;
        justify-content: space-between;
    }
    .ant-list {
        width:1697px;
    }
    .ant-steps{
        width: 100%;
    }
    .ant-table{
        background: none;
    }
    .ant-table-tbody > tr.ant-table-row:hover > td{
        background:rgba(12,110,193,0.5);
    }
    .ant-steps-item-wait .ant-steps-item-icon > .ant-steps-icon{
        color: 	rgba(255,165,0 ,0.3)
    }
    .ant-picker {
        margin-right: 10px;
        border-radius: 100px;
        background: none;
        .anticon{
            color: #fff;
        }
    }
    .searchBtn{
        margin-right: 10px;
        color: #fff;
        border: none;
        border-radius: 50px;
        background: #2f71a9;
    }
    .exportBtn{
        color: #fff;
        border: none;
        border-radius: 50px;
        background: #525252;
    }
    .ant-list-split .ant-list-item {
        margin-bottom: 20px;
        border: 1px solid #0c6ec1;
        border-radius: 10px;
        background: rgba(12,110,193,.3);
    }
    .ant-list .ant-btn{
        border: none;
        background: none;
    }
    
    .ant-btn .anticon{
        font-size: 50px;
        color: #9fafe6;
    }
    .dataDiv{
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-right: 1px solid #454da8;
    }
    .memberBox>div{
        margin-right: 20px;
        width: 300px;
    }
    .arrange-head{
        width:1697px;
        height:54px;
        background:rgba(12,110,193,0.15);
        display:flex;
        height:54px;
        height:64px;
        padding-left:214px;
        font-size:16px;
        font-weight:400;
        color:rgba(255,255,255,1);
        margin-bottom:16px;
    }
    .arrange-head-item{
        width:313px;
        padding-top:22px;
    }
`

class ScheduleInfo extends Component {
    state = {
        current: 0,
    };
    onChange = current => {
        console.log('onChange:', current);
        this.setState({ current });
    };

    render() {
        const { current } = this.state;
        const columns = [{
            title: '',
            dataIndex: 'data',
            key: 'data',
            render: () => <div>
                <p>&lt;2020&gt;</p>
                <p>04/16-04/17</p>
                <p>周一</p>
            </div>
        }, {
            title: '',
            dataIndex: 'time1',
            key: 'time1',
            render: (text) => <div style={{}}>
                <p>{text}</p>
                <Steps current={current} onChange={this.onChange}>
                    <Step title='' description="" icon={<CheckCircleFilled />} />
                    <Step title='' description="" icon={<FileTextFilled />} />
                </Steps>
            </div>
        }, {
            title: '',
            dataIndex: 'time2',
            key: 'time2',
            render: (text) => <div style={{}}>
                <p>{text}</p>
                <Steps current={current} onChange={this.onChange}>
                    <Step title='' description="" icon={<CheckCircleFilled />} />
                    <Step title='' description="" icon={<FileTextFilled />} />
                </Steps>
            </div>
        }, {
            title: '',
            dataIndex: 'time3',
            key: 'time3',
            render: (text) => <div style={{}}>
                <p>{text}</p>
                <Steps current={current} onChange={this.onChange}>
                    <Step title='' description="" icon={<CheckCircleFilled />} />
                    <Step title='' description="" icon={<FileTextFilled />} />
                </Steps>
            </div>
        }, {
            title: '',
            dataIndex: 'time4',
            key: 'time4',
            render: (text) => <div style={{}}>
                <p>{text}</p>
                <Steps current={current} onChange={this.onChange}>
                    <Step title='' description="" icon={<CheckCircleFilled />} />
                    <Step title='' description="" icon={<FileTextFilled />} />
                </Steps>
            </div>
        },]
        let mockData = [{
            data: '2020 03-04 周一',
            time1: 'XXXX 李助工1',
            time2: 'XXXX 李助工',
            time3: 'XXXX 李助工',
            time4: 'XXXX 李助工',
        }, {
            data: '2020 03-04 周一',
            time1: 'XXXX 李助工2',
            time2: 'XXXX 李助工',
            time3: 'XXXX 李助工',
            time4: 'XXXX 李助工',
        }, {
            data: '2020 03-04 周一',
            time1: 'XXXX 李助工3',
            time2: 'XXXX 李助工',
            time3: 'XXXX 李助工',
            time4: 'XXXX 李助工',
        }, {
            data: '2020 03-04 周一',
            time1: 'XXXX 李助工3',
            time2: 'XXXX 李助工',
            time3: 'XXXX 李助工',
            time4: 'XXXX 李助工',
        }]
        return (
            <ScheduleInfoStyled>
                <div className="dateDiv">
                    <p>值守信息</p>
                    <div>
                        <RangePicker/>
                        <Button className="searchBtn">查询</Button>
                        <Button className="exportBtn">导出</Button>
                    </div>
                </div>
                <div>
                    <div className="arrange-head">
                        <div class='arrange-head-item'>8:00</div>
                        <div class='arrange-head-item'>12:00</div>
                        <div class='arrange-head-item'>18:00</div>
                        <div class='arrange-head-item'>次日00:00</div>
                        <div class='arrange-head-item'>次日08:00</div>
                    </div>
                {/** 
                    <Table
                        columns={columns}
                        dataSource={mockData}
                    />
                */}
                    <List
                        itemLayout="horizontal"
                        dataSource={mockData}
                        renderItem={item => (
                            <List.Item key={item.time1}>
                                <div className="dataDiv">
                                    <p>&lt;2020&gt;</p>
                                    <p>04/16-04/17</p>
                                    <p>周一</p>
                                </div>
                                <div className="memberBox" style={{display: 'flex'}}>
                                    <div>
                    
                                        <UserArrange current={''} user={item.time1} onChange={this.onChange}/>
                                    
                                    </div>
                                    <div>
                    
                                        <UserArrange current={''} user={item.time1} onChange={this.onChange}/>
                                    
                                    </div>
                                    <div>
                                    <UserArrange current={'current'} user={item.time3} onChange={this.onChange}/>
                                    </div>
                                    <div>
                                        <UserArrange current={'wait'} user={item.time1} onChange={this.onChange}/>
                                    </div>
                            
                                    
                                    
                                </div>
                                <div>
                                    <Button>
                                        <FileSearchOutlined />
                                    </Button>
                                    <p>交易记录</p>
                                </div>
                            </List.Item>
                        )}
                    />

                </div>
            </ScheduleInfoStyled>
        )
    }
}

export default ScheduleInfo