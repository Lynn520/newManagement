import React,{ Component } from 'react';
import { DatePicker, Table, Button } from 'antd';
import styled, { withTheme } from 'styled-components';
const { RangePicker } = DatePicker;

const ScheduleInfoStyled = styled.div`
    .dateDiv{
        display: flex;
        justify-content: space-between;
    }
`

class ScheduleInfo extends Component{
    render(){
        return(
            <ScheduleInfoStyled>
                <div className="dateDiv">
                    <p>值守信息</p>
                    <div>
                        <RangePicker />
                        <Button>查询</Button>
                        <Button>导出</Button>
                    </div>
                </div>
            </ScheduleInfoStyled>
        )
    }
}

export default ScheduleInfo