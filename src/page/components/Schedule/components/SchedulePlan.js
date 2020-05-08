import React, { Component } from 'react';
import { Button, Card, } from 'antd';
import styled, { withTheme } from 'styled-components';
import {
    FormOutlined,
  } from '@ant-design/icons';
const SchedulePlanStyled = styled.div`
    .addBtnDiv{
        display: flex;
        align-items: center;
    }
    p{
        margin-bottom: 0;
    }
    .addBtn{
        margin-bottom: 20px;
        width: 100px;
        height: 64px;
        border: 0;
        box-shadow: none;
        background: none;
        img{
            margin-right: 20px;
        }
    }
    .ant-card{
        background: none;
    }
    .cardBox{
        margin: 0 auto;
        display: flex;
    }
    .card{
        width: 250px;
        height: 200px;
        margin-right: 10px;
        border: 1px solid #2140d0;
        box-shadow: inset 0px 0px 10px 10px rgba(33,64,208,0.25);
    }
    .card:hover{
        box-shadow: none;
        background:
            linear-gradient( 
                #1DD5E6 0%, 
                #46AEF7 100%
            );
        p{
            color: #061B57;
        }
        .anticon{
            color: #061B57;
        }
    }
    .ant-card-head{
        height: 30px;
        min-height: 30px;
        border-bottom: none;
    }
    .ant-card-extra{
        padding: 0;
    }
    .cardContent{
        display: flex;
    }
    .scheduleMemberDiv p {
        margin-left: 10px;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px dashed #252b7a;
    }
    .ant-card-body{
        padding: 0 20px; 
    }
    .dateDiv{
        padding-right: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-right: 1px solid #454da8;
    }
}
`
class SchedulePlan extends Component {
    render() {
        const arr = [1,2,3,4,5,6,7]
        const { theme } = this.props
        return (
            <SchedulePlanStyled>
                <div className="addBtnDiv">
                    <Button className="addBtn" type="primary" onClick={this.showModal}>
                        <img src={theme.images.addBtn} />
                    </Button>
                    <p>添加计划</p>
                    <img src={theme.images.addBtnEllipse} />
                </div>
                <div className="cardBox">
                {arr.map(()=><Card className="card" title="" extra={<a href="#"><FormOutlined /></a>}>
                        <div className="cardContent">
                            <div className="dateDiv">
                                <p>&lt;周一&gt;</p>
                                <p>04/18</p>
                                <p>至</p>
                                <p>04/19</p>
                            </div>
                            <div className="scheduleMemberDiv">
                                <p>08:00-12:00 李工程</p>
                                <p>12:00-18:00 李工程</p>
                                <p>18:00-24:00 李工程</p>
                                <p>24:00-08:00 李工程</p>
                            </div>
                        </div>
                    </Card>)}
                </div>
            </SchedulePlanStyled>
        )
    }
}

export default SchedulePlan