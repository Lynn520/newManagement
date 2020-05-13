import React from 'react'
// import screenfull from 'screenfull'
import { Layout } from 'antd';
// import { Icon, message, Menu, Avatar } from 'antd'
const { Header, Content } = Layout;
import styled, { withTheme } from 'styled-components'
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

class MyHeader extends React.Component {
    constructor(props) {
        super(props);
        // const userTheme = JSON.parse(localStorage.getItem('user-theme'));
        // let color = '#13C2C2';
        // if (userTheme) {
        //     window.less.modifyVars(userTheme);
        //     color = userTheme['@primary-color']
        // }
        this.state = {
            isFullscreen: false,    //控制页面全屏
        }
    }


    render() {
        const { isFullscreen, color, infoVisible, passwordVisible } = this.state;
        const { user, theme } = this.props;
        return (
            <MyHeaderProviderStyled>
                <Header className={`header`}>
                    <div className={`menuComponent`}>
                        <div className={`mainMenu`}>
                            <div className="timeBox">
                                <div>2020/04/17 周一</div>
                                <div>09:35:26 北京 23度 晴</div>
                            </div>
                            {this.props.children}
                        </div>
                       
                    </div>

                </Header>
            </MyHeaderProviderStyled>

        )
    }
}

const styles = {
    headerRight: {
        float: 'right',
        display: 'flex',
        height: 64,
        marginRight: 50
    },
    headerItem: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 20px'
    },
    avatarBox: {
        display: 'flex',
        alignItems: 'center',
    }
};

export default MyHeader