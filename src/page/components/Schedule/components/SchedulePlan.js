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
        display: flex;
    }
    .cardContent{
        display: flex;
    }
    .dateDiv{
        border-right: 1px solid #fff;
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
                {arr.map(()=><Card title="" extra={<a href="#"><FormOutlined /></a>}  style={{ width: 250, height:200, }}>
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