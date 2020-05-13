import React, { Component } from 'react'
// import './index.scss';
import { CheckOutlined,FileTextFilled } from '@ant-design/icons';
import styled, { withTheme } from 'styled-components';
const UserArrangeStyled = styled.div`
.user-arrange-user{
    width: 264px;
    padding-left:59px;
    margin-bottom:23px;
    height:17px;
    font-size:16px;
    font-weight:400;
    color:rgba(255,255,255,1);
}
.user-arrange-inner{
    width: 264px;
    display: flex;
    justify-content: center;
    align-items: center;
    .user-arrange-icon{
        position: relative;
        width: 59px;
        height: 59px;
        background:linear-gradient(0deg,rgba(70,174,247,1) 0%,rgba(29,213,230,1) 100%);
        border-radius:50%;
        text-align: center;
        font-size: 36px;
        color:#05154C;
        z-index:1;
    
    }
    .user-arrange-line{
        width: 141px;
        border-top:2px solid #1fcee4;

    }
    &.-current{
        .user-arrange-icon.-right{
            background:linear-gradient(0deg,rgba(247,203,107,1) 0%,rgba(251,169,128,1) 100%);
        }
    }
    &.-wait{
        .user-arrange-icon.-left{
            &:after{
                content:'';
                position: absolute;
                width: 67px;
                height: 67px;
                left: -4px;
                top: -4px;
                z-index:0;
                border-radius: 50%;
                background-color: rgba(255,255,255,0.5);
            }
            background:linear-gradient(0deg,rgba(247,203,107,1) 0%,rgba(251,169,128,1) 100%);
        }
        .user-arrange-icon.-right{
            border-color:rgba(255,255,255,0.5);
            opacity: 0.5;
            background:linear-gradient(0deg,rgba(247,203,107,1) 0%,rgba(251,169,128,1) 100%);
        }
        .user-arrange-line{
            border-color:#525252;
            border-style: dashed;
        }
    }
    
}
`



class UserArrange extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { theme, language, settingLang, menuSearchDispatch, menuSearchState, history } = this.props;
        return (
            <UserArrangeStyled>
                <div className="user-arrange-user">{this.props.user}</div>
                <div className={`user-arrange-inner ${this.props.current?'-'+this.props.current:null}`}>
            
                    <div class="user-arrange-icon -left">
                        <CheckOutlined />
                    </div>
                    <div className="user-arrange-line">

                    </div>
                    <div class="user-arrange-icon -right">
                        <FileTextFilled />
                    </div>
                </div>

            </UserArrangeStyled>
           
        )
    }
}

export default UserArrange