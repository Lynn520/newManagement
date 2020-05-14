import React from 'react'
// import screenfull from 'screenfull'
import { Layout } from 'antd';
// import { Icon, message, Menu, Avatar } from 'antd'
const { Header, Content } = Layout;
import styled, { withTheme } from 'styled-components'
import moment from 'moment';
const DATEFORMAT = 'YYYY/MM/DD dddd';
const TIMEFORMAT = 'HH:mm:ss';
import styles from './Header.less'
import { classnames } from 'utils'

const MyHeaderProviderStyled = styled.div` 
    .ant-menu{
        display:flex!important;
        background: none;
        border: 0;
    }
    .mainMenu{
        display: flex;
        height: 64px;
        background: url(${({ theme }) => theme.images.titleBg});
        background-size: 100% 100%;
    }
    .timeBox{
        display: flex;
        flex-direction: column;
        width: 200px;
    }
    .timeBox div{
        display: flex;
        height: 32px;
        line-height: 32px;
        color: #39d6fe;
        font-size: 12px;
    }
`
export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            isFullscreen: false,    //控制页面全屏
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                date: new Date(),
            })
        }, 1000)
    }

    render() {
        return (
            <MyHeaderProviderStyled>
                <Header className={classnames('header', { [styles.grid]: this.props.grid })}>
                    <div className={`menuComponent`}>
                        <div className={`mainMenu`}>
                            <div className="timeBox">
                                <div>
                                    {moment(this.state.date).format(DATEFORMAT)}
                                </div>
                                <div>{moment(this.state.date).format(TIMEFORMAT)} 北京 23度 晴</div>
                            </div>
                            {this.props.children}
                        </div>

                    </div>

                </Header>
            </MyHeaderProviderStyled>
        )
    }
}

